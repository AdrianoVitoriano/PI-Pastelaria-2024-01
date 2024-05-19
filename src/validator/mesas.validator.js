import { body, param } from 'express-validator'

export const idMesasValidator = [
  param('id').isInt().withMessage("id inválido"),
]

export const createMesasValidator = [
  body('id').isInt().withMessage("id inválido"),
  body('localizacao').isString().withMessage("Localizacao inválida"),
]

export const updateMesasValidator = [
  body('localizacao').optional().isString().withMessage("Localizacao inválida"),
]