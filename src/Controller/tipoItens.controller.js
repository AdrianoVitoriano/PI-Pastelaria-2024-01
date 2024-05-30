import { TipoItens } from "../Model/tipoItens.model.js";
import { insert, updateById, getById, getAll } from "../crud.js";
import { validationResult } from 'express-validator';

class TipoItensController {
  static async getAllTipoItens(req, res) {
    res.json(await getAll(TipoItens));
  }
  static async getTipoItensById(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await getById(req.params, TipoItens));
  }
  static async postTipoItens(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    res.json(await insert(req.body, TipoItens));
  }
  static async putTipoItens(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    req.body.id = parseInt(req.params.id)

    res.json(await updateById(req.body, TipoItens, { ativo: 1 }));
  }
}

export default TipoItensController;
