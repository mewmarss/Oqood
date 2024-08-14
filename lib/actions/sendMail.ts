"use server";
import nodemailer from "nodemailer";
export async function sendMail(htmlContent: string, subject: string) {
  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.SMTP_TEMP_MAIL,
    subject: subject,
    html: htmlContent,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.verify();
  } catch (e) {
    console.error(e);
    return;
  }

  try {
    await transporter.sendMail(mailOptions);
  } catch (e) {
    console.error(e);
  }
}
