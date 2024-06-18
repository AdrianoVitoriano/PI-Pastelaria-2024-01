import { body } from 'express-validator'

export const mesasValidator = [
  /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/AddOrUpdateMesas"
          },
        },
      },
    }
  */
  body('localizacao').isString().withMessage("Localização não foi passado ou não é um texto."),
]