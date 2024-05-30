import { Usuarios } from "../Model/usuarios.model.js";
import { insert, updateById, getById, getAll, conferirEmail } from "../crud.js";
import { validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import { hashPassword } from '../encripty.js'
class UsuarioController {
  static async getAllUsuarios(req, res) {
    res.json(await getAll(Usuarios));
  }
  static async getUsuarioById(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await getById(req.params, Usuarios, { ativo: 1 }));
  }
  static async postUsuario(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      req.body.senha = await hashPassword(req.body.senha);
      const novoUsuario = await insert(req.body, Usuarios);
      res.json(novoUsuario);
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      res.status(500).json({ message: "Erro ao criar usuário" });
    }
  }
  static async putUsuario(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    req.body.id = parseInt(req.params.id)

    res.json(await updateById(req.body, Usuarios, { ativo: 1 }));
  }
  static async deleteUsuario(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    req.body.id = parseInt(req.params.id);
    req.body.ativo = 0;
    res.json(await updateById(req.body, Usuarios, { ativo: 1 }));
  }
  static async login(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, senha } = req.body;
      const usuario = await conferirEmail(req);
      if (!usuario) {
        return res.status(400).json({ message: 'Email não encontrado' });
      }

      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
      if (senhaCorreta) {
        return res.status(200).json({ message: 'Login realizado com sucesso' });
      } else {
        return res.status(400).json({ message: 'Senha incorreta' });
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      res.status(500).json({ message: "Erro ao fazer login" });
    }
  }
}


export async function validarUsuario(id) {
  return (await getById({ id, }, Usuarios)).result ? true : false
}

export default UsuarioController;