import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'webnotifications@rommelmontoya.com',
    pass: 'q1ZCd4KKmFSk',
  },
});

async function enviarCorreo() {
  try {
    const info = await transporter.sendMail({
      from: '"Web Notifications" <webnotifications@rommelmontoya.com>',
      to: 'ferastaiza123@gmail.com',
      subject: 'Prueba de Nodemailer',
      text: 'Este es un correo de prueba enviado desde Nodemailer.',
      html: `
        <h1 style="color:red;">Prueba de Nodemailer</h1>
        <p style="color:blue;">Este correo fue enviado correctamente desde Zoho mediante Nodemailer.</p>
        <p>Si funciono, victoria!!!!!!!!!!!!!!!!</p>
      `,
    });

    console.log('Correo enviado correctamente');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('Error enviando el correo:', error);
  }
}

enviarCorreo();
