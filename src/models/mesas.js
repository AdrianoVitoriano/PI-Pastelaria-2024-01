//EntitySchema é usado para criar tabelas
//se usa o new EntitySchema({}) para criar uma tabela
import { EntitySchema } from "typeorm";
/*---------------- Definição de Tabela SQL--------------*/
// CREATE TABLE mesas (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   localizacao TEXT
// );
/*---------------------------------------------------- */
/*----------------- Definição de Tabela ----------------*/
export const mesas = new EntitySchema({
  name: "mesas", //nome da tabela
  tableName: "mesas", //nome da tabela
  columns: {
    id: {
      type: "integer", //tipo do tipo inteiro
      primary: true, //chave primária
      generated: true, //gerado automaticamente
    },
    localizacao: {
      type: "text", //tipo do tipo texto
    },
  },
});
