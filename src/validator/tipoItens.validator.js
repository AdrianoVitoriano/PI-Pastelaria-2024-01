import { body } from 'express-validator'

export const tipoItensValidator = [
    /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/AddOrUpdateTipoItens"
          },
        },
      },
    }
  */
    body('nome').isString().withMessage("Nome não foi passado ou não é um texto."),
]