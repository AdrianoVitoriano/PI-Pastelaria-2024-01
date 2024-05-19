import { body, param } from 'express-validator'

export const idTipoItensValidator = [
    param('id').isInt().withMessage("id inválido"),
]

export const createTipoItensValidator = [
    body('id').isInt().withMessage("id inválido"),
    body('nome').isInt().withMessage("nome inválido"),
]

export const updateTipoItensValidator = [
    body('nome').optional().isInt().withMessage("nome inválido"),
]