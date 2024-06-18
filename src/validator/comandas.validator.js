import { body } from 'express-validator'

export const updateComandasValidator = [
  /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/UpdateComandas"
          },
        },
      },
    }
  */
  body('total').optional().isFloat().withMessage("Total não é um número"),
  body('idMesa').optional().isInt().withMessage("idMesa não é um número inteiro"),
  body('data').optional().isInt().withMessage("Data não é um número inteiro"),
  body('aberta').optional().isInt().withMessage("Aberta não é um número inteiro (0 ou 1)."),
]