import { EntitySchema } from "typeorm";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";

export const mesas = new EntitySchema({
  name: "mesas",
  tableName: "mesas",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    posicao: {
      type: "text",
    },
  },
});

export async function getAllMesas(req, res) {
  res.json(await getAll(req.body, mesas));
}
export async function getMesaById(req, res) {
  res.json(await getById(req.body, mesas));
}
export async function postMesa(req, res) {
  res.json(await insert(req.body, mesas));
}
export async function putMesa(req, res) {
  res.json(await updateById(req.body, mesas));
}
export async function deleteMesa(req, res) {
  res.json(await deleteById(req.body, mesas));
}
