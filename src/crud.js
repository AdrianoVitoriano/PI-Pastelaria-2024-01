import { dataBase } from "./ormconfig.js";

const msg404 = "Você precisa passar o ID! Burruuu";
const msg400 = "ID não encontrado.";

export async function getAll(req, table) {
  return await dataBase.getRepository(table).find()
}

export async function getById(req, table) {
  if (req.body && !req.id) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  const insert = await dataBase
    .createQueryBuilder()
    .select(table.options.name)
    .from(table, table.options.name)
    .where(`${table.options.name}.id = ${req.id}`)
    .getOne()
    .catch((err) => {
      return err;
    });
  return insert;
}

export async function insert(req, table) {
  const insert = await dataBase
    .createQueryBuilder()
    .insert()
    .into(table)
    .values(req)
    .execute()
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
  const insert = await dataBase
    .createQueryBuilder()
    .update(table)
    .set(req)
    .where(`id = ${req.id}`)
    .execute()
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}
export async function deleteById(req, table) {
  console.log(req)
  console.log(table)
  if (req && !req.id) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  const insert = await dataBase
    .createQueryBuilder()
    .delete()
    .from(table)
    .where(`id = ${req.id}`)
    .execute()
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}
