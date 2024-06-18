import { body } from 'express-validator'

export const createUsuariosValidator = [
    /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/AddOrUpdateUsuarios"
          },
        },
      },
    }
  */
    body('nome').isString().withMessage("Nome não foi passado ou não é um texto."),
    body('cargo').isInt().withMessage("Cargo não foi passado ou não é um número inteiro"),
    body('email').isEmail().withMessage("Email não foi passado ou não é um e-mail"),
    body('cpf').isInt().withMessage("CPF não foi passado ou não é um número inteiro"),
    body('senha').isString().withMessage("Senha não foi passado ou não é um texto."),
]

export const updateUsuariosValidator = [
    /*
    #swagger.requestBody={
      required: true,
      content:{
        "application/json":{
          schema:{
            $ref: "#/definitions/AddOrUpdateUsuarios"
          },
        },
      },
    }
  */
    body('nome').optional().isString().withMessage("Nome não é um texto."),
    body('cargo').optional().isInt().withMessage("Cargo não é um número inteiro"),
    body('email').optional().isEmail().withMessage("Email não é um e-mail"),
    body('cpf').optional().isInt().withMessage("CPF não é um número inteiro"),
    body('senha').optional().isString().withMessage("Senha não é um texto."),
]
