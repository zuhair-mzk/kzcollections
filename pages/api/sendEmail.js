// File: /pages/api/sendEmail.js
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { to, subject, text } = req.body;

    try {
      const nodemailer = require("nodemailer");

      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: process.env.GMAIL_USER, // Your email address
          pass: "ktti glwf lpaw imqu", // The App Password you just created
        },
      });

      await transporter.sendMail({
        from: "kzcollections1@gmail.com", // Sender address
        to, // List of receivers
        subject, // Subject line
        text, // Plain text body
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
