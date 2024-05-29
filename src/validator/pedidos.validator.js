import { body, param } from 'express-validator'

export const createPedidosValidator = [
    body('idMesa').isInt().withMessage("idMesa não foi passado ou não é um número inteiro"),
    body('idUsuario').isInt().withMessage("idUsuario não foi passado ou não é um número inteiro"),
    body('itens').isArray().withMessage("Itens não foi passado ou não é um array."),
]

export const updatePedidosValidator = [
    body('idUsuario').optional().isInt().withMessage("idUsuario não é um número inteiro"),
    body('finalizado').optional().isInt().withMessage("Finalizado não é um número inteiro (0 ou 1)."),
]