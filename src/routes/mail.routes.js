/*
    Rutas de Mail
    host + /api/mail/
*/

import { Router } from 'express';
import { check } from 'express-validator';
import { createAndSendMail } from '../controllers/mail.controller.js';
import { fieldsValidator } from '../middlewares/fieldsValidator.js';

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

export default router;
