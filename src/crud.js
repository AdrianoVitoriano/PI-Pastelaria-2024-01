import { dataBase } from "./ormconfig.js";
import { In } from "typeorm";
import { Pedidos } from "./Model/pedidos.model.js";
import { Usuarios } from "./Model/usuarios.model.js";


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

	export function dataHora() {
		const date = new Date();
		return `${date.getDate()}/${date.getMonth() + 1
			}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
	}
	function existeId(id) {
		return id === undefined ? false : true;
	}
	export async function totalPorMesa(datainicio, datafim) {
		try {
			const connection = await createConnection();
			const entityManager = getManager();
			const comandasRepository = entityManager.getRepository(Comandas);
			const result = await comandasRepository
				.createQueryBuilder("comandas")
				.select("comandas.idMesa", "mesa")
				.addSelect("SUM(comandas.total)", "total")
				.addSelect("AVG(comandas.total)", "media")
				.addSelect(subQuery => {
					return subQuery
						.select("usuarios.nome")
						.from("pedidos", "pedidos")
						.leftJoin("usuarios", "usuarios", "pedidos.usuariosId = usuarios.id")
						.where("pedidos.comandasId = comandas.id")
						.groupBy("pedidos.usuariosId")
						.orderBy("SUM(pedidos.total)", "DESC")
						.limit(1);
				}, "usuario_que_mais_vendeu")
				.where("comandas.abertura >= :startDate", { startDate: datainicio })
				.andWhere("comandas.abertura <= :endDate", { endDate: datafim })
				.groupBy("comandas.idMesa")
				.getRawMany();
			await connection.close();
			return result;
		} catch (error) {

			throw error;
		}
	}


	export async function totalPorUsuario(dataInicio, dataFim) {
		try {
			const connection = await createConnection();

			const queryResult = await getRepository(Usuarios)
				.createQueryBuilder("usuarios")
				.select("usuarios.nome", "nome_usuario")
				.addSelect("usuarios.id", "id_usuario")
				.addSelect("SUM(pedidos.total)", "total_vendas")
				.addSelect(subQuery => {
					return subQuery
						.select("itens.nome")
						.from(Pedidos, "pedidos")
						.innerJoin(ItensPedidos, "itensPedidos", "pedidos.id = itensPedidos.pedidosId")
						.innerJoin(Itens, "itens", "itensPedidos.itensId = itens.id")
						.where("pedidos.usuariosId = usuarios.id")
						.groupBy("pedidos.comandasId")
						.orderBy("COUNT(*)", "DESC")
						.limit(1);
				}, "produto_mais_vendido")
				.addSelect(subQuery => {
					return subQuery
						.select("COUNT(*)")
						.from(Pedidos, "p3")
						.where("p3.usuariosId = usuarios.id")
						.groupBy("p3.comandasId");
				}, "media_vendas_por_mesa")
				.leftJoin(Pedidos, "pedidos", "usuarios.id = pedidos.usuariosId")
				.where("pedidos.comandasId IN " +
					"(SELECT id FROM comandas WHERE abertura >= :startDate AND abertura <= :endDate)",
					{ startDate: dataInicio, endDate: dataFim })
				.groupBy("usuarios.id, usuarios.nome")
				.getRawMany();

			await connection.close();

			return queryResult;
		} catch (error) {
			throw error;
		}
	}
