import { Categorias } from "../Model/categorias.model.js";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

class CategoriasController {
  static async getAllCategorias(req, res) {
    res.json( await getAll(Categorias));
  }
  static async getCategoriaById(req, res) {
    res.json(await getById(req.body, Categorias));
  }
  static async postCategoria(req, res) {
    res.json(await insert(req.body, Categorias));
  }
  static async putCategoria(req, res) {
    res.json(await updateById(req.body, Categorias));
  }
  static async deleteCategoria(req, res) {
    res.json(await deleteById(req.body, Categorias));
  }
}

export default CategoriasController;
