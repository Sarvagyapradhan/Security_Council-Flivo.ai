import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
import nodemailer from "nodemailer";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import compression from "compression";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFilePath);
dotenv.config({ path: path.join(currentDir, ".env"), override: true });
const projectRoot = path.join(currentDir, "..");
const distPath = path.join(projectRoot, "dist");

const app = express();

// CORS: allow comma‑separated origins via CORS_ORIGINS or single via CORS_ORIGIN.
// Also permit typical Render domains if provided in the list.
const configuredOrigins = (process.env.CORS_ORIGINS || process.env.CORS_ORIGIN || "")
  .split(",")
  .map((s) => s.trim().replace(/\/$/, ""))
  .filter(Boolean);

// Auto-allow service's own public URL on Render so same-origin works out-of-the-box
const selfOrigins = [
  process.env.RENDER_EXTERNAL_URL, // e.g. https://security-council.onrender.com
  process.env.SELF_ORIGIN,
]
  .filter(Boolean)
  .map((s) => s.replace(/\/$/, ""));

const allowedOrigins = Array.from(new Set([...configuredOrigins, ...selfOrigins]));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow server-to-server and curl
      const normalized = origin.replace(/\/$/, "");
      if (allowedOrigins.includes(normalized)) return callback(null, true);
      // Allow subdomains commonly used on Render if developer whitelists base domain
      const allowOnrender = allowedOrigins.some((o) => /onrender\.com$/.test(o));
      if (allowOnrender && /onrender\.com$/.test(new URL(origin).hostname)) {
        return callback(null, true);
      }
      callback(new Error(`CORS: Origin not allowed: ${origin}`));
    },
    credentials: false,
  })
);

app.use(express.json());

// Compression middleware (gzip/Brotli)
app.use(compression({
  filter: (req, res) => {
    // Compress all responses except if explicitly disabled
    if (req.headers['x-no-compression']) {
      return false;
    }
    return compression.filter(req, res);
  },
  level: 6, // Balance between compression and CPU usage
  threshold: 1024, // Only compress responses larger than 1KB
}));

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

const graphConfig = {
  clientId: process.env.MS_GRAPH_CLIENT_ID,
  clientSecret: process.env.MS_GRAPH_CLIENT_SECRET,
  tenantId: process.env.MS_GRAPH_TENANT_ID,
  sender: process.env.MS_GRAPH_SENDER,
};

const graphConfigured = Boolean(
  graphConfig.clientId && graphConfig.clientSecret && graphConfig.tenantId && graphConfig.sender
);

let smtpTransporter;
function getSmtpTransporter() {
  if (smtpTransporter) return smtpTransporter;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;

  const service = process.env.SMTP_SERVICE;
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
  const secure =
    process.env.SMTP_SECURE?.toLowerCase() === "true" || port === 465;

  const transportConfig = service
    ? {
        service,
        auth: { user, pass },
      }
    : {
        host,
        port,
        secure,
        auth: { user, pass },
      };

  // Allow opt-out of TLS verification for local testing if needed
  if (process.env.SMTP_TLS_REJECT_UNAUTHORIZED === "false") {
    transportConfig.tls = { rejectUnauthorized: false };
  }

  smtpTransporter = nodemailer.createTransport(transportConfig);
  return smtpTransporter;
}

async function fetchApi(...args) {
  if (typeof fetch === "function") {
    return fetch(...args);
  }
  const { default: nodeFetch } = await import("node-fetch");
  return nodeFetch(...args);
}

async function acquireGraphToken() {
  const tokenUrl = `https://login.microsoftonline.com/${graphConfig.tenantId}/oauth2/v2.0/token`;
  const params = new URLSearchParams({
    client_id: graphConfig.clientId,
    client_secret: graphConfig.clientSecret,
    scope: "https://graph.microsoft.com/.default",
    grant_type: "client_credentials",
  });

  const response = await fetchApi(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params,
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => "");
    throw new Error(`Failed to obtain Microsoft Graph token: ${response.status} ${errorBody}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function sendMailViaGraph({ to, subject, html, text, replyTo }) {
  const accessToken = await acquireGraphToken();

  const message = {
    subject,
    body: {
      contentType: html ? "HTML" : "Text",
      content: html || text || "",
    },
    from: {
      emailAddress: { address: graphConfig.sender },
    },
    toRecipients: (Array.isArray(to) ? to : [to]).map((address) => ({
      emailAddress: { address },
    })),
  };

  if (replyTo) {
    const replyList = Array.isArray(replyTo) ? replyTo : [replyTo];
    message.replyTo = replyList.map((address) => ({ emailAddress: { address } }));
  }

  const graphResponse = await fetchApi(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(graphConfig.sender)}/sendMail`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message, saveToSentItems: false }),
    }
  );

  if (!graphResponse.ok) {
    const errorBody = await graphResponse.text().catch(() => "");
    throw new Error(`Failed to send mail via Microsoft Graph: ${graphResponse.status} ${errorBody}`);
  }
}

