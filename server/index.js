import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);
dotenv.config({ path: path.join(currentDir, ".env") });
const projectRoot = path.join(currentDir, "..");
const distPath = path.join(projectRoot, "dist");

const app = express();

// CORS: allow comma‑separated origins via CORS_ORIGINS or single via CORS_ORIGIN.
// Also permit typical Render domains if provided in the list.
const configuredOrigins = (process.env.CORS_ORIGINS || process.env.CORS_ORIGIN || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow server-to-server and curl
      if (configuredOrigins.includes(origin)) return callback(null, true);
      // Allow subdomains commonly used on Render if developer whitelists base domain
      const allowOnrender = configuredOrigins.some((o) => /onrender\.com$/.test(o));
      if (allowOnrender && /onrender\.com$/.test(new URL(origin).hostname)) {
        return callback(null, true);
      }
      callback(new Error(`CORS: Origin not allowed: ${origin}`));
    },
    credentials: false,
  })
);

app.use(express.json());

// MySQL pool
function createMysqlPoolFromEnv() {
  const dbUrlString =
    process.env.DATABASE_URL || process.env.JAWSDB_URL || process.env.CLEARDB_DATABASE_URL || "";

  if (dbUrlString) {
    const dbUrl = new URL(dbUrlString);
    const sslParam = (dbUrl.searchParams.get("ssl") || dbUrl.searchParams.get("sslmode") || "").toLowerCase();
    const useSsl =
      String(process.env.DB_SSL || "").toLowerCase() === "true" || sslParam === "true" || sslParam === "require";

    return mysql.createPool({
      host: dbUrl.hostname,
      user: decodeURIComponent(dbUrl.username),
      password: decodeURIComponent(dbUrl.password),
      database: dbUrl.pathname.replace(/^\//, ""),
      port: dbUrl.port ? Number(dbUrl.port) : 3306,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      ssl: useSsl ? { rejectUnauthorized: true } : undefined,
    });
  }

  const useSsl = String(process.env.DB_SSL || "").toLowerCase() === "true";
  return mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    ssl: useSsl ? { rejectUnauthorized: true } : undefined,
  });
}

const pool = createMysqlPoolFromEnv();

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587,
  secure: String(process.env.SMTP_SECURE).toLowerCase() === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function ensureSchema() {
  const createTableSql = `
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      company_name VARCHAR(255) NOT NULL,
      phone_country_code VARCHAR(10) DEFAULT NULL,
      phone_number VARCHAR(32) NOT NULL,
      user_agent VARCHAR(512) DEFAULT NULL,
      ip_address VARCHAR(64) DEFAULT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;

  const conn = await pool.getConnection();
  try {
    await conn.query(createTableSql);
  } finally {
    conn.release();
  }
}

// NOTE: SPA fallback is registered AFTER API routes below

// Health endpoint
app.get("/api/health", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    res.json({ ok: true, db: rows[0]?.ok === 1 });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
});

// Optional: clarify method support for /api/contact
app.get("/api/contact", (_req, res) => res.status(405).json({ message: "Method Not Allowed" }));

// Contact submission endpoint
app.post("/api/contact", async (req, res) => {
  const { email, companyName, phoneNumber, phoneCountryCode } = req.body || {};

  if (!email || !companyName || !phoneNumber) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // naive email/phone validation for server-side sanity
  const emailRegex = /.+@.+\..+/;
  if (!emailRegex.test(String(email))) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const ipAddress =
    (req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.socket.remoteAddress || "").toString();
  const userAgent = (req.headers["user-agent"] || "").toString();

  try {
    const insertSql = `
      INSERT INTO contact_submissions (email, company_name, phone_country_code, phone_number, user_agent, ip_address)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [
      String(email).trim(),
      String(companyName).trim(),
      phoneCountryCode ? String(phoneCountryCode).trim() : null,
      String(phoneNumber).trim(),
      userAgent,
      ipAddress,
    ];

    const conn = await pool.getConnection();
    try {
      await conn.execute(insertSql, params);
    } finally {
      conn.release();
    }
    // fire-and-forget email notification
    const toEmail = process.env.EMAIL_TO || process.env.SMTP_USER;
    const html = `
      <div>
        <h2>New Contact Submission</h2>
        <p><strong>Email:</strong> ${String(email).trim()}</p>
        <p><strong>Company:</strong> ${String(companyName).trim()}</p>
        <p><strong>Phone:</strong> ${phoneCountryCode ? String(phoneCountryCode).trim() + " " : ""}${String(
      phoneNumber
    ).trim()}</p>
        <p><strong>IP:</strong> ${ipAddress}</p>
        <p><strong>User-Agent:</strong> ${userAgent}</p>
        <p style="margin-top:12px;">This message contains information regarding the customer that just filled the contact form and submitted it.</p>
      </div>`;
    transporter
      .sendMail({
        from: `Security Council <${process.env.SMTP_USER}>`,
        to: toEmail,
        subject: "New Contact Form Submission",
        html,
      })
      .catch(() => {
        // Ignore email errors for the client response path
      });

    res.status(201).json({ message: "Submission stored" });
  } catch (err) {
    // Duplicate handling or generic error
    res.status(500).json({ message: "Failed to store submission", error: String(err) });
  }
});

// Optional: 404 for unknown /api/* routes
app.use("/api", (_req, res) => res.status(404).json({ message: "Not Found" }));

// Serve frontend if built (production) - register LAST and exclude /api paths
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  // Any non-API GET should return index.html for SPA routing
  app.get(/^\/(?!api)(.*)/, (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

ensureSchema()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.error("Failed to ensure schema:", e);
    process.exit(1);
  });


