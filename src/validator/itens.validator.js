import { body, param } from 'express-validator'

export const idItensValidator = [
    param('id').isInt().withMessage("id inválido"),
]

export const createItensValidator = [
    body('id').isInt().withMessage("id inválido"),
    body('nome').isString().withMessage("Nome inválido"),
    body('preco').isFloat().withMessage("Preco inválido"),
    body('idTipo').isInt().withMessage("idTipo inválido"),
]

export const updateItensValidator = [
    body('nome').optional().isString().withMessage("Nome inválido"),
    body('preco').optional().isFloat().withMessage("Preco inválido"),
    body('idTipo').optional().isInt().withMessage("idTipo inválido"),
]
