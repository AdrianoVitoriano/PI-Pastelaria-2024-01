import { dataBase } from "./ormconfig.js";


export async function insert(req, table) {
  const insert = await dataBase
    .createQueryBuilder()
    .insert()
    .into(table)
    .values(req.body)
    .execute()
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {return err});
}
export async function updateById(req, table) {
    const insert = await dataBase
      .createQueryBuilder()
      .update(table)
      .set(req.body)
      .where("id = :id", {id: req.body.id})
      .execute()
      .then(() => {
        return { statusCode: 200 };
      })
      .catch((err) => {return err});
  }
  export async function deleteById(req, table) {
    const insert = await dataBase
      .createQueryBuilder()
      .delete()
      .from(table)
      .where("id = :id", {id: req.body.id})
      .execute()
      .then(() => {
        return { statusCode: 200 };
      })
      .catch((err) => {return err});
  }
  
