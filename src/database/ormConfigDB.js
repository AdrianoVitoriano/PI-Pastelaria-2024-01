/*--------------- Importação de Tabelas ----------------*/
import { DataSource } from "typeorm";
import { comandas } from "./models/comandas";
import { descricaoPedidos } from "./models/descricaoPedidos";
import { funcionarios } from "./models/funcionarios";
import { listaPedidos } from "./models/listaPedidos";
import { mesas } from "./models/mesas";
import { pedidos } from "./models/pedidos";
import { produtos } from "./models/produtos";
import { tipos } from "./models/tipos";
/*--------------------------------------------------- */
/*------------ Definição do Banco de Dados ------------*/
export const dataBase = new DataSource({
  type: "sqlite", //tipo do banco
  database: "database.db", //nome do arquivo
  synchronize: true, //Habilita a sincronização automática do esquema do banco de dados com os modelos de entidades definidos. Isso significa que as tabelas serão criadas automaticamente com base nos modelos fornecidos.
  entities: [
    //array de entidades
    comandas,
    descricaoPedidos,
    funcionarios,
    listaPedidos,
    mesas,
    pedidos,
    produtos,
    tipos,
  ],
  logging: true, // Ativa o registro de log das queries executadas no banco de dados.
});
/*---------------------------------------------------- */
/*------------------ Criação do Banco ------------------*/
dataBase
  .initialize() // Inicializa o Banco com dataBase.initialize()
  .then(() => {
    console.log(`Banco de dados inicializado`);
  }) //verifica se o banco de dados foi inicializado
  .catch((err) => {
    console.error(
      `Erro ao inicializar o banco de dados`,
      err,
    ); //exibe o erro quando o banco de dados não foi inicializado
  });
/*---------------------------------------------------- */
