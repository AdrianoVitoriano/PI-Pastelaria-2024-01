import { totalPorUsuario, totalPorMesa } from "../crud.js"

class relatorioController {
  static async totalUsuario(req, res) {
    res.json(await totalPorUsuario(req.body.dataInicio, req.body.dataFim, parseInt(req.params.id)))
  }
  static async totalMesa(req, res) {
    res.json(await totalPorMesa(req.body.dtInicio, req.body.dtFim, parseInt(req.params.id)))
  }
}

export default relatorioController;