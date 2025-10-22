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

// Basic CORS allowing local dev origin by default
const allowedOrigin = process.env.CORS_ORIGIN || "http://localhost:5173";
app.use(
  cors({
    origin: allowedOrigin,
    credentials: false,
  })
);

app.use(express.json());

// MySQL pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: true } : undefined,
});

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

// Serve frontend if built (production)
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

// Health endpoint
app.get("/api/health", async (_req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1 AS ok");
    res.json({ ok: true, db: rows[0]?.ok === 1 });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
});

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


