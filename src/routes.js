import { Router } from "express";
import { updateComandasValidator } from "./validator/comandas.validator.js";
import { updateItensValidator, createItensValidator } from "./validator/itens.validator.js";
import { idValidator } from "./validator/idValidator.js";
import { mesasValidator } from "./validator/mesas.validator.js";
import { updatePedidosValidator, createPedidosValidator } from "./validator/pedidos.validator.js";
import { createTipoItensValidator, updateTipoItensValidator } from "./validator/tipoItens.validator.js";
import { updateUsuariosValidator, createUsuariosValidator } from "./validator/usuarios.validator.js";
import RelatoriosController from "./Controller/relatorio.controller.js";
import UsuarioController from "./Controller/usuarios.controller.js";
import PedidosController from "./Controller/pedidos.controller.js";
import MesasController from "./Controller/mesas.controller.js";
import ItensController from "./Controller/itens.controller.js";
import ComandasController from "./Controller/comandas.controller.js";
import TipoItensController from "./Controller/tipoItens.controller.js";
import ItensPedidosController from "./Controller/itensPedidos.controller.js";
import CozinhaController from "./Controller/cozinha.controller.js";

export const router = Router();

// Rota para o controller de mesas

router.get("/mesas", MesasController.getAllMesas);
router.post("/mesas", mesasValidator, MesasController.postMesa);
router.put("/mesas/:id", [idValidator, mesasValidator], MesasController.putMesa);
router.delete("/mesas/:id", [idValidator], MesasController.deleteMesa);
router.get("/mesas/:id", idValidator, MesasController.getMesaById);
router.get("/mesas-comandas", MesasController.getAllMesasWithComanda);

// Rota para o controller de tipoItens

router.get("/tipoitens", TipoItensController.getAllTipoItens);
router.get("/tipoitens-ativos", TipoItensController.getAllTipoItensAtivos);
router.get("/tipoitens-itens", TipoItensController.getAllTipoItensWithItens);
router.post("/tipoitens", createTipoItensValidator, TipoItensController.postTipoItens);
router.put("/tipoitens/:id", [idValidator, updateTipoItensValidator], TipoItensController.putTipoItens);
router.delete("/tipoitens/:id", idValidator, TipoItensController.deleteTipoItens);
router.get("/tipoitens/:id", idValidator, TipoItensController.getTipoItensById);

// Rota para o controller de usuários

router.get("/usuarios", UsuarioController.getAllUsuarios);
router.post("/usuarios", createUsuariosValidator, UsuarioController.postUsuario);
router.put("/usuarios/:id", [idValidator, updateUsuariosValidator], UsuarioController.putUsuario);
router.delete("/usuarios/:id", idValidator, UsuarioController.deleteUsuario);
router.get("/usuarios/:id", idValidator, UsuarioController.getUsuarioById);

// Rota para o controller de itens

router.get("/itens", ItensController.getAllItens);
router.post("/itens", createItensValidator, ItensController.postItem);
router.put("/itens/:id", [idValidator, updateItensValidator], ItensController.putItem);
router.delete("/itens/:id", idValidator, ItensController.deleteItem);
router.get("/itens/:id", idValidator, ItensController.getItemById);

// Rota para o controller de comandas

router.get("/comandas", ComandasController.getAllComandas);
router.put("/comandas/:id", [idValidator, updateComandasValidator], ComandasController.putComanda);
router.get("/comandas/:id", idValidator, ComandasController.getComandaById);
router.get("/comandas-abertas", ComandasController.getAllComandasAbertas);
// Rota para o controller de pedidos

router.get("/pedidos", PedidosController.getAllPedidos);
router.post("/pedidos", createPedidosValidator, PedidosController.postPedido);
router.put("/pedidos/:id", [idValidator, updatePedidosValidator], PedidosController.putPedido);
router.delete("/pedidos/:id", idValidator, PedidosController.deletePedido);
router.get("/pedidos/:id", idValidator, PedidosController.getPedidoById);
router.get("/pedidos-abertos", PedidosController.getAllPedidosAbertos);
// Rota para o controller de itensPedidos

router.get("/itenspedidos", ItensPedidosController.getAllItensPedidos);
router.get("/itenspedidos/:id", idValidator, ItensPedidosController.getItensPedidosById);

// Rota para o controller da cozinha

router.get("/cozinhas", CozinhaController.getAllItensCozinha);
router.put("/cozinhas", CozinhaController.putItensCozinha);
router.get("/cozinhas/:id", idValidator, ItensPedidosController.getItensPedidosById);

// Rota para o controller de relatórios

router.get("/relatorio/totalUsuario", RelatoriosController.totalUsuario);
router.get("/relatorio/totalUsuario/:id", RelatoriosController.totalUsuario);
router.get("/relatorio/totalMesa", RelatoriosController.totalMesa);
router.get("/relatorio/totalMesa/:id", RelatoriosController.totalMesa);
