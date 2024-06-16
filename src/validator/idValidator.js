import { param } from 'express-validator'
/*
   // #swagger.ignore = true
*/
export const idValidator = [
  param('id').isInt().withMessage("Id não foi passado ou não é um número inteiro"),
]