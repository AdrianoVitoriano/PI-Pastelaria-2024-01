import { Pedidos } from "../Model/pedidos.model.js";
import { ItensPedidos } from "../Model/itensPedidos.model.js";
import { Itens } from "../Model/itens.model.js";
import { conferirComandaExecutar } from "./comandas.controller.js";
import {
  insert,
  updateById,
  deleteById,
  getById,
  getAll,
  conferirComanda,
  dataHora,
  getSomeById,
} from "../crud.js";
import { Comandas } from "../Model/comandas.model.js";

class PedidosController {
  static async getAllPedidos(req, res) {
    res.json(await getAll(Pedidos));
  }
  static async getPedidoById(req, res) {
    res.json(await getById(req.body, Pedidos));
  }
  static async postPedido(req, res) {
    req.body.dataHorario = dataHora();
    const comanda = await conferirComandaExecutar(
      {
        body: {
          idMesa: req.body.idMesa,
          abertura: req.body.dataHorario,
        },
      },
      insert
    );
    req.body.idComanda = comanda.id;
    req.body.id = (await insert(req.body, Pedidos)).id;
    const valoresItens = await getSomeById(
      req.body.itens.map((item) => item.idItem),
      Itens,
      ["itens.id", "itens.preco"]
    );
    req.body.itens.forEach((objeto) => {
      objeto.subtotal =
        objeto.quantidade *
        valoresItens.find((item) => item.itens_id == objeto.idItem).itens_preco;
      objeto.idPedido = req.body.id;
      req.body.total += objeto.subtotal;
    });

    req.body.itens.forEach(async (objeto) => {
      await insert(objeto, ItensPedidos);
    });
    await updateById({ id: req.body.id, total: req.body.total }, Pedidos);

    if(isNaN(comanda.total)){comanda.total = 0}else{console.log("entrou no Else?")}
    console.log(comanda.total)
    await updateById(
      {
        id: req.body.idComanda,
        total: req.body.total + comanda.total,
      },
      Comandas
    );
    res.json({result:true,id:req.body.id});
  }
  static async putPedido(req, res) {
    res.json(await updateById(req.body, Pedidos));
  }
  static async deletePedido(req, res) {
    res.json(await deleteById(req.body, Pedidos));
  }
}

export default PedidosController;
