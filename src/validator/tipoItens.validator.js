import { body } from 'express-validator'

export const tipoItensValidator = [
    body('nome').isString().withMessage("Nome não foi passado ou não é um texto."),
]