import { produtos } from "../models/produtos.js";
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
class produtosController {
  static async getAllProdutos(req, res) {
    //esta função retorna todos os registros da tabela
    res.json(await getAll(req.body, produtos));
    //a função getAll() é usada para retornar todos os registros da tabela
  }
  static async getProdutosById(req, res) {
    //esta função retorna um registro da tabela pelo ID
    res.json(await getById(req.body, produtos));
    //a função getById() é usada para retornar um registro da tabela pelo ID
  }
  static async postProdutos(req, res) {
    //esta função insere um registro na tabela
    res.json(await insert(req.body, produtos));
    //a função insert() é usada para inserir um registro na tabela
  }
  static async putProdutos(req, res) {
    //esta função atualiza um registro na tabela
    res.json(await updateById(req.body, produtos));
    //a função update() é usada para atualizar um registro na tabela
  }
  static async deleteProdutos(req, res) {
    //esta função deleta um registro na tabela
    res.json(await deleteById(req.body, produtos));
    //a função deleteById() é usada para deletar um registro na tabela
  }
}

export default produtosController;
