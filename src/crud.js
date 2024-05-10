import { Query } from "typeorm/driver/Query.js";
import { dataBase } from "./ormconfig.js";
import { In } from "typeorm";

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
export async function getSomeById(arrayId, table,arrayColumnsReturn) {
  if (arrayId[0] === undefined) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  return await dataBase
    .getRepository(table.options.name)
    .createQueryBuilder(table.options.name)
    .select(arrayColumnsReturn)
    .where({ id: In(arrayId) })
    .getRawMany()

}

export async function insert(req, table) {
  const res = await dataBase
    .getRepository(table.options.name)
    .save(req)
    .catch((err) => {
      return err;
    });
    return {result:true,id:res.id};
}

export async function updateById(req, table) {
  const { id } = req;
  console.log(req)
  if (id === undefined) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  const res = await dataBase
    .getRepository(table.options.name)
    .update(id, req)
    .catch((err) => {
      return err;
    });
  if(res[0]){return { result: true, id: res[0].id}}else{return { result: false}}
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
    .catch((err) => {
      return err;
    });
  if(res[0]){return { result: true, id: res[0].id}}else{return { result: false}}
}
export async function conferirComanda(req,table) {
  const { idMesa } = req;
  const res = await dataBase
    .getRepository(table.options.name)
    .find({ where: { idMesa: idMesa, aberta: 1 } })
    .catch((err) => {
      return err;
    });
  if(res[0]){return { result: true, id: res[0].id, valorTotal:res[0].valorTotal}}else{return { result: false}}
}
export function dataHora(){
  const date = new Date();
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}