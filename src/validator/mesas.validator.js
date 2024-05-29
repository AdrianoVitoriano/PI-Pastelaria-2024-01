import { body, param } from 'express-validator'

export const idMesasValidator = [
  param('id').isInt().withMessage("Id não foi passado ou não é um número inteiro"),
]

export const mesasValidator = [
  body('localizacao').isString().withMessage("Localização não foi passado ou não é um texto."),
]