import { DataSource } from "typeorm";
import { mesas } from "./entity.js";

export const dataBase = new DataSource({
  type: "sqlite",
  database: "./database.db",
  entities: [mesas],
  logging: true, // log das queries executadas
  synchronize: true, // cria as tabelas automaticamente
});

dataBase
  .initialize()
  .then(() => {
    console.log(`Banco de dados inicializado`);
  })
  .catch((err) => {
    console.error(`Erro ao inicializar o banco de dados`, err);
  });

