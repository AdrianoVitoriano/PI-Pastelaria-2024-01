import { Router } from "express";
import { idComandasValidator, updateComandasValidator } from './validator/comandas.validator.js';
import { idItensValidator, updateItensValidator, createItensValidator } from './validator/itens.validator.js';
import { idItensPedidosValidator } from './validator/itensPedidos.validator.js';
import { idMesasValidator, mesasValidator } from './validator/mesas.validator.js';
import { idPedidosValidator, updatePedidosValidator, createPedidosValidator } from './validator/pedidos.validator.js';
import { idTipoItensValidator, tipoItensValidator } from './validator/tipoItens.validator.js';
import { idUsuariosValidator, updateUsuariosValidator, createUsuariosValidator } from './validator/usuarios.validator.js';
import RelatoriosController from "./Controller/relatorio.controller.js";
import UsuarioController from "./Controller/usuarios.controller.js";
import PedidosController from "./Controller/pedidos.controller.js";
import MesasController from "./Controller/mesas.controller.js";
import ItensController from "./Controller/itens.controller.js";
import ComandasController from "./Controller/comandas.controller.js";
import TipoItensController from "./Controller/tipoItens.controller.js";
import ItensPedidosController from "./Controller/itensPedidos.controller.js"
import CozinhaController from "./Controller/cozinha.controller.js";

export const router = Router();
 
router.get("/sayhi", (req, res) => {
  res.send("Hi!");
});

// Rota para o controller de mesas

router.get("/mesas", MesasController.getAllMesas);
router.post("/mesas", mesasValidator, MesasController.postMesa);
router.put("/mesas/:id", [idMesasValidator, mesasValidator], MesasController.putMesa);
router.get("/mesas/:id", idMesasValidator, MesasController.getMesaById);

// Rota para o controller de tipoItens

router.get("/tipoitens", TipoItensController.getAllTipoItens);
router.post("/tipoitens", tipoItensValidator, TipoItensController.postTipoItens);
router.put("/tipoitens/:id", [idTipoItensValidator, tipoItensValidator], TipoItensController.putTipoItens);
router.delete("/tipoitens/:id", idTipoItensValidator, TipoItensController.deleteTipoItens);
router.get("/tipoitens/:id", idTipoItensValidator, TipoItensController.getTipoItensById);

// Rota para o controller de usuários

router.get("/usuarios", UsuarioController.getAllUsuarios);
router.post("/usuarios", createUsuariosValidator, UsuarioController.postUsuario);
router.put("/usuarios/:id", [idUsuariosValidator, updateUsuariosValidator], UsuarioController.putUsuario);
router.delete("/usuarios/:id", idUsuariosValidator, UsuarioController.deleteUsuario);
router.get("/usuarios/:id", idUsuariosValidator, UsuarioController.getUsuarioById);

// Rota para o controller de itens

router.get("/itens", ItensController.getAllItens);
router.post("/itens", createItensValidator, ItensController.postItem);
router.put("/itens/:id", [idItensValidator, updateItensValidator], ItensController.putItem);
router.delete("/itens/:id", idItensValidator, ItensController.deleteItem);
router.get("/itens/:id", idItensValidator, ItensController.getItemById);

// Rota para o controller de comandas

router.get("/comandas", ComandasController.getAllComandas);
router.put("/comandas/:id", [idComandasValidator, updateComandasValidator], ComandasController.putComanda);
router.get("/comandas/:id", idComandasValidator, ComandasController.getComandaById);

// Rota para o controller de pedidos

router.get("/pedidos", PedidosController.getAllPedidos);
router.post("/pedidos", createPedidosValidator, PedidosController.postPedido);
router.put("/pedidos/:id", [idPedidosValidator, updatePedidosValidator], PedidosController.putPedido);
router.delete("/pedidos/:id", idPedidosValidator, PedidosController.deletePedido);
router.get("/pedidos/:id", idPedidosValidator, PedidosController.getPedidoById);

// Rota para o controller de itensPedidos

router.get("/itenspedidos", ItensPedidosController.getAllItensPedidos);
router.get("/itenspedidos/:id", idItensPedidosValidator, ItensPedidosController.getItensPedidosById);

// Rota para o controller da cozinha

router.get("/cozinhas",  CozinhaController.getAllItensCozinha);
router.get("/cozinhas/:id", idItensPedidosValidator, ItensPedidosController.getItensPedidosById);

// Rota para o controller de relatórios

router.get("/relatorio/totalUsuario", RelatoriosController.totalUsuario);
router.get("/relatorio/totalUsuario/:id", RelatoriosController.totalUsuario);
router.get("/relatorio/totalMesa", RelatoriosController.totalMesa);
router.get("/relatorio/totalMesa/:id", RelatoriosController.totalMesa);
