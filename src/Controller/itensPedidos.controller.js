import { ItensPedidos } from "../Model/itensPedidos.model.js";
import { getById, getAll } from "../crud.js";

class ItensPedidosController {
  static async getAllItensPedidos(req, res) {
    res.json(await getAll(ItensPedidos));
  }
  static async getItensPedidosById(req, res) {
    res.json(await getById(req.body, ItensPedidos));
  }
}

export default ItensPedidosController;