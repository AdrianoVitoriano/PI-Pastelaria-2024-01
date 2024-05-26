import { ItensPedidos } from "../Model/itensPedidos.model.js";
import { getById, getAll, insert } from "../crud.js";
import { getPrecos } from "./itens.controller.js";
class ItensPedidosController {
  static async getAllItensPedidos_Mesa(req, res) {
    res.json(await getAll(ItensPedidos));
  }
  /*----------------------------------*/
  static async getItensPedidosById(req, res) {
    res.json(await getById(req.body, ItensPedidos));
  }
  /*----------------------------------*/
  static async postItensPedido(req, res, idPedido) {
    // Extrai o idPedido e os itensPedido do corpo da requisição
    const { itensPedido } = req.body;
    try {
      // Inicia uma transação para garantir atomicidade das operações
      await session.startTransaction();

      // Itera sobre todos os itens de pedido
      for (const item of itensPedido) {
        // Extrai o idProduto e a quantidade de cada item
        const { idProduto, quantidade } = item;

        // Busca o produto no banco de dados pelo seu ID
        const produto = await dataBase.getRepository('produtos').findOne(idProduto);

        // Calcula o subtotal do item multiplicando o preço do produto pela quantidade
        const subtotal = produto.preco * quantidade;

        // Insere o item na tabela descricaoPedidos
        await dataBase.getRepository('descricaoPedidos').save({
          idPedido: idPedido, // Associa o item ao pedido especificado
          idProduto: idProduto, // Associa o item ao produto especificado
          quantidade: quantidade, // Define a quantidade do item
          subtotal: subtotal // Define o subtotal do item
        });
      }

      // Finaliza a transação
      await session.commitTransaction();

      // Retorna um objeto de sucesso indicando que os itens foram cadastrados com sucesso
      return res.status(200).json({ success: true, message: 'Itens de pedido cadastrados com sucesso.' });
    } catch (error) {
      // Em caso de erro, desfaz a transação e retorna uma mensagem de erro
      await session.rollbackTransaction();
      console.error('Erro ao cadastrar itens de pedido:', error);
      return res.status(500).json({ success: false, message: 'Erro ao cadastrar itens de pedido.' });
    } finally {
      // Finaliza a sessão
      await session.endSession();
    }
  }
}

export default ItensPedidosController;
