import { body, param } from 'express-validator'

export const idCozinhasValidator = [
  param('id').isInt().withMessage("id inválido"),
]

export const updateCozinhasValidator = [
  body('produzido').isInt().withMessage("Status Aberta inválido"),
]