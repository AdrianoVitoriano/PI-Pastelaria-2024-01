import { TipoItens } from "../Model/tipoItens.model.js";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

class TipoItensController {
  static async getAllTipoItens(req, res) {
    res.json( await getAll(TipoItens));
  }
  static async getTipoItensById(req, res) {
    res.json(await getById(req.body, TipoItens));
  }
  static async postTipoItens(req, res) {
    res.json(await insert(req.body, TipoItens));
  }
  static async putTipoItens(req, res) {
    res.json(await updateById(req.body, TipoItens));
  }
  static async deleteTipoItens(req, res) {
    res.json(await deleteById(req.body, TipoItens));
  }
}

export default TipoItensController;
