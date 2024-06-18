import { Comandas } from "../Model/comandas.model.js";
import { validationResult } from "express-validator";
import { updateById, getById, getAll, conferirComanda, getComandaById, converterData } from "../crud.js";
import { getNameUsuario } from "./usuarios.controller.js";
import { getNamesItens } from "./itens.controller.js";

class ComandasController {
	static async getAllComandas(req, res) {
		res.json(await getAll(Comandas));
	}
	static async getAllComandasAbertas(req, res) {
		let comandas = await getAll(Comandas, { aberta: 1 });
		comandas.map(async (comanda) => {
			comanda.data = converterData(comanda.data);
		});

		res.json(comandas);
	}
	static async getComandaById(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		let comanda = (await getComandaById(req.params, Comandas))[0];
		let newPedidos = [];
		await Promise.all(
			comanda.pedidos.map(async (pedido) => {
				pedido.itensPedidos.map((item) => {
					console.log(item);
				});
				let itens = [];
				await Promise.all(
					pedido.itensPedidos.map(async (item) =>
						itens.push({
							nome: (await getNamesItens([item.idItem]))[0].itens_nome,
							quantidade: item.quantidade,
							subtotal: item.subtotal,
						})
					)
				);
				newPedidos.push({
					id: pedido.id,
					nomeUsuario: await getNameUsuario(pedido.idUsuario),
					data: converterData(pedido.data),
					finalizado: pedido.finalizado,
					total: pedido.total,
					itens: itens,
				});
			})
		);
		let newComanda = {
			id: comanda.id,
			idMesa: comanda.idMesa,
			data: converterData(comanda.data),
			aberta: comanda.aberta,
			total: comanda.total,
			pedidos: newPedidos,
		};
		res.json(newComanda);
	}
	static async putComanda(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		req.body.id = parseInt(req.params.id);

		if ((await conferirComandaExecutar(req)).aberta === true) {
			res.json(await updateById(req.body, Comandas));
		} else {
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
			return { result: true, aberta: true, comanda: comanda[0] };
		} else {
			return { result: true, aberta: false };
		}
	}
}
export async function atualizarTotalComanda(id, total) {
	await updateById({ id, total }, Comandas);
}
export async function getMesaComanda(id) {
	console.log(id)
	return (await getById({ id }, Comandas))[0].idMesa;
}

export default ComandasController;
