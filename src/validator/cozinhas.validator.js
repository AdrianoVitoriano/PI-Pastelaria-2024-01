import { body } from 'express-validator'

export const updateCozinhasValidator = [
    /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/UpdateCozinha"
          },
        },
      },
    }
  */
  body('produzido').isInt().withMessage("Produzido não foi passado ou não é um número inteiro (0 ou 1)."),
]