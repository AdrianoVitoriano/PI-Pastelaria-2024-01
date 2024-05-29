import { body, param } from 'express-validator'

export const mesasValidator = [
  body('localizacao').isString().withMessage("Localização não foi passado ou não é um texto."),
]