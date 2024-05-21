import { Mesas } from "../Model/mesas.model.js";
import {
  insert,
  updateById,
  deleteById,
  getById,
  getAll,
} from "../crud.js";

class MesasController {
  static async getAllMesas(req, res) {
    res.json(await getAll(Mesas));
  }
  static async getMesaById(req, res) {
    res.json(await getById(req.body, Mesas));
  }
  static async postMesa(req, res) {
    res.json(await insert(req.body, Mesas));
  }
  static async putMesa(req, res) {
    res.json(await updateById(req.body, Mesas));
  }
  //apagado a função deleteMesa pois mesas não podem ser excluidas
}

export async function validarMesa(id) {
  return (await getById({ id }, Mesas)).result
    ? true
    : false;
}

export default MesasController;
