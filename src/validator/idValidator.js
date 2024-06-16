import { param } from 'express-validator'
  /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/DeleteTipoItens:"
          },
        },
      },
    }
  */
  /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/DeleteItens"
          },
        },
      },
    }
  */
  /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/DeleteUsuarios"
          },
        },
      },
    }
  */
  /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/DeletePedidos"
          },
        },
      },
    }
  */
export const idValidator = [
  param('id').isInt().withMessage("Id não foi passado ou não é um número inteiro"),
]