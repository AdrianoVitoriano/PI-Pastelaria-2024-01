import { param } from 'express-validator'

export const idValidator = [
    param('id').isInt().withMessage("Id não foi passado ou não é um número inteiro"),
]