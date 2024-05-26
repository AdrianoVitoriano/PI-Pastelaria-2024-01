import { Pedidos } from "../Model/pedidos.model.js";
import {
  atualizarTotalComanda,
  conferirComandaExecutar,
} from "./comandas.controller.js";
import { validarMesa } from "./mesas.controller.js";
import { validarUsuario } from "./usuarios.controller.js"
import {
  insert,
  updateById,
  deleteById,
  getById,
  getAll,
  dataHora,
} from "../crud.js";
import { inserirItens } from "./itensPedidos.controller.js";
import { resolveObjectURL } from "buffer";

class PedidosController {

  static async getAllPedidos(req, res) {
    res.json(await getAll(Pedidos));
  }

  static async getPedidoById(req, res) {
    res.json(await getById(req.body, Pedidos));
  }
  static async postPedido(req, res) {
    data_hora = await new Date();
    try {
      // Cria uma nova comanda e obtém seu ID
      const comandaResult = await postComanda(req, res);
      const idComanda = comandaResult.id;

      // Cria um novo pedido associado à comanda obtida
      const pedidoData = {
        idComanda: idComanda,
        idusuario: req.body.idUsuario,
        horario: data_hora,
        // Adicione aqui outras informações necessárias para o pedido, como o ID do funcionário responsável, etc.
      };
      const pedidoResult = await insertPedido(pedidoData);

      // Chama a função para preencher a tabela de itens e quantidades do pedido
      await postItenPedido(req, res, pedidoResult.id);

      // Retorna a resposta para o cliente
      res.status(200).json({ message: 'Pedido criado com sucesso.', idPedido: pedidoResult.id });
      //aqui irá retornar o id do pedido criado
      return { id: pedidoResult.id };
    } catch (error) {
      // Em caso de erro, retorna uma mensagem de erro para o cliente
      console.error('Erro ao criar pedido:', error);
      res.status(500).json({ message: 'Erro ao criar pedido.' });
    }
  }



}

export default PedidosController;
