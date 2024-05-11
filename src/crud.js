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

async function consultarDados() {
  // Crie a conexão com o banco de dados
  const connection = await createConnection();

  try {
    // Consulta para obter o total da comanda
    const totalComanda = await connection
      .getRepository(Comanda)
      .createQueryBuilder("comanda")
      .select("SUM(comanda.total)", "total")
      .getRawOne();

    console.log("Total da comanda:", totalComanda.total);

    // Consulta para obter o total vendido por mesa
    const totalPorMesa = await connection
      .getRepository(Comanda)
      .createQueryBuilder("comanda")
      .select("mesa.numero", "mesa")
      .addSelect("SUM(comanda.total)", "total")
      .leftJoin(Mesa, "mesa", "mesa.id = comanda.mesaId")
      .groupBy("mesa.numero")
      .getRawMany();

    console.log("Total vendido por mesa:");
    console.table(totalPorMesa);

    // Consulta para obter o total vendido por garçom
    const totalPorGarcom = await connection
      .getRepository(Comanda)
      .createQueryBuilder("comanda")
      .select("garcom.nome", "garcom")
      .addSelect("SUM(comanda.total)", "total")
      .leftJoin(Garcom, "garcom", "garcom.id = comanda.garcomId")
      .groupBy("garcom.nome")
      .getRawMany();

    console.log("Total vendido por garçom:");
    console.table(totalPorGarcom);
  } catch (error) {
    console.error("Erro ao consultar os dados:", error);
  } finally {
    // Feche a conexão com o banco de dados quando terminar
    await connection.close();
  }
}