/*---------------- Importaçôes ---------------*/
import { dataBase } from "./ormConfigDB"; //importa a base de dados
/*---------------------------------------------- */
/*------------------- Mensagens --------------------*/
const msg = {
  msg400: "ERRO, Repasse o ID",
  msg404: "ERRO, ID não encontrado",
  msg200: "Operação realizada com sucesso",
};
/*---------------------------------------------- */
/*------------------ CRUDs -----------------------*/
/*------------------ Select All -----------------------*/
export async function getAll(req, table) {
  //retorna todos os registros da tabela
  return await dataBase.getRepository(table).find();
  //.getRepository(table) = seleciona a tabela
  //.find = seleciona todos os registros da tabela
}
/*---------------------------------------------- */
/*------------------ Select By ID -----------------------*/
export async function getById(req, table) {
  //retorna um registro da tabela pelo ID
  const id = req.params.id; //pega o ID passado na rota
  //verifica se o ID foi passado
  if (id === undefined) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  //busca um registro da tabela pelo ID
  const res = await dataBase
    .getRepository(table.options.name)
    //table.options.name = nome da tabela
    .findOne(`id: ${id}`)
    //findOne = seleciona um registro da tabela pelo ID
    .catch((err) => {
      return err;
    });
  return res; //retorna o registro
}
/*---------------------------------------------- */
/*------------------ Insert -----------------------*/
export async function insert(req, table) {
  const res = await dataBase
    .getRepository(table.options.name) //nome da tabela
    .save(req) //salva os dados na tabela
    .then(() => {
      //verifica se o registro foi salvo
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}
/*---------------------------------------------- */
/*------------------ Update -----------------------*/
export async function updateById(req, table) {
  const { id } = req.params; //pega o ID passado na rota
  if (id === undefined) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  const res = await dataBase //wait é usado para aguardar o retorno da promise
    .getRepository(table.options.name)
    .update(id, req) //atualiza os dados na tabela
    //com base no ID passado na rota
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}
/*----------------------------------------------------- */
/*------------------ Delete -----------------------*/
export async function deleteById(req, table) {
  const { id } = req.params; //pega o ID passado na rota
  //verifica se o ID foi passado
  if (id === undefined) {
    return {
      statusCode: 400,
      msg: msg404,
    };
  }
  //deleta um registro da tabela pelo ID
  const res = await dataBase
    .getRepository(table.options.name) //nome da tabela
    .delete(id) //deleta um registro da tabela pelo ID
    .then(() => {
      return { statusCode: 200 };
    })
    .catch((err) => {
      return err;
    });
}
/*---------------------------------------------- */
