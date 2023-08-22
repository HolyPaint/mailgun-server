import formData from 'form-data';
import Mailgun from 'mailgun.js';

require('dotenv').config();

const sendMail = async (Mail) => {
  const { email, name, phone, message } = Mail;

  const mailgun = new Mailgun(formData);
  const client = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY || '',
  });

  const messageData = {
    from: `${name} <${email}>`,
    to: process.env.MAILGUN_RECEIVER_EMAIL || '',
    subject: 'New Contact Form!',
    text: `Hello, 
          
          You have a new quote form entry from:
          
          Name: ${name}
          Phone: ${phone}
          Email: ${email}
          
          ${message}`,
  };

  //   await client.messages
  //     .create(process.env.MAILGUN_DOMAIN || '', messageData)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });

  const response = await client.messages.create(
    process.env.MAILGUN_DOMAIN || '',
    messageData
  );
  return response;
};

module.exports = sendMail;
