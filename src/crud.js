import { dataBase } from "./ormconfig.js";

const msg404 = "Você precisa passar o ID! Burruuu";
const msg400 = "ID não encontrado.";

export async function getAll(req, table) {
  return await dataBase.getRepository(table).find();
}

export async function getById(req, table) {
  if (req.body && !req.id) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }

  const res = await dataBase
    .getRepository(table.options.name)
    .findOne(`id: 1`)
    .catch((err) => {
      return err;
    });
    return res
}

export async function insert(req, table) {
  const insert = await dataBase
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
  if (req && !req.id) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  const update = await dataBase
    .getRepository(table.options.name)
    .update(req.id, req)
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}

export async function deleteById(req, table) {
  console.log(req);
  console.log(table);
  if (req && !req.id) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  const del = await dataBase
    .getRepository(table.options.name)
    .delete(req.id)
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}
