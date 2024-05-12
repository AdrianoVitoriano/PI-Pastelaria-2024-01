import { comandas } from "../models/comandas.js";
import {
  insert,
  updateById,
  deleteById,
  getById,
  getAll,
} from "../crud.js";

// SELECT: Método HTTP GET
// UPDATE: Métodos HTTP PUT
// DELETE: Método HTTP DELETE
// INSERT: Método HTTP POST
/**static:
static é uma palavra-chave usada em classes JavaScript para definir um método estático ou uma propriedade estática.
Um método estático é chamado na classe em si, e não em instâncias dessa classe. Isso significa que ele não está disponível nas instâncias da classe, mas sim na própria classe.
Uma propriedade estática é uma propriedade da classe em si, e não de suas instâncias. Ela é acessada usando o nome da classe, seguido pelo nome da propriedade.
Ao definir um método ou propriedade como estático, você está dizendo que ela é comum a todas as instâncias da classe e pode ser usada sem criar uma instância da classe. */

class comandasController {
  static async getAllComandas(req, res) {
    //esta função retorna todos os registros da tabela
    res.json(await getAll(req.body, comandas));
    //a função getAll() é usada para retornar todos os registros da tabela
  }
  static async getComandaById(req, res) {
    //esta função retorna um registro da tabela pelo ID
    res.json(await getById(req.body, comandas));
    //a função getById() é usada para retornar um registro da tabela pelo ID
  }
  static async postComanda(req, res) {
    const table = "comandas";

    try {
      // Busca um registro da tabela pelo ID da mesa e campo "aberta" igual a 1
      const existingComanda = await dataBase
        .getRepository(table.options.name)
        .findOne({ idMesa: req.body.idMesa, aberta: 1 });

      if (!existingComanda) {
        // Se não foi encontrado, insere um novo registro com os novos dados
        const newData = { idMesa: req.body.idMesa };
        const insertedComanda = await insert(
          newData,
          table,
        );
        // Retorna o ID da comanda inserida
        return res
          .status(200)
          .json({ id: insertedComanda.id });
      }

      // Se a comanda já existe, retorna o ID da comanda existente
      return res
        .status(200)
        .json({ id: existingComanda.id });
    } catch (error) {
      console.error(error);
      // Trata o erro apropriadamente
      return res
        .status(500)
        .json({ msg: "Erro ao processar a requisição" });
    }
  }

  static async putComanda(req, res) {
    //esta função atualiza um registro na tabela
    res.json(await updateById(req.body, comandas));
    //a função update() é usada para atualizar um registro na tabela
  }
  static async deleteComanda(req, res) {
    //esta função deleta um registro na tabela
    res.json(await deleteById(req.body, comandas));
    //a função deleteById() é usada para deletar um registro na tabela
  }
}
export default comandasController;
