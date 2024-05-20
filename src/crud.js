import { Query } from "typeorm/driver/Query.js";
import { dataBase } from "./ormconfig.js";
import { In } from "typeorm";

// Objeto de erro para requisições inválidas
const err400 = {
  statusCode: 400,
  msg: "ID não foi encontrado nos parâmetros passados. Por gentileza verificar a variável passada e/ou a documentação.",
};

// Função para obter todos os registros de uma tabela
export async function getAll(table) {
  return await dataBase
    .getRepository(table.options.name)
    .find();
}

// Função para obter um registro por ID
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

// Função para obter o último ID de uma tabela
export async function getLastId(table) {
  const res = await dataBase
    .getRepository(table.options.name)
    .createQueryBuilder("table")
    .select("MAX(table.id)", "lastId")
    .getRawOne();
  return res;
}

// Função para obter registros por IDs
export async function getSomeById(
  arrayId,
  table,
  arrayColumnsReturn,
) {
  if (existeId(arrayId[0])) {
    return await dataBase
      .getRepository(table.options.name) //obtem o repositorio
      .createQueryBuilder(table.options.name) //constroi a consulta
      .select(arrayColumnsReturn) // seleciona as colunas que serão retornadas
      //arrayColumnsReturn => array de colunas que serão retornadas
      .where({ id: In(arrayId) }) //filtra pelo ID passado no array
      .getRawMany(); //executa a consulta
  } else {
    return err400;
  }
}

// Função para inserir um novo registro
export async function insert(body, table) {
  const res = await dataBase
    .getRepository(table.options.name)
    .save(body)
    .catch((err) => {
      return err;
    });
  return { result: true, id: res.id };
}

// Função para atualizar um registro por ID
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

// Função para excluir um registro por ID
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

// Função para verificar a existência de um ID
function existeId(id) {
  return id !== undefined;
} //se o ID estiver vazio, retorna falso, senao, retorna true
export async function postComanda(req, res) {
  //confirmar se esta função é melhor que a outra
  const table = "comandas";

  try {
    // Busca um registro da tabela pelo ID da mesa e campo "aberta" igual a 1
    const existingComanda = await dataBase
      .getRepository(table.options.name)
      .findOne({ idMesa: req.body.idMesa, aberta: 1 });

    if (!existingComanda) {
      // Se não foi encontrado, insere um novo registro com os novos dados
      const newData = { idMesa: req.body.idMesa };
      const insertedComanda = await insert(newData, table);
      // Retorna o ID da comanda inserida
      return res
        .status(200)
        .json({ id: insertedComanda.id });
    }

    // Se a comanda já existe, retorna o ID da comanda existente
    return res.status(200).json({ id: existingComanda.id });
  } catch (error) {
    console.error(error);
    // Trata o erro apropriadamente
    return res
      .status(500)
      .json({ msg: "Erro ao processar a requisição" });
  }
}
// Função para conferir a existência de uma comanda por ID da mesa
export async function conferirComanda(body, table) {
  //verificar a necessidade desta função
  //ver se é mlehor trocar a função por uma que verifica o campo aberta e retorna o id
  if (existeId(body.idMesa)) {
    try {
      const res = await dataBase
        .getRepository(table.options.name)
        .find({ where: { idMesa: body.idMesa, aberta: 1 } })
        .catch((err) => {
          return err;
        });
      // Se houver pelo menos um resultado, significa que uma comanda está aberta para a mesa fornecida.
      if (res[0]) {
        return {
          result: true,
          id: res[0].id,
          total: res[0].total,
        };
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

// Função para retornar a data e hora atual
export function dataHora() {
  const date = new Date();
  return `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} | ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// Função para obter o total de vendas por usuário
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
    console.error(
      "Erro ao obter relatório de vendas:",
      error,
    );
    return null;
  }
}

// Função para obter o total de vendas por mesa
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
    console.error(
      "Erro ao obter relatório de vendas:",
      error,
    );
    return null;
  }
}
