import { Query } from "typeorm/driver/Query.js";
import { dataBase } from "./ormconfig.js";
import { In } from "typeorm";

const err400 = {
  statusCode: 400,
  msg: "ID não foi encontrado nos parâmetros passados. Por gentileza verificar a variável passada e/ou a documentação.",
};

export async function getAll(table) {
  return await dataBase.getRepository(table.options.name).find();
}
export async function getById(body, table) {
  if (existeId(body.id)) {
    const res = await dataBase
      .getRepository(table.options.name)
      .find({ where: { id: body.id } })
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

export async function updateById(body, table) {
  if (existeId(body.id)) {
    try {
      await dataBase
        .getRepository(table.options.name)
        .update(body.id, body)
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

export async function conferirComanda(body, table) {
  if (existeId(body.idMesa)) {
    try {
      const res = await dataBase
        .getRepository(table.options.name)
        .find({ where: { idMesa: body.idMesa, aberta: 1 } })
        .catch((err) => {
          return err;
        });
      if (res[0]) {
        return { result: true, id: res[0].id, valorTotal: res[0].valorTotal };
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
export function dataHora() {
  const date = new Date();
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}
function existeId(id) {
  return id === undefined ? false : true;
}

export async function totalPorUsuario() {
   
  try {
    const result = await dataBase.query(`
      SELECT 
      p.Id AS Pedido_Id,
      u.nome AS Nome_Usuário,
      SUM(p.total) as Total
      FROM
      pedidos p
      INNER JOIN usuarios u on p.idUsuario = u.id
      GROUP BY
      u.id
    `);

    return result;    
  } catch (error) {
    console.error("Erro ao obter relatório de vendas:", error);
    return null;
  }
}

export async function totalPorMesa() {
  try {
    const query = `
    SELECT
    m.id AS Nº_Mesa,
    m.localizacao AS Localização_Mesa,
    SUM(c.total) as Total
    FROM
    comandas c
    INNER JOIN mesas m on c.idMesa = m.id
    GROUP BY
    m.id
    `;

    const result = await dataBase.query(query);

    return result;
  } catch (error) {
    console.error("Erro ao obter relatório de vendas:", error);
    return null;
  }
}