import { Usuarios } from "../Model/usuarios.model.js";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

class UsuarioController {
  static async getAllUsuarios(req, res) {
    res.json(await getAll(req.body, Usuarios));
  }
  static async getUsuarioById(req, res) {
    res.json(await getById(req.body, Usuarios));
  }
  static async postUsuario(req, res) {
    res.json(await insert(req.body, Usuarios));
  }
  static async putUsuario(req, res) {
    res.json(await updateById(req.body, Usuarios));
  }
  static async deleteUsuario(req, res) {
    res.json(await deleteById(req.body, Usuarios));
  }
}

export default UsuarioController;