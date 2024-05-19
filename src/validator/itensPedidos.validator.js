import { body, param } from 'express-validator'

export const idItensPedidosValidator = [
    param('id').isInt().withMessage("id inválido"),
]

/*export const createItensPedidosValidator = [
    body('id').isInt().withMessage("id inválido"),
    body('idPedido').isInt().withMessage("idPedido inválido"),
    body('idItem').isInt().withMessage("idItem inválido"),
    body('quantidade').isInt().withMessage("quantidade inválido"),
    body('cozinha').isInt().withMessage("cozinha inválido"),
    body('subtotal').isInt().withMessage("subtotal inválido"),
]

export const updateItensPedidosValidator = [
    body('idPedido').optional().isInt().withMessage("idPedido inválido"),
    body('idItem').optional().isInt().withMessage("idItem inválido"),
    body('quantidade').optional().isInt().withMessage("quantidade inválido"),
    body('cozinha').optional().isInt().withMessage("cozinha inválido"),
    body('subtotal').optional().isInt().withMessage("subtotal inválido"),
]*/