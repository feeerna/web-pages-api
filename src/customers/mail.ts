import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'webnotifications@rommelmontoya.com',
    pass: 'test@test.com',
  },
});

