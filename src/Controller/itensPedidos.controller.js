import { ItensPedidos } from "../Model/itensPedidos.model.js";
import { inserirItensCozinha } from "./cozinha.controller.js";
import { getById, getAll, insert } from "../crud.js";
import { getPrecos } from "./itens.controller.js";
import { validationResult } from 'express-validator';

class ItensPedidosController {
  static async getAllItensPedidos(req, res) {
    res.json(await getAll(ItensPedidos));
  }
  static async getItensPedidosById(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    req.body.id = parseInt(req.params.id)

    res.json(await getById(req.body, ItensPedidos));
  }
}
export async function inserirItens(itens, idPedido) {
  const itensPreco = await getPrecos(itens.map((item) => item.idItem));
  if (!Array.isArray(itensPreco)) {
    console.error("itensPreco não é um array:", itensPreco);
    return;
  }
  let itensCozinha = [];
  let total = 0;
  itens.forEach((objeto) => {
    const precoItem = itensPreco.find((item) => item.itens_id == objeto.idItem);
    if (!precoItem) {
      console.error("Preço não encontrado para o item:", objeto.idItem);
      return;
    }
    objeto.subtotal = parseFloat((objeto.quantidade * precoItem.itens_preco).toFixed(2));
    objeto.idPedido = idPedido;
    total += objeto.subtotal;
    if (objeto.cozinha) {
      itensCozinha.push(objeto);
    }
  });
  await insert(itens, ItensPedidos);
  await inserirItensCozinha(itensCozinha);
  return total;
}



export default ItensPedidosController;