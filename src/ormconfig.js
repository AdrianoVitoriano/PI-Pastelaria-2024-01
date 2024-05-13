import { DataSource } from "typeorm";
import { Mesas } from "./Model/mesas.model.js";
import { TipoItens } from "./Model/tipoItens.model.js";
import { Itens } from "./Model/itens.model.js";
import { ItensPedidos } from "./Model/itensPedidos.model.js";
import { Pedidos } from "./Model/pedidos.model.js";
import { Usuarios } from "./Model/usuarios.model.js";
import { Comandas } from "./Model/comandas.model.js";
export const dataBase = new DataSource({
  type: "sqlite",
  database: "./database.db",
  entities: [
    Mesas,
    TipoItens,
    Itens,
    ItensPedidos,
    Pedidos,
    Usuarios,
    Comandas,
  ],
  logging: true,
  synchronize: true,
});

dataBase
  .initialize() // Inicializa o Banco
  .then(() => {
    console.log(`Banco de dados inicializado`);
  })
  .catch((err) => {
    console.error(`Erro ao inicializar o banco de dados`, err);
  });
