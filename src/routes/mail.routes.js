/*
    Rutas de Mail
    host + /api/mail/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createAndSendMail } = require('../controllers/mail.controller');
const { fieldsValidator } = require('../middlewares/fieldsValidator');

const router = Router();

// Crear / enviar un mail
router.post(
  '/',
  [
    // Middlewares
    check('email', 'The email is required.').notEmpty().isEmail(),
    check('name', 'The name is required.').notEmpty(),
    check('phone', 'The phone is required.').notEmpty(),
    check('message', 'The message is required.').notEmpty(),
    fieldsValidator,
  ],
  createAndSendMail
);

module.exports = router;
