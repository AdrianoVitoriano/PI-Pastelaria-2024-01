import { Router } from "express";
import {
  deleteMesa,
  getAllMesas,
  getMesaById,
  postMesa,
  putMesa,
} from "./entity/mesas.js";
import {
  deleteCategoria,
  getAllCategorias,
  postCategoria,
  putCategoria,
  getCategoriaById,
} from "./entity/categorias.js";
import {
    deleteItem,
    getAllItens,
    postItem,
    putItem,
    getItemById,
  } from "./entity/itens.js";

export const router = Router();

router.get("/sayhi", sayHi); // Rota de teste /sayhi, retorna "Hi!".

// Rotas da tabela mesas

router.get("/mesas", getAllMesas); // Rota que retorna todas as mesas.
router.post("/mesas", postMesa); // Rota que insere uma mesa no banco de dados.
router.put("/mesas", putMesa); // Rota que atualiza a mesa no banco pelo id.
router.delete("/mesas", deleteMesa); // Rota que deleta a mesa do banco pelo id.
router.get("/mesas/id", getMesaById); //  Rota que retorna uma mesa pelo id.

// Rotas da tabela categorias

router.get("/categorias", getAllCategorias); // Rota que retorna todas as mesas.
router.post("/categorias", postCategoria); // Rota que insere uma mesa no banco de dados.
router.put("/categorias", putCategoria); // Rota que atualiza a mesa no banco pelo id.
router.delete("/categorias", deleteCategoria); // Rota que deleta a mesa do banco pelo id.
router.get("/categorias/id", getCategoriaById); //  Rota que retorna uma mesa pelo id.

// Rotas da tabela itens

router.get("/itens", getAllItens); // Rota que retorna todas as mesas.
router.post("/itens", postItem); // Rota que insere uma mesa no banco de dados.
router.put("/itens", putItem); // Rota que atualiza a mesa no banco pelo id.
router.delete("/itens", deleteItem); // Rota que deleta a mesa do banco pelo id.
router.get("/itens/id", getItemById); //  Rota que retorna uma mesa pelo id.

function sayHi(req, res) {
  res.send("Hi!");
}
