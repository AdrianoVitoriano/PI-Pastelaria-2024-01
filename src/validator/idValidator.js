import { body, param } from 'express-validator'

export const idItensPedidosValidator = [
    param('id').isInt().withMessage("Id não foi passado ou não é um número inteiro"),
]