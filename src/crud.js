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
