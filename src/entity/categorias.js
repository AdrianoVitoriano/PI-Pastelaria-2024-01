import { EntitySchema } from "typeorm";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

export const categorias = new EntitySchema({
  name: "categorias",
  tableName: "categorias",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    categoria: {
      type: "text",
    },
    descricao: {
        type: "text",
      },
  },
});

export async function getAllCategorias(req, res) {
  res.json(await getAll(req.body, categorias));
}
export async function getCategoriaById(req, res) {
  res.json(await getById(req.body, categorias));
}
export async function postCategoria(req, res) {
  res.json(await insert(req.body, categorias));
}
export async function putCategoria(req, res) {
  res.json(await updateById(req.body, categorias));
}
export async function deleteCategoria(req, res) {
  res.json(await deleteById(req.body, categorias));
}
