import { body } from 'express-validator'

export const tipoItensValidator = [
    body('nome').optional().isString().withMessage("Nome não foi passado ou não é um texto."),
]