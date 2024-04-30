import { Pedidos } from "../Model/pedidos.model.js";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

class PedidosController {
  static async getAllPedidos(req, res) {
    res.json(await getAll(Pedidos));
  }
  static async getPedidoById(req, res) {
    res.json(await getById(req.body, Pedidos));
  }
  static async postPedido(req, res) {
    res.json(await insert(req.body, Pedidos));
  }
  static async putPedido(req, res) {
    res.json(await updateById(req.body, Pedidos));
  }
  static async deletePedido(req, res) {
    res.json(await deleteById(req.body, Pedidos));
  }
}

export default PedidosController;