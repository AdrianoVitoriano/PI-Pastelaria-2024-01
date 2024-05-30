import { dataBase } from "./ormconfig.js";
import { In } from "typeorm";

const err400 = {
	statusCode: 400,
	msg: "ID não foi encontrado nos parâmetros passados. Por gentileza verificar a variável passada e/ou a documentação.",
};

export async function getAll(table, whereOptions) {
	return await dataBase
		.getRepository(table.options.name)
		.createQueryBuilder()
		.where(whereOptions ? { ativo: whereOptions.ativo } : {})
		.getMany();
}
export async function getAllItensCozinha(table, whereOptions) {
	return await dataBase
		.getRepository(table.options.name)
		.createQueryBuilder()
		.leftJoinAndSelect("cozinhas.pedidos", "pedidos")
		.where({ produzido: 0 })
		.getMany();
}
export async function getById(req, table, whereOptions) {
	if (existeId(req.id)) {
		const res = await dataBase
			.getRepository(table.options.name)
			.createQueryBuilder()
			.where(whereOptions ? { id: req.id, ativo: whereOptions.ativo } : { id: req.id })
			.getMany()
			.catch((err) => {
				return err;
			});

		if (res[0]) {
			res.result = true;
			return res;
		} else {
			return { result: false };
		}
	} else {
		return err400;
	}
}
export async function getComandaById(req, table, whereOptions) {
	if (existeId(req.id)) {
		const res = await dataBase
			.getRepository(table.options.name)
			.createQueryBuilder()
			.leftJoinAndSelect("comandas.pedidos", "pedidos")
			.leftJoinAndSelect("pedidos.itensPedidos", "itensPedido")
			.where(whereOptions ? { id: req.id, ativo: whereOptions.ativo } : { id: req.id })
			.getMany()
			.catch((err) => {
				return err;
			});

		if (res[0]) {
			res.result = true;
			return res;
		} else {
			return { result: false };
		}
	} else {
		return err400;
	}
}
export async function getPedidoById(req, table, whereOptions) {
	if (existeId(req.id)) {
		const res = await dataBase
			.getRepository(table.options.name)
			.createQueryBuilder()
			.leftJoinAndSelect("pedidos.itensPedidos", "itensPedido")
			.leftJoinAndSelect("pedidos.cozinhas", "cozinhas")
			.where(whereOptions ? { id: req.id, ativo: whereOptions.ativo } : { id: req.id })
			.getMany()
			.catch((err) => {
				return err;
			});

		if (res[0]) {
			res.result = true;
			return res;
		} else {
			return { result: false };
		}
	} else {
		return err400;
	}
}
export async function getSomeById(arrayId, table, arrayColumnsReturn) {
	if (existeId(arrayId[0])) {
		return await dataBase
			.getRepository(table.options.name)
			.createQueryBuilder(table.options.name)
			.select(arrayColumnsReturn)
			.where({ id: In(arrayId) })
			.getRawMany();
	} else {
		return err400;
	}
}

export async function insert(body, table) {
	const res = await dataBase
		.getRepository(table.options.name)
		.save(body)
		.catch((err) => {
			return err;
		});
	return { result: true, id: res.id };
}

export async function updateById(body, table, whereOptions) {
	if (existeId(body.id)) {
		try {
			await dataBase
				.getRepository(table.options.name)
				.createQueryBuilder(table.options.name)
				.update()
				.set(body)
				.where(whereOptions ? { id: body.id, ativo: whereOptions.ativo } : { id: body.id })
				.execute()
				.catch((err) => {
					return err;
				});
			return { result: true, id: body.id };
		} catch (err) {
			return err;
		}
	} else {
		return err400;
	}
}

export async function deleteById(body, table) {
	if (existeId(body.id)) {
		try {
			await dataBase
				.getRepository(table.options.name)
				.delete(body.id)
				.catch((err) => {
					return err;
				});
			return { result: true, id: body.id };
		} catch (err) {
			return err;
		}
	} else {
		return err400;
	}
}

export async function conferirComanda(body) {
	if (existeId(body.idMesa)) {
		try {
			const res = await dataBase
				.getRepository("comandas")
				.find({ where: { idMesa: body.idMesa, aberta: 1 } })
				.catch((err) => {
					return err;
				});
			if (res[0]) {
				return { result: true, id: res[0].id, total: res[0].total };
			} else {
				return { result: false };
			}
		} catch (err) {
			return err;
		}
	} else {
		return err400;
	}
}

export function data() {
	// console.log(date[Symbol.toPrimitive]('number'))
	return Date.now();
}
export function dataHora() {
	const date = new Date();
	return `${date.getDate()}/${date.getMonth() + 1
		}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function existeId(id) {
	return id === undefined ? false : true;
}
export async function totalPorMesa(dtInicio, dtFim) {
	try {
		const query = dataBase
			.getRepository("comandas")
			.createQueryBuilder("comanda")
			.select("comanda.mesasId", "mesa")
			.addSelect("SUM(comanda.total)", "total")
			.groupBy("comanda.mesasId")


		if (dtFim) {
			dtInicio = dtInicio ? dtInicio : 0;
			query.where("comanda.data BETWEEN :dtInicio AND :dtFim", { dtInicio, dtFim });
		} else if (dtInicio) {
			query.where("comanda.data >= :dtInicio", { dtInicio: `${dtInicio}` });
		}

		return await query.getRawMany();
	} catch (err) {
		return err;
	}
}


export async function totalPorUsuario(dtInicio, dtFim) {
	try {
		const query = dataBase
			.getRepository("pedidos")
			.createQueryBuilder("pedido")
			.select("pedido.usuariosid", "usuariosid")
			.addSelect("SUM(pedido.total)", "total")
			.groupBy("pedido.usuariosid");

		if (dtFim) {
			dtInicio = dtInicio ? dtInicio : 0;
			query.where("pedido.data BETWEEN :dtInicio AND :dtFim", { dtInicio, dtFim });
		} else if (dtInicio) {
			query.where("pedido.data >= :dtInicio", { dtInicio: `${dtInicio}` });
		}

		return await query.getRawMany();
	} catch (err) {
		return err;
	}
}