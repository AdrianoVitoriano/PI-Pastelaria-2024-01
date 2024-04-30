import { Query } from "typeorm/driver/Query.js";
import { dataBase } from "./ormconfig.js";

const msg404 = "Você precisa passar o ID! Burruuu";
const msg400 = "ID não encontrado.";

export async function getAll(table) {
  return await dataBase.getRepository(table).find();
}
export async function getById(req, table) {
  const { id } = req;
  if (id === undefined) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }

  const res = await dataBase
    .getRepository(table.options.name)
    .find({ where: { id: id } })
    .catch((err) => {
      return err;
    });
  return res;
}

export async function insert(req, table) {
  const res = await dataBase
    .getRepository(table.options.name)
    .save(req)
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}

export async function updateById(req, table) {
  const { id } = req;
  if (id === undefined) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  const res = await dataBase
    .getRepository(table.options.name)
    .update(id, req)
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}

export async function deleteById(req, table) {
  const { id } = req;
  if (id === undefined) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  const res = await dataBase
    .getRepository(table.options.name)
    .delete(id)
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}
