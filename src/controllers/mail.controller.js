const { response } = require('express');

const Mail = require('../models/mail.model');
const sendEmail = require('../api/mailgunApi');

const createAndSendMail = (req, res = response) => {
  const { email, name, phone, message } = req.body;

  try {
    const mail = new Mail(email, name, phone, message);
    sendEmail(mail)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        const error = new Error(err);
        error.code = 500;
        throw error;
      });

    res.status(201).json({
      ok: true,
      status: 201,
      message: 'Mail created and sent successfully!',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      status: 500,
      message: 'Server error!',
    });
  }
};

module.exports = {
  createAndSendMail,
};
