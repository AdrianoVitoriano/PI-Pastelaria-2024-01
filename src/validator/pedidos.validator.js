import { body } from 'express-validator'

export const createPedidosValidator = [
    body('idMesa').isInt().withMessage("idMesa não foi passado ou não é um número inteiro"),
    body('idUsuario').isString().withMessage("idUsuario não foi passado ou não é uma String"),
    body('itens').isArray().withMessage("Itens não foi passado ou não é um array."),
]

export const updatePedidosValidator = [
    body('idUsuario').optional().isString().withMessage("idUsuario não é uma String"),
    body('finalizado').optional().isInt().withMessage("Finalizado não é um número inteiro (0 ou 1)."),
]