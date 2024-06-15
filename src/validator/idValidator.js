import { param } from 'express-validator'

export const idValidator = [
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
            $ref: "#/definitions/DeleteMesas"
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
    param('id').isInt().withMessage("Id não foi passado ou não é um número inteiro"),
]