import { Pedidos } from "../Model/pedidos.model.js";
import {
  atualizarTotalComanda,
  conferirComandaExecutar,
} from "./comandas.controller.js";
import { validarMesa } from "./mesas.controller.js";
import {validarUsuario} from "./usuarios.controller.js"
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
    let body = req.body;
    body.dataHorario = dataHora();

    if((await validarRequisição(body)).result){
      const comanda = await conferirComandaExecutar({
        body: {
            idMesa: body.idMesa,
            abertura: body.dataHorario,
          }
        },insert);
      body.idComanda = comanda.id;
      body.id = (await insert(body, Pedidos)).id;
      body.total = await inserirItens(body.itens,body.id)
      await atualizarTotalPedido(body.id,body.total);
      await atualizarTotalComanda(body.idComanda,body.total + (isNaN(comanda.total)?0:comanda.total))
      res.json({result:true,id: body.id})
    }else{res.json({error:"requisição não passou nas validações."});}

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
async function validarRequisição(body) {
  return (await validarMesa(body.idMesa) && await validarUsuario(body.idUsuario) && ((body.itens)?((body.itens[0])?true:false):false))?{result:true}:{result:false}
}

export default PedidosController;
