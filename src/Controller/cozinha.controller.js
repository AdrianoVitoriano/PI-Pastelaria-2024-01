import { Cozinhas } from "../Model/cozinha.model.js";
import { Pedidos } from "../Model/pedidos.model.js";
import { getById, getAllItensCozinha, insert, getSomeById, converterData, updateById } from "../crud.js";
import { validationResult } from "express-validator";
import { Itens } from "../Model/itens.model.js";
import { getMesaComanda } from "./comandas.controller.js";

class CozinhaController {
	static async getAllItensCozinha(req, res) {
		let itens = await getAllItensCozinha(Cozinhas);
		let pedidosId = [];
		let itensId = [];
		itens.map((item) => {
			if (!itensId.includes(item.idItem)) {
				itensId.push(item.idItem);
			}
			if (!pedidosId.includes(item.idPedido)) {
				pedidosId.push(item.idPedido);
			}
		});
		const itensNomes = await getSomeById(itensId, Itens, ["itens.id", "itens.nome"]);
		let pedidos = await getSomeById(pedidosId, Pedidos, ["pedidos.id", "pedidos.data","pedidos.idComanda"]);
		let listaPedidos = [];
		if (!(pedidos.statusCode === 400)) {
			await Promise.all(pedidos.map(async (pedido, index) => {
				if (!(pedido.pedidos_finalizado === 0)) {
					listaPedidos.push({
						id: pedido.pedidos_id,
						data: converterData(pedido.pedidos_data),
						mesa: await getMesaComanda(pedido.pedidos_comandasId),
						itens: [],
					});
					await Promise.all(itens.map(async (item) => {
						if (item.idPedido === pedido.pedidos_id) {
							listaPedidos[index].itens.push({
								id: item.id,
								nome: itensNomes.find((element) => element.itens_id === item.idItem).itens_nome,
								quantidade: item.quantidade,
							});
						}
					}));
				}
			}));
		}
		console.log(listaPedidos)
		res.json(listaPedidos);
	}
	static async getPedidoCozinha(req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		req.body.id = parseInt(req.params.id);

		res.json(await getById(req.body, Cozinhas));
	}
	static async putItensCozinha(req, res) {
		await Promise.all(
			req.body.itens.map(async (item) => {
				await updateById(item, Cozinhas);
			})
		);
		res.json({ message: "Itens atualizados" });
	}
}
export default CozinhaController;

export async function inserirItensCozinha(itens) {
	await insert(itens, Cozinhas);
}
export async function atualizarItemCozinha(req) {
	await updateById(req, Cozinhas);
}
