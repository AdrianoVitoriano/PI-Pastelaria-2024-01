import { ItensPedidos } from "../Model/itensPedidos.model.js";
import { getById, getAll, insert } from "../crud.js";
import { getPrecos } from "./itens.controller.js";

class ItensPedidosController {
  static async getAllItensPedidos(req, res) {
    res.json(await getAll(ItensPedidos));
  }
  static async getItensPedidosById(req, res) {
    res.json(await getById(req.body, ItensPedidos));
  }
}
export async function inserirItens(itens,idPedido){
  const itensPreco = await getPrecos(itens.map((item) => item.idItem))
  let total = 0
  itens.forEach((objeto) => {
    objeto.subtotal = objeto.quantidade * itensPreco.find((item) => item.itens_id == objeto.idItem).itens_preco;
    objeto.idPedido = idPedido;
    total += objeto.subtotal
  });
  await insert(itens, ItensPedidos)
  return total
}


export default ItensPedidosController;