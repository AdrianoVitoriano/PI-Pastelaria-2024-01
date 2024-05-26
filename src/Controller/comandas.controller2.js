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
  /*----------------------------------*/
  static async getComandaById(req, res) {
    res.json(await getById(req.body, Comandas));
  }
  /*----------------------------------*/
  static async postComanda(req, res) {
    try {
      // Obter a data e hora atuais
      const dataAtual = new Date();

      // Adicionar a data atual aos dados da comanda
      const dadosComanda = {
        ...req.body,
        data: dataAtual // Adicione a data atual aos dados da comanda
      };

      // Verifica se já existe uma comanda aberta para a mesa
      const status = await statusComanda(req.body.idMesa);
      let idComanda;

      // Se não houver uma comanda aberta, cria uma nova comanda e obtém seu ID
      if (!status) {
        const comandaResult = await insert(dadosComanda, Comandas);
        idComanda = comandaResult.id;
      } else {
        idComanda = status;
      }

      // Retorna o ID da comanda ou a comanda criada
      res.status(200).json({ id: idComanda });
    } catch (error) {
      // Em caso de erro, retorna uma mensagem de erro para o cliente
      console.error('Erro ao criar/completar comanda:', error);
      res.status(500).json({ message: 'Erro ao criar/completar comanda.' });
    }
  }

  /*----------------------------------*/
  static async putComanda(req, res) {
    if (!statusComanda(req.body.idMesa)) {
      res.json({ msg: "Não há comanda aberta para esta mesa" })
    } else { res.json(await updateById(req.body, Comandas)); }

  }
  /*----------------------------------*/
}
async function statusComanda(idMesa) {
  const status = await Comandas.findOne({ where: { idMesa: idMesa, aberta: 1 } });
  if (!status) {
    return false;
  } else {
    //aqui retorna o id da comanda aberta
    return status.id;

  }
}

export default ComandasController;
