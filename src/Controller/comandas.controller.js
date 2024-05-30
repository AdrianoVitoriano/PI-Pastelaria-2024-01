import { Comandas } from "../Model/comandas.model.js";
import { validationResult } from "express-validator";

import { updateById, getById, getAll, conferirComanda, getComandaById } from "../crud.js";
import e from "express";

class ComandasController {
	static async getAllComandas(req, res) {
		res.json(await getAll(Comandas));
	}
	static async getComandaById(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.json(await getComandaById(req.params, Comandas));
	}
	static async putComanda(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		req.body.id = parseInt(req.params.id);
    
    if ((await conferirComandaExecutar(req)).aberta === true) {
      res.json(await updateById(req, Comandas));
    }else{ 
      res.status(400).json({ message: "Comanda fechada" });
    }
		
	}
}

export async function conferirComandaExecutar(req, callback) {
	let comanda;
	if (typeof req.body.id === "undefined") {
		comanda = await conferirComanda(req.body).catch((err) => {
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
			return { result: true, aberta: true, comanda: comanda[0]}
		} else {
			return { result: true, aberta: false };
		}
	}
}
export async function atualizarTotalComanda(id, total) {
	await updateById({ id, total }, Comandas);
}

export default ComandasController;
