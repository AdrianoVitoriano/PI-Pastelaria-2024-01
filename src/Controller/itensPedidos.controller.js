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
export async function inserirItens(itens, idPedido) {
  const itensPreco = await getPrecos(
    itens.map((item) => item.idItem),
  );
  let total = 0;
  itens.forEach((objeto) => {
    // Remover o subtotal, que é calculado automaticamente
    objeto.subtotal =
      objeto.quantidade *
      itensPreco.find(
        (item) => item.itens_id === objeto.idItem,
      ).itens_preco;
    objeto.idPedido = idPedido;
    total += objeto.subtotal; // Correção no operador de atribuição
  });
  await insert(itens, ItensPedidos); // Se insert for assíncrono, está correto
  return total;
}

export default ItensPedidosController;
