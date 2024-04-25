import { EntitySchema } from "typeorm";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

export const itens = new EntitySchema({
  name: "Itens",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    nome: {
      type: "text",
    },
    sabor: {
      type: "text",
    },
    categoria_id: {
      type: "text",
    },
    preco: {
        type: "int",
      },
  },
  relations: {
    categorias: {
        type: "many-to-one",
        target: "categorias", // CategoryEntity
    },
},
  
});

export async function getAllItens(req, res) {
  res.json(await getAll(req.body, itens));
}
export async function getItemById(req, res) {
  res.json(await getById(req.body, itens));
}
export async function postItem(req, res) {
  res.json(await insert(req.body, itens));
}
export async function putItem(req, res) {
  res.json(await updateById(req.body, itens));
}
export async function deleteItem(req, res) {
  res.json(await deleteById(req.body, itens));
}
