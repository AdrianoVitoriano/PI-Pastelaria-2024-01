// c:/Users/kairo/OneDrive/Área de Trabalho/API_Pastelaria/src/routes/router.js
import { Router } from "express"; //importa o express para definir rotas
/*------------ Importação de Controllers--------------- */
import comandasController from "./controller/comandascontroller.js";

import pedidosController from "./controller/pedidoscontroller.js";

import mesasController from "./controller/mesascontroller.js";
import produtosController from "./controller/produtoscontroller.js";
import descricaoPedidoController from "./controller/descricaoPedidoController.js";
import funcionariosController from "./controller/funcionarioscontroller.js";
/*---------------------------------------------------- */
/*--------------- Definição de Rotas ----------------- */
export const router = Router(); //cria e exportar o router antes de ser definido as rotas
router.get("/", (req, res) => {
  res.send("Bem-vindo à API da Pastelaria!");
});
//http://localhost:3000/
/*------------------ Rotas de Comandas -----------------*/
//retorna todos os registros da tabela
router.get("/comandas", comandasController.getAllComandas);
//✔️
/*----------------------*/
//retorna um registro especifico
router.get(
  "/comandas/:id",
  comandasController.getComandaById,
);
//✔️

/*----------------------*/
//cria um novo registro
router.post("/comandas", comandasController.postComanda);
//✔️

/*----------------------*/
//atualiza um registro
router.put("/comandas", comandasController.putComanda);
//✔️

/*----------------------*/
//deleta um registro
router.delete(
  "/comandas",
  comandasController.deleteComanda,
);
/*------------------ Rotas de Pedidos -----------------*/
//retorna todos os registros da tabela
router.get("/pedidos", pedidosController.getAllPedidos);
/*----------------------*/
//retorna um registro especifico
router.get("/pedido/:id", pedidosController.getPedidosById);
/*----------------------*/
//cria um novo registro
router.post("/pedidos", pedidosController.postPedidos);
/*----------------------*/
//atualiza um registro
router.put("/pedidos", pedidosController.putPedidos);
/*----------------------*/
//deleta um registro
router.delete("/pedidos", pedidosController.deletePedidos);
/*------------------ Rotas de Mesas -----------------*/
//retorna todos os registros da tabela
router.get("/mesas", mesasController.getAllMesas);
/*----------------------*/
//retorna um registro especifico
router.get("/mesa/:id", mesasController.getMesasById);
/*----------------------*/
//cria um novo registro
router.post("/mesas", mesasController.postMesas);
/*----------------------*/
//atualiza um registro
router.put("/mesas", mesasController.putMesas);
/*----------------------*/
//deleta um registro
router.delete("/mesas", mesasController.deleteMesas);
/*------------------ Rotas de Produtos -----------------*/
//retorna todos os registros da tabela
router.get("/produtos", produtosController.getAllProdutos);
/*----------------------*/
//retorna um registro especifico
router.get(
  "/produto/:id",
  produtosController.getProdutosById,
);
/*----------------------*/
//cria um novo registro
router.post("/produtos", produtosController.postProdutos);
/*----------------------*/
//atualiza um registro
router.put("/produtos", produtosController.putProdutos);
/*----------------------*/
//deleta um registro
router.delete(
  "/produtos",
  produtosController.deleteProdutos,
);
/*------------ Rotas de Descrição de Pedidos -----------*/
router.get(
  "/descricaoPedidos",
  descricaoPedidoController.getAllDescricaoPedidos,
);
/*----------------------*/
//retorna um registro especifico
router.get(
  "/descricaoPedido/:id",
  descricaoPedidoController.getDescricaoPedidosById,
);
/*----------------------*/
//cria um novo registro
router.post(
  "/descricaoPedidos",
  descricaoPedidoController.postDescricaoPedidos,
);
/*----------------------*/
//atualiza um registro
router.put(
  "/descricaoPedidos",
  descricaoPedidoController.putDescricaoPedidos,
);

/*---------------- Rotas de Funcionários ---------------*/
router.get(
  "/funcionarios",
  funcionariosController.getAllFuncionarios,
);
/*----------------------*/
//retorna um registro especifico
router.get(
  "/funcionarios/:id",
  funcionariosController.getFuncionariosById,
);
/*----------------------*/
//cria um novo registro
router.post(
  "/funcionarios",
  funcionariosController.postFuncionarios,
);
/*----------------------*/
//atualiza um registro
router.put(
  "/funcionarios",
  funcionariosController.putFuncionarios,
);
/*----------------------*/
//deleta um registro
router.delete(
  "/funcionarios",
  funcionariosController.deleteFuncionarios,
);

/*---------------------------------------------------- */
