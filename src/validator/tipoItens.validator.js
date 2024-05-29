import { body, param } from 'express-validator'

export const idTipoItensValidator = [
    param('id').isInt().withMessage("Id não foi passado ou não é um número inteiro"),
]

export const tipoItensValidator = [
    body('nome').isString().withMessage("Nome não foi passado ou não é um texto."),
]