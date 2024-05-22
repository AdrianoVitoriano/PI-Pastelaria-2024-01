import { Comandas } from "../Model/comandas.model.js";
import {
  insert,
  updateById,
  deleteById,
  getById,
  getAll,
  conferirComanda,
} from "../crud.js";

class ComandasController {
  static async getAllComandas(req, res) {
    res.json(await getAll(Comandas));
  }
  static async getComandaById(req, res) {
    res.json(await getById(req.body, Comandas));
  }
  static async postComanda(req, res) {
    res.json(await conferirComandaExecutar(req, insert));
  }
  static async postComanda_kairo(req, res) {


    try {
      // Busca um registro da tabela pelo ID da mesa e campo "aberta" igual a 1
      const existingComanda = await dataBase
        .getRepository(comandas.options.name)
        .findOne({ idMesa: req.body.idMesa, aberta: 1 });

      if (!existingComanda) {
        // Se não foi encontrado, insere um novo registro com os novos dados
        const newData = { idMesa: req.body.idMesa };
        const insertedComanda = await insert(
          newData,
          comandas,
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
    res.json(
      await conferirComandaExecutar(req, updateById),
    );
  }
  //função delete não será necessária
}

export async function conferirComandaExecutar(
  req,
  callback,
) {
  let comanda;
  if (typeof req.body.id === "undefined") {
    comanda = await conferirComanda(
      req.body,
      Comandas,
    ).catch((err) => {
      return err;
    });
    if (comanda.result === false) {
      return await callback(req.body, Comandas);
    } else {
      return comanda;
    }
  } else {
    comanda = await getById(req.body, Comandas).catch(
      (err) => {
        return err;
      },
    );
    if (comanda[0].aberta) {
      return await callback(req.body, Comandas);
    } else {
      return { result: true, aberta: 1 };
    }
  }
}
export async function atualizarTotalComanda(id, total) {
  //verificar a necessidade desta função
  //pois terá um trigger para atualizar o total da comanda
  await updateById({ id, total }, Comandas);
}

export default ComandasController;
