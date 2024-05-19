import { body, param } from 'express-validator'

export const idComandasValidator = [
  param('id').isInt().withMessage("id inválido"),
]

export const createComandasValidator = [
  body('total').isFloat().withMessage("Total inválido"),
  body('mesasId').isInt().withMessage("mesasId inválido"),
  body('abertura').isString().withMessage("Abertura inválida"),
  body('aberta').isInt().withMessage("Status Aberta inválido"),
]

export const updateComandasValidator = [
  body('total').optional().isFloat().withMessage("Total inválido"),
  body('mesasId').optional().isInt().withMessage("mesasId inválido"),
  body('abertura').optional().isString().withMessage("Abertura inválida"),
  body('aberta').optional().isInt().withMessage("Status Aberta inválido"),
]