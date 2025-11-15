import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a reusable Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false, // Allows self-signed certificates
  },
});

/**
 * Sends an email using Nodemailer
 * @param {string} to - Recipient email address
 * @param {string} subject - Email subject
 * @param {string} htmlContent - Email content in HTML
 * @returns {Promise<boolean>} - Returns true if email sent successfully, false otherwise
 */
const sendEmail = async (to, subject, htmlContent) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to: ${to}`);
    return true;
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error.message);
    return false;
  }
};

export default sendEmail;
