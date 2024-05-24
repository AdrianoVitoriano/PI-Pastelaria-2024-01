import { Mesas } from "../Model/mesas.model.js";
import { insert, updateById, deleteById, getById, getAll } from "../crud.js";
import { validationResult } from 'express-validator';

class MesasController {
  static async getAllMesas(req, res) {
    res.json(await getAll(Mesas));
  }
  static async getMesaById(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    
    res.json(await getById(req.params, Mesas));
  }
  static async postMesa(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    
    res.json(await insert(req.body, Mesas));
  }
  static async putMesa(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    
    req.body.id=req.params.id

    res.json(await updateById(req.body, Mesas));
  }
  static async deleteMesa(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    req.body.id = req.params.id

    res.json(await deleteById(req.body, Mesas));
  }
}

export async function validarMesa(id){
  return (await getById({id,}, Mesas)).result  ?true:false
}

export default MesasController;
