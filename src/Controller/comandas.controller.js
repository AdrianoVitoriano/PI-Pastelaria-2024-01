import { Comandas } from "../Model/comandas.model.js";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

class ComandasController {
static async getAllComandas(req, res) {
  res.json(await getAll(req.body, Comandas));
}
static async getComandaById(req, res) {
  res.json(await getById(req.body, Comandas));
}
static async postComanda(req, res) {
  res.json(await insert(req.body, Comandas));
}
static async putComanda(req, res) {
  res.json(await updateById(req.body, Comandas));
}
static async deleteComanda(req, res) {
  res.json(await deleteById(req.body, Comandas));
}
}

export default ComandasController;