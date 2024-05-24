import { body, param } from 'express-validator'

export const idItensPedidosValidator = [
    param('id').isInt().withMessage("id inválido"),
]