import { Cozinhas } from "../Model/cozinha.model.js";
import { getById, getAllItensCozinha, insert } from "../crud.js";
import { validationResult } from 'express-validator';

class CozinhaController {
  static async getAllCozinhas(req, res) {
    res.json(await getAllItensCozinha(Cozinhas));
  }

  static async getCozinhaById(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const id = parseInt(req.params.id);

    res.json(await getById(id, Cozinhas));
  }
}

export default CozinhaController;

export async function inserirItensCozinha(itens) {
  await insert(itens, Cozinhas);
}
