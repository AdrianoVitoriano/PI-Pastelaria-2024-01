import { body, param } from 'express-validator'

export const idTipoItensValidator = [
    param('id').isInt().withMessage("id inválido"),
]

export const createTipoItensValidator = [
    body('nome').isString().withMessage("nome inválido"),
]

export const updateTipoItensValidator = [
    body('nome').optional().isString().withMessage("nome inválido"),
]