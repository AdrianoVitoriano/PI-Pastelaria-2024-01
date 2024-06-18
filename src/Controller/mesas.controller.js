import { Mesas } from "../Model/mesas.model.js";
import { insert, updateById, deleteById, getById, getAll, conferirComanda } from "../crud.js";
import { validationResult } from 'express-validator';
import { conferirComandaExecutar } from "./comandas.controller.js";

class MesasController {
  static async getAllMesas(req, res) {
    res.json(await getAll(Mesas));
  }
  static async getAllMesasWithComanda(req, res) {
    let mesas = await getAll(Mesas);
    await Promise.all(
			mesas.map(async (mesa) => {
        let comanda = await conferirComanda({idMesa: mesa.id});
        if(comanda.result){
          mesa.comanda = comanda.id;
          mesa.status = true;
          mesa.total = comanda.total;
        }else{
          mesa.status = false;
        }
			})
		);
    res.json(mesas)
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
    
    req.body.id=parseInt(req.params.id)

    res.json(await updateById(req.body, Mesas));
  }
  static async deleteMesa(req, res) {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    req.body.id = parseInt(req.params.id)

    res.json(await deleteById(req.body, Mesas));
  }
}

export async function validarMesa(id){
  return (await getById({id,}, Mesas)).result  ?true:false
}

export default MesasController;
