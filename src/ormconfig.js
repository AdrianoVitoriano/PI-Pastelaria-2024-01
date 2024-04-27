import { DataSource } from "typeorm";
import { Mesas } from "./Model/mesas.model.js";
import { Categorias } from "./Model/categorias.model.js";
import { Itens } from "./Model/itens.model.js";
import { ItensPedidos } from "./Model/tensPedidos.model.js";

export const dataBase = new DataSource({
  // Cria o objeto do banco de dados
  type: "sqlite", // Tipo do banco de dados
  database: "./database.db", // Caminho do banco
  entities: [Mesas, Categorias, Itens,ItensPedidos ], // Variáveis das entidades(Tabelas) do banco.
  logging: true, // log das queries executadas
  synchronize: true, // cria as tabelas automaticamente
});

dataBase
  .initialize() // Inicializa o Banco
  .then(() => {
    console.log(`Banco de dados inicializado`);
  })
  .catch((err) => {
    console.error(`Erro ao inicializar o banco de dados`, err);
  });
