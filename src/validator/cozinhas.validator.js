import { body } from 'express-validator'

export const updateCozinhasValidator = [
  body('produzido').isInt().withMessage("Produzido não foi passado ou não é um número inteiro (0 ou 1)."),
]