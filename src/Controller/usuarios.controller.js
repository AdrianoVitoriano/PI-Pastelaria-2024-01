import { Usuarios } from "../Model/usuarios.model.js";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";
import { validationResult } from 'express-validator';

class UsuarioController {
  static async getAllUsuarios(req, res) {
    res.json(await getAll(Usuarios));
  }
  static async getUsuarioById(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  
    res.json(await getById(req.params, Usuarios));
  }
  static async postUsuario(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await insert(req.body, Usuarios));
  }
  static async putUsuario(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    req.body.id = parseInt(req.params.id)

    res.json(await updateById(req.body, Usuarios));
  }
  static async deleteUsuario(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    req.body.id = parseInt(req.params.id)

    res.json(await deleteById(req.body, Usuarios));
  }
}

export async function validarUsuario(id){
return (await getById({id,}, Usuarios)).result  ?true:false
}

export default UsuarioController;