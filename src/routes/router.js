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
//retorna todos os registros da tabela
router.get("/comandas", comandasController.getComandas);
/*----------------------*/
//retorna um registro especifico
router.get(
  "/comandas/:id",
  comandasController.getComandaById,
);
/*----------------------*/
//cria um novo registro
router.post("/comandas", comandasController.insertComanda);
/*----------------------*/
//atualiza um registro
router.put("/comandas", comandasController.putComanda);
/*----------------------*/
//deleta um registro
router.delete(
  "/comandas",
  comandasController.deleteComanda,
);
/*------------------ Rotas de Pedidos -----------------*/
//retorna todos os registros da tabela
router.get("/pedidos", pedidosController.getPedidos);
/*----------------------*/
//retorna um registro especifico
router.get(
  "/pedidos/:id",
  pedidosController.getPedidosById,
);
/*----------------------*/
//cria um novo registro
router.post("/pedidos", pedidosController.insertPedidos);
/*----------------------*/
//atualiza um registro
router.put("/pedidos", pedidosController.putPedidos);
/*----------------------*/
//deleta um registro
router.delete("/pedidos", pedidosController.deletePedidos);
/*------------------ Rotas de Mesas -----------------*/
//retorna todos os registros da tabela
router.get("/mesas", mesasController.getMesas);
/*----------------------*/
//retorna um registro especifico
router.get("/mesas/:id", mesasController.getMesasById);
/*----------------------*/
//cria um novo registro
router.post("/mesas", mesasController.insertMesas);
/*----------------------*/
//atualiza um registro
router.put("/mesas", mesasController.putMesas);
/*----------------------*/
//deleta um registro
router.delete("/mesas", mesasController.deleteMesas);
/*------------------ Rotas de Produtos -----------------*/
//retorna todos os registros da tabela
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
