<!-- Descreva na linguagem markdown, o funcionamento de cada função abaixo -->
<!--

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
function existeId(id) {
	return id === undefined ? false : true;
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


 -->

# CRUD

## getAll(table, whereOptions)

Função que retorna todos os registros de uma tabela. Caso seja passado um objeto whereOptions, a função irá filtrar os registros de acordo com as opções passadas.

_Parâmetros_

- table: Objeto que contém as opções da tabela que será consultada.
- whereOptions: Objeto que contém as opções de filtro da consulta.

_Exemplo da variável whereOptions:_

```Javascript
{
    ativo: 1
}
```

_Código_

```Javascript
export async function  getAll(table, whereOptions){
    return await dataBase
        .getRepository(table.options.name)
        .createQueryBuilder()
        .where(whereOptions ? { ativo: whereOptions.ativo } : {})
        .getMany();
}
```

_Retorno_

A função retorna um array com os registros da tabela consultada.

## getAllItensCozinha(table, whereOptions)

Função que retorna todos os registros de uma tabela. Caso seja passado um objeto whereOptions, a função irá filtrar os registros de acordo com as opções passadas.

_Parâmetros_

- table: Objeto que contém as opções da tabela que será consultada.
- whereOptions: Objeto que contém as opções de filtro da consulta.

_Exemplo da variável whereOptions:_

```Javascript
{
    produzido: 0
}
```

_Código_

```Javascript
export async function  getAllItensCozinha(table, whereOptions){
    return await dataBase
        .getRepository(table.options.name)
        .createQueryBuilder()
        .leftJoinAndSelect("cozinhas.pedidos", "pedidos")
        .where({ produzido: 0 })
        .getMany();
}
```

_Retorno_

A função retorna um array com os registros da tabela consultada.

## getById(req, table, whereOptions)

Função que retorna um registro de uma tabela de acordo com o id passado. Caso seja passado um objeto whereOptions, a função irá filtrar o registro de acordo com as opções passadas.

_Parâmetros_

- req: Objeto que contém o id do registro que será consultado.
- table: Objeto que contém as opções da tabela que será consultada.
- whereOptions: Objeto que contém as opções de filtro da consulta.

_Exemplo da variável req:_

```Javascript
{
    id: 1
}
```

_Código_

## getById(req, table, whereOptions)

Função que retorna um registro de uma tabela de acordo com o id passado. Caso seja passado um objeto whereOptions, a função irá filtrar o registro de acordo com as opções passadas.

## getComandaById(req, table, whereOptions)

Função que retorna um registro de uma tabela de acordo com o id passado. Caso seja passado um objeto whereOptions, a função irá filtrar o registro de acordo com as opções passadas.

## getPedidoById(req, table, whereOptions)

Função que retorna um registro de uma tabela de acordo com o id passado. Caso seja passado um objeto whereOptions, a função irá filtrar o registro de acordo com as opções passadas.

## getSomeById(arrayId, table, arrayColumnsReturn)

Função que retorna um conjunto de registros de uma tabela de acordo com os ids passados. Caso seja passado um arrayColumnsReturn, a função irá retornar apenas as colunas passadas.

## insert(body, table)

Função que insere um registro em uma tabela.

## updateById(body, table, whereOptions)

Função que atualiza um registro de uma tabela de acordo com o id passado. Caso seja passado um objeto whereOptions, a função irá filtrar o registro de acordo com as opções passadas.

## deleteById(body, table)

Função que deleta um registro de uma tabela de acordo com o id passado.

## conferirComanda(body)

Função que retorna uma comanda de acordo com o id da mesa passado.

## data()

Função que retorna a data atual.

## totalPorUsuario(dtInicio, dtFim)

Função que retorna o total de vendas por usuário de acordo com as datas passadas.

## totalPorMesa(dtInicio, dtFim)

Função que retorna o total de vendas por mesa
