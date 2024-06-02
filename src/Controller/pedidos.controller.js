import { Pedidos } from "../Model/pedidos.model.js";
import { validationResult } from "express-validator";
import { atualizarTotalComanda, conferirComandaExecutar } from "./comandas.controller.js";
import { validarMesa } from "./mesas.controller.js";
import { validarUsuario } from "./usuarios.controller.js";
import { insert, updateById, deleteById, getById, getAll, data, getPedidoById } from "../crud.js";
import { inserirItens } from "./itensPedidos.controller.js";

class PedidosController {
	static async getAllPedidos(req, res) {
		res.json(await getAll(Pedidos));
	}
	static async getPedidoById(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		res.json(await getPedidoById(req.params, Pedidos));
	}
	static async postPedido(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		let body = req.body;

		if ((await validarRequisição(body)).result) {
			const comanda = await conferirComandaExecutar(
				{
					body: {
						idMesa: body.idMesa,
						data: data(),
					},
				},
				insert
			);
			body.idComanda = comanda.id;
			body.data = data();
			body.id = (await insert(body, Pedidos)).id;
			body.total = await inserirItens(body.itens, body.id);
			await atualizarTotalPedido(body.id, body.total);
			await atualizarTotalComanda(body.idComanda, body.total + (isNaN(comanda.total) ? 0 : comanda.total));
			res.json({ result: true, id: body.id });
		} else {
			res.json({ error: "requisição não passou nas validações." });
		}
	}
	static async putPedido(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		req.body.id = parseInt(req.params.id);
		res.json(await updateById(req.body, Pedidos));
	}

	static async deletePedido(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		req.body.id = parseInt(req.params.id);
		let pedido = await getById(req.body, Pedidos);
		let comanda = await conferirComandaExecutar({ body: { id: pedido[0].idComanda } });
		if (comanda.aberta) {
			comanda = comanda.comanda
			await atualizarTotalComanda(comanda.id, comanda.total - pedido[0].total);
			res.json(await deleteById(req.body, Pedidos));
		} else {
			res.json({ error: "Comanda fechada ou pedido inexistente" });
		}
	}
}

async function atualizarTotalPedido(id, total) {
	await updateById({ id, total }, Pedidos);
}
async function validarRequisição(body) {
	return (await validarMesa(body.idMesa)) &&
		(await validarUsuario(body.idUsuario)) &&
		(body.itens ? (body.itens[0] ? true : false) : false)
		? { result: true }
		: { result: false };
}

export default PedidosController;
