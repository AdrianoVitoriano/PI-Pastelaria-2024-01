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
    // Copia o corpo da requisição para a variável 'body'
    let body = req.body;
    // Adiciona a data e hora atual ao corpo da requisição
    body.dataHorario = dataHora();

    // Verifica se a requisição é válida
    if ((await validarRequisição(body)).result) {
      // Confere e executa a criação de uma comanda, retornando a comanda criada ou existente
      const comanda = await conferirComandaExecutar({
        body: {
          idMesa: body.idMesa, // ID da mesa que será usada na comanda
          abertura: body.dataHorario, // Data e hora de abertura da comanda
        }
      }, insert); // A função 'insert' será passada como parâmetro para 'conferirComandaExecutar'

      // Define o ID da comanda no corpo do pedido
      body.idComanda = comanda.id;
      // Insere o pedido na tabela de pedidos e define o ID do pedido no corpo do pedido
      body.id = (await insert(body, Pedidos)).id;
      // Insere os itens do pedido e calcula o total do pedido
      body.total = await inserirItens(body.itens, body.id);
      // Atualiza o total do pedido na tabela de pedidos
      await atualizarTotalPedido(body.id, body.total);
      // Atualiza o total da comanda com o total do pedido e o total anterior da comanda
      await atualizarTotalComanda(body.idComanda, body.total + (isNaN(comanda.total) ? 0 : comanda.total));
      // Retorna uma resposta JSON com o resultado e o ID do pedido
      res.json({ result: true, id: body.id });
    } else {
      // Se a requisição não for válida, retorna uma mensagem de erro em formato JSON
      res.json({ error: "requisição não passou nas validações." });
    }
  }

  static async putPedido(req, res) {
    res.json(await updateById(req.body, Pedidos));
  }
  static async deletePedido(req, res) {
    res.json(await deleteById(req.body, Pedidos));
  }
}

async function atualizarTotalPedido(id, total) {
  await updateById({ id, total }, Pedidos);
}
//conferir se o validator não seria o suficiente
async function validarRequisição(body) {
  // Valida a mesa pelo ID da mesa
  const mesaValida = await validarMesa(body.idMesa);
  // Valida o usuário pelo ID do usuário
  const usuarioValido = await validarUsuario(body.idUsuario);
  // Verifica se há itens no pedido
  const itensValidos = (body.itens) ? ((body.itens[0]) ? true : false) : false;

  // Se todas as validações forem verdadeiras, retorna { result: true }
  // Caso contrário, retorna { result: false }
  return (mesaValida && usuarioValido && itensValidos) ? { result: true } : { result: false };
}


export default PedidosController;
