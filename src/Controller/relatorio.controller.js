import { Mesas } from "../Model/mesas.model.js"
import { Usuarios } from "../Model/usuarios.model.js"
import {totalPorUsuario, totalPorMesa, cozinha} from "../crud.js"

class  relatorioController{
static async totalUsuario(req, res) {
   res.json(await totalPorUsuario(req.body, Usuarios))
}
static async totalMesa(req, res) {
  res.json(await totalPorMesa(req.body, Mesas))
}
static async Cozinha(req, res) {
  res.json(await cozinha(req.body, Mesas))
}
}

export default relatorioController;