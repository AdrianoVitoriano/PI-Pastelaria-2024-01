import { pedidos } from "../models/pedidos.js";
import {
  insert,
  updateById,
  deleteById,
  getById,
  getAll,
} from "../crud.js";
import comandasController from "./comandascontroller.js";
const { postComanda } = comandasController;
// SELECT: Método HTTP GET
// UPDATE: Métodos HTTP PUT
// DELETE: Método HTTP DELETE
// INSERT: Método HTTP POST
/**static:
static é uma palavra-chave usada em classes JavaScript para definir um método estático ou uma propriedade estática.
Um método estático é chamado na classe em si, e não em instâncias dessa classe. Isso significa que ele não está disponível nas instâncias da classe, mas sim na própria classe.
Uma propriedade estática é uma propriedade da classe em si, e não de suas instâncias. Ela é acessada usando o nome da classe, seguido pelo nome da propriedade.
Ao definir um método ou propriedade como estático, você está dizendo que ela é comum a todas as instâncias da classe e pode ser usada sem criar uma instância da classe. */
class pedidosController {
  static async getAllPedidos(req, res) {
    //esta função retorna todos os registros da tabela
    res.json(await getAll(req.body, pedidos));
    //a função getAll() é usada para retornar todos os registros da tabela
  }
  static async getPedidosById(req, res) {
    //esta função retorna um registro da tabela pelo ID
    res.json(await getById(req.body, pedidos));
    //a função getById() é usada para retornar um registro da tabela pelo ID
  }
  static async postPedidos(req, res) {
    req = req.body.idMesa;
    const idComanda = await postComanda(req, res);

    if (!idComanda) {
      return res.status(404).json({
        msg: "Comanda não encontrada para a mesa especificada",
      });
    }
    try {
      // Inserir o pedido com o ID da comanda obtido
      const pedidoData = {
        idComanda: idComanda,
      };
      const table = "pedidos";
      const insertedPedido = await insert(
        pedidoData,
        table,
      );
      res.status(200).json(insertedPedido);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ msg: "Erro ao inserir o pedido" });
    }
  }
  static async putPedidos(req, res) {
    //esta função atualiza um registro na tabela
    res.json(await updateById(req.body, pedidos));
    //a função update() é usada para atualizar um registro na tabela
  }
  static async deletePedidos(req, res) {
    //esta função deleta um registro na tabela
    res.json(await deleteById(req.body, pedidos));
    //a função deleteById() é usada para deletar um registro na tabela
  }
}

export default pedidosController;
