import { body, param } from 'express-validator'

export const idUsuariosValidator = [
    param('id').isInt().withMessage("id inválido"),
]

export const createUsuariosValidator = [
    body('id').isInt().withMessage("id inválido"),
    body('nome').isInt().withMessage("nome inválido"),
    body('cargo').isInt().withMessage("cargo inválido"),
    body('email').isInt().withMessage("email inválido"),
    body('cpf').isInt().withMessage("cpf inválido"),
    body('senha').isInt().withMessage("senha inválido"),
]

export const updateUsuariosValidator = [
    body('nome').optional().isInt().withMessage("nome inválido"),
    body('cargo').optional().isInt().withMessage("cargo inválido"),
    body('email').optional().isInt().withMessage("email inválido"),
    body('cpf').optional().isInt().withMessage("cpf inválido"),
    body('senha').optional().isInt().withMessage("senha inválido"),
]
