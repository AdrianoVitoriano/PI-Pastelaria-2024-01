// c:/Users/kairo/OneDrive/Área de Trabalho/API_Pastelaria/src/routes/router.js
import { Router } from "express"; //importa o express para definir rotas
/*------------ Importação de Controllers--------------- */
import { comandasController } from "../controllers/comandas.controller.js";
import { pedidosController } from "../controllers/pedidos.controller.js";
import { mesasController } from "../controllers/mesas.controller.js";
import { produtosController } from "../controllers/produtos.controller.js";
import { descricaoPedidoController } from "../controllers/descricaoPedidoController.controller.js";
import { funcionariosController } from "../controllers/funcionarios.controller.js";
import { listaPedidosController } from "../controllers/listaPedidos.controller.js";
/*---------------------------------------------------- */
/*--------------- Definição de Rotas ----------------- */
export const router = Router(); //cria e exportar o router antes de ser definido as rotas
/*------------------ Rotas de Comandas -----------------*/
router.get("/comandas", comandasController.getComandas);
/*------------------ Rotas de Pedidos -----------------*/
router.get("/pedidos", pedidosController.getPedidos);
/*------------------ Rotas de Mesas -----------------*/
router.get("/mesas", mesasController.getMesas);
/*------------------ Rotas de Produtos -----------------*/
router.get("/produtos", produtosController.getProdutos);
/*------------ Rotas de Descrição de Pedidos -----------*/
router.get(
  "/descricao",
  descricaoPedidoController.getDescricao,
);
/*---------------- Rotas de Funcionários ---------------*/
router.get(
  "/funcionarios",
  funcionariosController.getFuncionarios,
);
/* -------------- Rotas de Lista de Pedidos --------------*/
router.get(
  "/listapedidos",
  listaPedidosController.getListaPedidos,
);
/*---------------------------------------------------- */
