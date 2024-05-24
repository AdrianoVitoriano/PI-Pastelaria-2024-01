import { body, param } from 'express-validator'

export const idUsuariosValidator = [
    param('id').isInt().withMessage("id inválido"),
]

export const createUsuariosValidator = [
    body('nome').isString().withMessage("nome inválido"),
    body('cargo').isInt().withMessage("cargo inválido"),
    body('email').isEmail().withMessage("email inválido"),
    body('cpf').isInt().withMessage("cpf inválido"),
    body('senha').isString().withMessage("senha inválido"),
]

export const updateUsuariosValidator = [
    body('nome').optional().isString().withMessage("nome inválido"),
    body('cargo').optional().isString().withMessage("cargo inválido"),
    body('email').optional().isEmail().withMessage("email inválido"),
    body('cpf').optional().isInt().withMessage("cpf inválido"),
    body('senha').optional().isString().withMessage("senha inválido"),
]