async function sendMail({ to, subject, html, text, replyTo }) {
  const transporter = getSmtpTransporter();
  if (!transporter) {
    if (graphConfigured) {
      await sendMailViaGraph({ to, subject, html, text, replyTo });
      return;
    }
    throw new Error("No email transport configured (Graph or SMTP).");
  }

  const recipients = Array.isArray(to) ? to.join(",") : to;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || transporter.options.auth.user,
    to: recipients,
    subject,
    html,
    text,
    replyTo,
  });
}

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

async function ensureSchema() {
  const createContactTableSql = `
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

  const createRequestTableSql = `
    CREATE TABLE IF NOT EXISTS request_submissions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      job_title VARCHAR(255) NOT NULL,
      first_name VARCHAR(255) NOT NULL,
      last_name VARCHAR(255) NOT NULL,
      company_name VARCHAR(255) NOT NULL,
      job_function VARCHAR(255) NOT NULL,
      phone VARCHAR(64) NOT NULL,
      country_region VARCHAR(255) NOT NULL,
      user_agent VARCHAR(512) DEFAULT NULL,
      ip_address VARCHAR(64) DEFAULT NULL,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
  `;

  const conn = await pool.getConnection();
  try {
    await conn.query(createContactTableSql);
    await conn.query(createRequestTableSql);
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

// Optional: clarify method support for /api/request
app.get("/api/request", (_req, res) => res.status(405).json({ message: "Method Not Allowed" }));

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
    const toEmail = process.env.EMAIL_TO || graphConfig.sender;
    const submissionDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    }).format(new Date());

    const plainEmail = String(email).trim();
    const plainCompany = String(companyName).trim();
    const plainPhone = `${phoneCountryCode ? `${phoneCountryCode.trim()} ` : ""}${String(phoneNumber).trim()}`;
    const escapedEmail = escapeHtml(plainEmail);
    const escapedCompany = escapeHtml(plainCompany);
    const escapedPhone = escapeHtml(plainPhone);
    const escapedIp = escapeHtml(ipAddress || "N/A");
    const escapedUserAgent = escapeHtml(userAgent || "N/A");

    const ownerSubject = `New Contact Request – ${escapedCompany || "Unknown Company"}`;
    const ownerHtml = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${ownerSubject}</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color:#f5f7fb; padding:24px; color:#0a1640;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:12px; box-shadow:0 12px 24px rgba(10,22,64,0.08); overflow:hidden;">
            <tr style="background:#002856;">
              <td style="padding:22px 28px;">
                <h1 style="margin:0; font-size:20px; color:#ffffff; letter-spacing:0.3px;">Security Council · Contact Request</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px;">
                <p style="margin:0 0 18px; font-size:15px; color:#304067;">Hello team,</p>
                <p style="margin:0 0 22px; font-size:15px; color:#304067;">A new contact submission has been captured on the Security Council website. The details are summarized below:</p>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
                  <tbody>
                    <tr>
                      <td style="width:160px; padding:8px 12px; font-weight:600; color:#0a1640;">Submitted At</td>
                      <td style="padding:8px 12px; color:#304067;">${submissionDate}</td>
                    </tr>
                    <tr style="background:#f4f6fb;">
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Email</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedEmail}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Company</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedCompany}</td>
                    </tr>
                    <tr style="background:#f4f6fb;">
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Phone</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedPhone}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">IP Address</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedIp}</td>
                    </tr>
                    <tr style="background:#f4f6fb;">
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">User Agent</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedUserAgent}</td>
                    </tr>
                  </tbody>
                </table>
                <p style="margin:24px 0 0; font-size:14px; color:#304067; line-height:1.6;">Please follow up with the contact as soon as possible. This email was generated automatically by the Security Council contact workflow.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 28px; background:#f4f6fb; font-size:12px; color:#7181a6;">&copy; ${new Date().getFullYear()} Security Council. All rights reserved.</td>
            </tr>
          </table>
        </body>
      </html>`;
    const ownerText = `New contact submission\n\nSubmitted At: ${submissionDate}\nEmail: ${plainEmail}\nCompany: ${plainCompany}\nPhone: ${plainPhone}\nIP Address: ${ipAddress || "N/A"}\nUser Agent: ${userAgent || "N/A"}`;

    const customerSubject = "We received your request – Security Council";
    const customerHtml = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${customerSubject}</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color:#f5f7fb; padding:24px; color:#0a1640;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:12px; box-shadow:0 12px 24px rgba(10,22,64,0.08); overflow:hidden;">
            <tr style="background:#002856;">
              <td style="padding:24px 30px;">
                <h1 style="margin:0; font-size:22px; color:#ffffff; letter-spacing:0.4px;">Thank you for reaching out</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;">
                <p style="margin:0 0 18px; font-size:15px; color:#304067;">Hi there,</p>
                <p style="margin:0 0 18px; font-size:15px; color:#304067; line-height:1.6;">Thank you for contacting Security Council. Our team has received your request and one of our specialists will connect with you shortly.</p>
                <div style="margin:26px 0; padding:18px 20px; border:1px solid #dde3f1; border-radius:10px; background:#f7f9ff;">
                  <p style="margin:0 0 10px; font-size:13px; font-weight:600; color:#0a1640; text-transform:uppercase; letter-spacing:1.1px;">Request Summary</p>
                  <p style="margin:6px 0; font-size:14px; color:#304067;"><strong>Email:</strong> ${escapedEmail}</p>
                  <p style="margin:6px 0; font-size:14px; color:#304067;"><strong>Company:</strong> ${escapedCompany}</p>
                  <p style="margin:6px 0; font-size:14px; color:#304067;"><strong>Phone:</strong> ${escapedPhone}</p>
                  <p style="margin:6px 0; font-size:14px; color:#304067;"><strong>Submitted:</strong> ${submissionDate}</p>
                </div>
                <p style="margin:0 0 18px; font-size:15px; color:#304067; line-height:1.6;">If your inquiry is urgent, feel free to call us directly at <strong style="color:#002856;">+44 (0) 33 3060 3806</strong>. Otherwise, we appreciate your patience and we look forward to working with you.</p>
                <p style="margin:24px 0 0; font-size:15px; color:#304067;">Warm regards,<br/><span style="font-weight:600; color:#0a1640;">Security Council Client Services</span></p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 30px; background:#f4f6fb; font-size:12px; color:#7181a6;">&copy; ${new Date().getFullYear()} Security Council. All rights reserved.</td>
            </tr>
          </table>
        </body>
      </html>`;
    const customerText = `Thank you for contacting Security Council.\n\nWe have received your request and one of our specialists will reach out shortly.\n\nSummary\nEmail: ${plainEmail}\nCompany: ${plainCompany}\nPhone: ${plainPhone}\nSubmitted: ${submissionDate}\n\nIf you need immediate assistance, call +44 (0) 33 3060 3806.\n\nSecurity Council Client Services`;

    await Promise.all([
      sendMail({
        to: toEmail,
        subject: ownerSubject,
        html: ownerHtml,
        text: ownerText,
        replyTo: plainEmail,
      }),
      sendMail({
        to: plainEmail,
        subject: customerSubject,
        html: customerHtml,
        text: customerText,
        replyTo: toEmail,
      }),
    ]);

    res.status(201).json({ message: "Submission stored" });
  } catch (err) {
    // Duplicate handling or generic error
    console.error("/api/contact error", err);
    res.status(500).json({ message: "Failed to store submission", error: String(err) });
  }
});

app.post("/api/request", async (req, res) => {
  const {
    email,
    jobTitle,
    firstName,
    lastName,
    companyName,
    jobFunction,
    phone,
    countryRegion,
  } = req.body || {};

  if (!email || !jobTitle || !firstName || !lastName || !companyName || !jobFunction || !phone || !countryRegion) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const emailRegex = /.+@.+\..+/;
  if (!emailRegex.test(String(email))) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const ipAddress =
    (req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.socket.remoteAddress || "").toString();
  const userAgent = (req.headers["user-agent"] || "").toString();

  try {
    const insertSql = `
      INSERT INTO request_submissions (
        email,
        job_title,
        first_name,
        last_name,
        company_name,
        job_function,
        phone,
        country_region,
        user_agent,
        ip_address
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const params = [
      String(email).trim(),
      String(jobTitle).trim(),
      String(firstName).trim(),
      String(lastName).trim(),
      String(companyName).trim(),
      String(jobFunction).trim(),
      String(phone).trim(),
      String(countryRegion).trim(),
      userAgent,
      ipAddress,
    ];

    const conn = await pool.getConnection();
    try {
      await conn.execute(insertSql, params);
    } finally {
      conn.release();
    }

    const toEmail = process.env.EMAIL_TO || graphConfig.sender;
    const submissionDate = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    }).format(new Date());

    const plainValues = {
      email: String(email).trim(),
      jobTitle: String(jobTitle).trim(),
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      companyName: String(companyName).trim(),
      jobFunction: String(jobFunction).trim(),
      phone: String(phone).trim(),
      countryRegion: String(countryRegion).trim(),
    };

    const escapedValues = Object.fromEntries(
      Object.entries(plainValues).map(([key, value]) => [key, escapeHtml(value)])
    );
    const escapedIp = escapeHtml(ipAddress || "N/A");
    const escapedUserAgent = escapeHtml(userAgent || "N/A");

    const ownerSubject = `New Briefing Request – ${escapedValues.companyName || "Unknown Company"}`;
    const ownerHtml = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${ownerSubject}</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color:#f5f7fb; padding:24px; color:#0a1640;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:720px; margin:0 auto; background:#ffffff; border-radius:12px; box-shadow:0 12px 24px rgba(10,22,64,0.08); overflow:hidden;">
            <tr style="background:#002856;">
              <td style="padding:24px 30px;">
                <h1 style="margin:0; font-size:20px; color:#ffffff;">Security Council · Briefing Request</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <p style="margin:0 0 20px; font-size:15px; color:#304067;">A new executive briefing request was submitted on the site:</p>
                <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse; font-size:14px;">
                  <tbody>
                    <tr>
                      <td style="width:180px; padding:8px 12px; font-weight:600; color:#0a1640;">Submitted At</td>
                      <td style="padding:8px 12px; color:#304067;">${submissionDate}</td>
                    </tr>
                    <tr style="background:#f4f6fb;">
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Email</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedValues.email}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Name</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedValues.firstName} ${escapedValues.lastName}</td>
                    </tr>
                    <tr style="background:#f4f6fb;">
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Company</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedValues.companyName}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Job Title</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedValues.jobTitle}</td>
                    </tr>
                    <tr style="background:#f4f6fb;">
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Job Function</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedValues.jobFunction}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Phone</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedValues.phone}</td>
                    </tr>
                    <tr style="background:#f4f6fb;">
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">Country / Region</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedValues.countryRegion}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">IP Address</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedIp}</td>
                    </tr>
                    <tr style="background:#f4f6fb;">
                      <td style="padding:8px 12px; font-weight:600; color:#0a1640;">User Agent</td>
                      <td style="padding:8px 12px; color:#304067;">${escapedUserAgent}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 30px; background:#f4f6fb; font-size:12px; color:#7181a6;">&copy; ${new Date().getFullYear()} Security Council. All rights reserved.</td>
            </tr>
          </table>
        </body>
      </html>`;

    const ownerText = `New briefing request\n\nSubmitted At: ${submissionDate}\nEmail: ${plainValues.email}\nName: ${plainValues.firstName} ${plainValues.lastName}\nCompany: ${plainValues.companyName}\nJob Title: ${plainValues.jobTitle}\nJob Function: ${plainValues.jobFunction}\nPhone: ${plainValues.phone}\nCountry / Region: ${plainValues.countryRegion}\nIP Address: ${ipAddress || "N/A"}\nUser Agent: ${userAgent || "N/A"}`;

    const customerSubject = "We received your briefing request – Security Council";
    const customerHtml = `<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <title>${customerSubject}</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, sans-serif; background-color:#f5f7fb; padding:24px; color:#0a1640;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px; margin:0 auto; background:#ffffff; border-radius:12px; box-shadow:0 12px 24px rgba(10,22,64,0.08); overflow:hidden;">
            <tr style="background:#002856;">
              <td style="padding:24px 30px;">
                <h1 style="margin:0; font-size:22px; color:#ffffff; letter-spacing:0.4px;">Thank you for requesting a briefing</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:30px;">
                <p style="margin:0 0 18px; font-size:15px; color:#304067;">Hi ${escapedValues.firstName},</p>
                <p style="margin:0 0 18px; font-size:15px; color:#304067; line-height:1.6;">We appreciate your interest in Security Council. A member of our executive briefing team will review your request and reach out shortly with next steps.</p>
                <div style="margin:26px 0; padding:18px 20px; border:1px solid #dde3f1; border-radius:10px; background:#f7f9ff;">
                  <p style="margin:0 0 10px; font-size:13px; font-weight:600; color:#0a1640; text-transform:uppercase; letter-spacing:1.1px;">Request Summary</p>
                  <p style="margin:6px 0; font-size:14px; color:#304067;"><strong>Email:</strong> ${escapedValues.email}</p>
                  <p style="margin:6px 0; font-size:14px; color:#304067;"><strong>Company:</strong> ${escapedValues.companyName}</p>
                  <p style="margin:6px 0; font-size:14px; color:#304067;"><strong>Job Title:</strong> ${escapedValues.jobTitle}</p>
                  <p style="margin:6px 0; font-size:14px; color:#304067;"><strong>Submitted:</strong> ${submissionDate}</p>
                </div>
                <p style="margin:0 0 18px; font-size:15px; color:#304067; line-height:1.6;">If you need immediate assistance, please call <strong style="color:#002856;">+44 (0) 33 3060 3806</strong>. We appreciate your interest and look forward to speaking with you.</p>
                <p style="margin:24px 0 0; font-size:15px; color:#304067;">Warm regards,<br/><span style="font-weight:600; color:#0a1640;">Security Council Client Services</span></p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 30px; background:#f4f6fb; font-size:12px; color:#7181a6;">&copy; ${new Date().getFullYear()} Security Council. All rights reserved.</td>
            </tr>
          </table>
        </body>
      </html>`;

    const customerText = `Hi ${plainValues.firstName},\n\nThank you for requesting a briefing with Security Council. Our team has received your information and will contact you shortly.\n\nSummary\nEmail: ${plainValues.email}\nCompany: ${plainValues.companyName}\nJob Title: ${plainValues.jobTitle}\nSubmitted: ${submissionDate}\n\nIf your request is urgent, please call +44 (0) 33 3060 3806.\n\nSecurity Council Client Services`;

    await Promise.all([
      sendMail({
        to: toEmail,
        subject: ownerSubject,
        html: ownerHtml,
        text: ownerText,
        replyTo: plainValues.email,
      }),
      sendMail({
        to: plainValues.email,
        subject: customerSubject,
        html: customerHtml,
        text: customerText,
        replyTo: toEmail,
      }),
    ]);

    res.status(201).json({ message: "Request stored" });
  } catch (error) {
    console.error("/api/request error", error);
    res.status(500).json({ message: "Failed to store request", error: String(error) });
  }
});

// Optional: 404 for unknown /api/* routes
app.use("/api", (_req, res) => res.status(404).json({ message: "Not Found" }));

// Serve frontend if built (production) - register LAST and exclude /api paths
if (fs.existsSync(distPath)) {
  // Static files with long-term caching
  app.use(express.static(distPath, {
    maxAge: '1y', // 1 year for immutable assets
    etag: true,
    lastModified: true,
    setHeaders: (res, filePath) => {
      // Set aggressive caching for hashed assets (JS/CSS from Vite)
      if (/\.(js|css|woff2?|png|jpg|jpeg|webp|svg|ico)$/.test(filePath)) {
        // Check if file has hash in name (Vite build pattern: asset-[hash].ext)
        if (/[a-f0-9]{8,}\.(js|css|woff2?|png|jpg|jpeg|webp|svg)$/i.test(path.basename(filePath))) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        } else {
          // For non-hashed assets, use shorter cache
          res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
        }
      }
      // Images get long cache
      if (/\.(png|jpg|jpeg|webp|svg|gif|ico)$/i.test(filePath)) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
      }
    },
  }));
  
  // HTML files should not be cached
  app.get(/^\/(?!api)(.*)/, (_req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
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


