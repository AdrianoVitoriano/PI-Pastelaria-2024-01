import { ItensPedidos } from "../Model/itensPedidos.model.js";
import { inserirItensCozinha } from "./cozinha.controller.js";
import { getById, getAll, insert, getItensByPedidoId } from "../crud.js";
import { getNamesItens, getPrecos } from "./itens.controller.js";
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
    let itens = await getItensByPedidoId(req.body, ItensPedidos)
    let idItens = [];

		itens.map((item) => {idItens.push(item.idItem)});

		let nomes = await getNamesItens(idItens);
		itens.map((item) => {
			item.nomeItem = nomes.find((i) => i.itens_id == item.idItem).itens_nome;
		});

    res.json(itens);
  }
}
export async function inserirItens(itens,idPedido){
  const itensPreco = await getPrecos(itens.map((item) => item.idItem))
  let itensCozinha = []
  let total = 0
  itens.forEach((objeto) => {
    objeto.subtotal = objeto.quantidade * itensPreco.find((item) => item.itens_id == objeto.idItem).itens_preco;
    objeto.idPedido = idPedido;
    total += objeto.subtotal
    if(objeto.cozinha){
      itensCozinha.push(objeto)
    }
  });
  await insert(itens, ItensPedidos)
  await inserirItensCozinha(itensCozinha)
  return total
}


export default ItensPedidosController;