import { Itens } from "../Model/itens.model.js";
import { insert, updateById, deleteById, getById, getAll, getSomeById } from "../crud.js";
import { validationResult } from "express-validator";

class ItensController {
	static async getAllItens(req, res) {
		res.json(await getAll(Itens));
	}
	static async getItemById(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.json(await getById(req.params, Itens,{ ativo: 1 }));
	}
	static async postItem(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.json(await insert(req.body, Itens));
	}
	static async putItem(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		req.body.id = parseInt(req.params.id);

		res.json(await updateById(req.body, Itens, { ativo: 1 }));
	}
	static async deleteItem(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		req.body.id = parseInt(req.params.id);
    req.body.ativo = 0;

		res.json(await updateById(req.body, Itens, { ativo: 1 }));
	}
}
export async function getPrecos(ids) {
	return await getSomeById(ids, Itens, ["itens.id", "itens.preco"]);
}
export async function getNamesItens(ids) {
	return await getSomeById(ids, Itens, ["itens.id", "itens.nome"]);
}

export default ItensController;
