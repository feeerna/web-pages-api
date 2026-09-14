import * as nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

export async function sendFormMail(to: string, subject: string, body: string) {
  
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtppro.zoho.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
    });
    const info = await transporter.sendMail({
      from: `<${process.env.MAIL_USERNAME}>`,
      to: to,
      subject,
      text: 'Este es un correo automático. Por favor, no responder.',
      html: body,
    });
  } catch (error) {
    console.error('Error enviando el correo:', error);
  }
}
