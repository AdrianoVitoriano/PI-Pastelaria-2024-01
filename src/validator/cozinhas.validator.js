import { body, param } from 'express-validator'

export const updateCozinhasValidator = [
  body('produzido').isInt().withMessage("Status Aberta inválido"),
]