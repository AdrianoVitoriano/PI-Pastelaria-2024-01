import { body } from 'express-validator'

export const createTipoItensValidator = [
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
export const updateTipoItensValidator = [
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
  body('nome').optional().isString().withMessage("Nome não é um texto."),
]