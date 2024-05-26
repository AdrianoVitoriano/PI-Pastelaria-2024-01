import { body, param } from 'express-validator'

export const idPedidosValidator = [
    param('id').isInt().withMessage("id inválido"),
]

export const createPedidosValidator = [
    body('idMesa').isInt().withMessage("idMesa inválido"),
    body('idUsuario').isInt().withMessage("idUsuario inválido"),
    body('itens').isArray().withMessage("itens inválido"),
]

export const updatePedidosValidator = [
    body('idUsuario').optional().isInt().withMessage("idUsuario inválido"),
    body('finalizado').optional().isInt().withMessage("finalizado inválido"),
]