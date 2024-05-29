import { Router } from "express";
import { idComandasValidator, updateComandasValidator } from './validator/comandas.validator.js';
import { idItensValidator, updateItensValidator, createItensValidator } from './validator/itens.validator.js';
import { idItensPedidosValidator } from './validator/itensPedidos.validator.js';
import { idMesasValidator, updateMesasValidator, createMesasValidator } from './validator/mesas.validator.js';
import { idPedidosValidator, updatePedidosValidator, createPedidosValidator } from './validator/pedidos.validator.js';
import { idTipoItensValidator, updateTipoItensValidator, createTipoItensValidator } from './validator/tipoItens.validator.js';
import { idUsuariosValidator, updateUsuariosValidator, createUsuariosValidator } from './validator/usuarios.validator.js';
import RelatoriosController from "./Controller/relatorio.controller.js";
import UsuarioController from "./Controller/usuarios.controller.js";
import PedidosController from "./Controller/pedidos.controller.js";
import MesasController from "./Controller/mesas.controller.js";
import ItensController from "./Controller/itens.controller.js";
import ComandasController from "./Controller/comandas.controller.js";
import TipoItensController from "./Controller/tipoItens.controller.js";
import ItensPedidosController from "./Controller/itensPedidos.controller.js";

export const router = Router();

router.get("/sayhi", (req, res) => {
  res.send("Hi!");
});

/*----Rotas tipoItens----*/
router.get("/tipoitens", TipoItensController.getAllTipoItens);
router.post("/tipoitens", createTipoItensValidator, TipoItensController.postTipoItens);
router.put("/tipoitens/:id", [idTipoItensValidator, updateTipoItensValidator], TipoItensController.putTipoItens);
router.get("/tipoitens/:id", idTipoItensValidator, TipoItensController.getTipoItensById);

/*----Rotas itens----*/
router.get("/itens", ItensController.getAllItens);
router.post("/itens", createItensValidator, ItensController.postItem);
router.put("/itens/:id", [idItensValidator, updateItensValidator], ItensController.putItem);
router.get("/itens/:id", idItensValidator, ItensController.getItemById);

/*----Rotas pedidos----*/
router.get("/pedidos", PedidosController.getAllPedidos);
router.post("/pedidos", createPedidosValidator, PedidosController.postPedido);
router.put("/pedidos/:id", [idPedidosValidator, updatePedidosValidator], PedidosController.putPedido);
router.delete("/pedidos/:id", idPedidosValidator, PedidosController.deletePedido);
router.get("/pedidos/:id", idPedidosValidator, PedidosController.getPedidoById);

/*----Rotas usuarios----*/
router.get("/usuarios", UsuarioController.getAllUsuarios);
router.post("/usuarios", createUsuariosValidator, UsuarioController.postUsuario);
router.put("/usuarios/:id", [idUsuariosValidator, updateUsuariosValidator], UsuarioController.putUsuario);
router.get("/usuarios/:id", idUsuariosValidator, UsuarioController.getUsuarioById);

/*----Rotas mesas----*/
router.get("/mesas", MesasController.getAllMesas);
router.post("/mesas", createMesasValidator, MesasController.postMesa);
router.put("/mesas/:id", [idMesasValidator, updateMesasValidator], MesasController.putMesa);
router.get("/mesas/:id", idMesasValidator, MesasController.getMesaById);

/*----Rotas comandas----*/
router.get("/comandas", ComandasController.getAllComandas);
router.put("/comandas/:id", [idComandasValidator, updateComandasValidator], ComandasController.putComanda);
router.delete("/comandas/:id", idComandasValidator, ComandasController.deleteComanda);
router.get("/comandas/:id", idComandasValidator, ComandasController.getComandaById);

/*----Rotas itensPedidos----*/
router.get("/itenspedidos", ItensPedidosController.getAllItensPedidos);
router.get("/itenspedidos/:id", idItensPedidosValidator, ItensPedidosController.getItensPedidosById);

/*----Rotas relatorios----*/
router.get("/relatorio/totalUsuario", RelatoriosController.totalUsuario);
router.get("/relatorio/totalMesa", RelatoriosController.totalMesa);
