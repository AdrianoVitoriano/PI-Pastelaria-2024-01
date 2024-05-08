import { Comandas } from "../Model/comandas.model.js";
import {
  insert,
  updateById,
  deleteById,
  getById,
  getAll,
  conferirComanda,
} from "../crud.js";

class ComandasController {
  static async getAllComandas(req, res) {
    res.json(await getAll(Comandas));
  }
  static async getComandaById(req, res) {
    res.json(await getById(req.body, Comandas));
  }
  static async postComanda(req, res) {
    res.json(await conferirExecutar(req, insert));
  }
  static async putComanda(req, res) {
    res.json(await conferirExecutar(req, updateById));
  }
  static async deleteComanda(req, res) {
    res.json(await conferirExecutar(req, deleteById));
  }
}
export async function conferirExecutar(req, callback) {
  let comanda;
  if (typeof req.body.id === "undefined") {
    comanda = await conferirComanda(req.body, Comandas).catch((err) => {
      return err;
    });
    if (comanda.result === false) {
      return await callback(req.body, Comandas);
    } else {
      return comanda;
    }
  } else {
    comanda = await getById(req.body, Comandas).catch((err) => {
      return err;
    });
    if (comanda[0].aberta) {
      return await callback(req.body, Comandas);
    } else {
      return { result: true, aberta: false };
    }
  }
}

export default ComandasController;
