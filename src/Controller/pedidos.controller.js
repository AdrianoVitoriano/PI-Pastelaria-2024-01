import { Pedidos } from "../Model/pedidos.model.js";
import {conferirExecutar} from "./comandas.controller.js";
import { insert, updateById, deleteById, getById, getAll, conferirComanda } from "../crud.js";

class PedidosController {
  static async getAllPedidos(req, res) {
    res.json(await getAll(Pedidos));
  }
  static async getPedidoById(req, res) {
    res.json(await getById(req.body, Pedidos));
  }
  static async postPedido(req, res) {
    let date = new Date()
    req.body.dataHorario = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    const comanda = await conferirExecutar({body: {valorTotal: req.body.subtotal ,idMesa: req.body.idMesa,abertura:req.body.dataHorario}},insert)
    req.body.idComanda = comanda.id
    res.json(await insert(req.body, Pedidos))
  }
  static async putPedido(req, res) {
    res.json(await updateById(req.body, Pedidos));
  }
  static async deletePedido(req, res) {
    res.json(await deleteById(req.body, Pedidos));
  }
}

export default PedidosController;