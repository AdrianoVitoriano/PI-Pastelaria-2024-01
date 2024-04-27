import { Itens } from "../Model/itens.model.js";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

class ItensController {
  static async getAllItens(req, res) {
    res.json(await getAll(req.body, Itens));
  }
  static async getItemById(req, res) {
    res.json(await getById(req.body, Itens));
  }
  static async postItem(req, res) {
    res.json(await insert(req.body, Itens));
  }
  static async putItem(req, res) {
    res.json(await updateById(req.body, Itens));
  }
  static async deleteItem(req, res) {
    res.json(await deleteById(req.body, Itens));
  }
}

export default ItensController;
