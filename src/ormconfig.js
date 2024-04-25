import { DataSource } from "typeorm";
import { mesas } from "./entity/mesas.js";
import { categorias } from "./entity/categorias.js";

export const dataBase = new DataSource({
  // Cria o objeto do banco de dados
  type: "sqlite", // Tipo do banco de dados
  database: "./database.db", // Caminho do banco
  entities: [mesas, categorias], // Variáveis das entidades(Tabelas) do banco.
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
