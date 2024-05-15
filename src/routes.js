import { Router } from "express";
import UsuariosController from "./Controller/usuarios.controller.js";
import PedidosController from "./Controller/pedidos.controller.js";
import MesasController from "./Controller/mesas.controller.js";
import ItensController from "./Controller/itens.controller.js";
import ComandasController from "./Controller/comandas.controller.js";
import TipoItensController from "./Controller/tipoItens.controller.js";
import ItensPedidosController from "./Controller/itensPedidos.controller.js"
export const router = Router();

router.get("/sayhi", (req, res) => {
  res.send("Hi!");
}); // Rota de teste /sayhi, retorna "Hi!".

// Rotas da tabela tipoitens

router.get("/tipoitens", TipoItensController.getAllTipoItens); // Rota que retorna todas as categorias.
router.post("/tipoitens", TipoItensController.postTipoItens); // Rota que insere uma categoria no banco de dados.
router.put("/tipoitens", TipoItensController.putTipoItens); // Rota que atualiza a categoria no banco pelo id.
router.delete("/tipoitens", TipoItensController.deleteTipoItens); // Rota que deleta a categoria do banco pelo id.
router.get("/tipoitens/:id", TipoItensController.getTipoItensById); //  Rota que retorna uma categoria pelo id.

// Rotas da tabela itens

router.get("/itens", ItensController.getAllItens); // Rota que retorna todos os itens.
router.post("/itens", ItensController.postItem); // Rota que insere um item no banco de dados.
router.put("/itens", ItensController.putItem); // Rota que atualiza o item no banco pelo id.
router.delete("/itens", ItensController.deleteItem); // Rota que deleta o item do banco pelo id.
router.get("/itens/:id", ItensController.getItemById); //  Rota que retorna um item pelo id.

// Rotas da tabela pedidos

router.get("/pedidos", PedidosController.getAllPedidos); // Rota que retorna todas os pedidos.
router.post("/pedidos", PedidosController.postPedido); // Rota que insere um pedidos no banco de dados.
router.put("/pedidos", PedidosController.putPedido); // Rota que atualiza o pedidos no banco pelo id.
router.delete("/pedidos", PedidosController.deletePedido); // Rota que deleta o pedidos do banco pelo id.
router.get("/pedidos/:id", PedidosController.getPedidoById); //  Rota que retorna um pedidos pelo id.

// Rotas da tabela usuarios

router.get("/usuarios", UsuariosController.getAllUsuarios); // Rota que retorna todas os usuarios.
router.post("/usuarios", UsuariosController.postUsuario); // Rota que insere um usuarios no banco de dados.
router.put("/usuarios", UsuariosController.putUsuario); // Rota que atualiza o usuarios no banco pelo id.
router.delete("/usuarios", UsuariosController.deleteUsuario); // Rota que deleta o usuarios do banco pelo id.
router.get("/usuarios/:id", UsuariosController.getUsuarioById); //  Rota que retorna o usuarios pelo id.

// Rotas da tabela mesas

router.get("/mesas", MesasController.getAllMesas); // Rota que retorna todas as mesas.
router.post("/mesas", MesasController.postMesa); // Rota que insere uma mesa no banco de dados.
router.put("/mesas", MesasController.putMesa); // Rota que atualiza a mesa no banco pelo id.
router.delete("/mesas", MesasController.deleteMesa); // Rota que deleta a mesa do banco pelo id.
router.get("/mesas/:id", MesasController.getMesaById); //  Rota que retorna uma mesa pelo id.

// Rotas da tabela comandas

router.get("/comandas", ComandasController.getAllComandas); // Rota que retorna todas as comandas.
router.post("/comandas", ComandasController.postComanda); // Rota que insere uma comanda no banco de dados.
router.put("/comandas", ComandasController.putComanda); // Rota que atualiza a comanda no banco pelo id.
router.delete("/comandas", ComandasController.deleteComanda); // Rota que deleta a comanda do banco pelo id.
router.get("/comandas/:id", ComandasController.getComandaById); //  Rota que retorna uma comanda pelo id.

// Rotas da tabela itensPedidos

router.get("/itenspedidos", ItensPedidosController.getAllItensPedidos); // Rota que retorna todas as comandas.
router.get("/itenspedidos/:id", ItensPedidosController.getItensPedidosById); //  Rota que retorna uma comanda pelo id.