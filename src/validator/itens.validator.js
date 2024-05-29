import { body, param } from 'express-validator'

export const createItensValidator = [
    body('nome').isString().withMessage("Nome não foi passado ou não é um texto."),
    body('preco').isFloat().withMessage("Preço não foi passado ou não é um número"),
    body('idTipo').isInt().withMessage("idTipo não foi passado ou não é um número inteiro"),
]

export const updateItensValidator = [
    body('nome').optional().isString().withMessage("Nome não é um texto."),
    body('preco').optional().isFloat().withMessage("Preco não é um número"),
    body('idTipo').optional().isInt().withMessage("idTipo não é um número inteiro"),
]
