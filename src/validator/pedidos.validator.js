import { body, param } from 'express-validator'

export const idPedidosValidator = [
    param('id').isInt().withMessage("id inválido"),
]

export const createPedidosValidator = [
    body('id').isInt().withMessage("id inválido"),
    body('idUsuario').isInt().withMessage("idUsuario inválido"),
    body('idComanda').isInt().withMessage("idComanda inválido"),
    body('finalizado').isInt().withMessage("finalizado inválido"),
]

export const updatePedidosValidator = [
    body('idUsuario').optional().isInt().withMessage("idUsuario inválido"),
    body('idComanda').optional().isInt().withMessage("idComanda inválido"),
    body('finalizado').optional().isInt().withMessage("finalizado inválido"),
]