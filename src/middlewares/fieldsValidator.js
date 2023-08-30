import { response } from 'express';
import * as validationResult from 'express-validator';

export const fieldsValidator = (req, res = response, next) => {
  // Manejo de errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};
