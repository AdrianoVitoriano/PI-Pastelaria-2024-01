/*--------------- Importação de Tabelas ----------------*/
import { DataSource } from "typeorm";
import { comandas } from "../models/comandas.js";
import { descricaoPedidos } from "../models/descricaoPedidos.js";
import { funcionarios } from "../models/funcionarios.js";

import { mesas } from "../models/mesas.js";
import { pedidos } from "../models/pedidos.js";
import { produtos } from "../models/produtos.js";
import { tipos } from "../models/tipos.js";
import * as path from "path"; //biblioteca para caminhos

/*--------------------------------------------------- */
/*------------ Definição do Banco de Dados ------------*/
export const dataBase = new DataSource({
  type: "sqlite", //tipo do banco
  database: "database.db", //caminho do banco
  synchronize: true, //Habilita a sincronização automática do esquema do banco de dados com os modelos de entidades definidos. Isso significa que as tabelas serão criadas automaticamente com base nos modelos fornecidos.
  entities: [
    //array de entidades
    comandas,
    descricaoPedidos,
    funcionarios,

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
