//EntitySchema é usado para criar tabelas
//se usa o new EntitySchema({}) para criar uma tabela
import { EntitySchema } from "typeorm";
/*---------------- Definição de Tabela SQL--------------*/
// CREATE TABLE funcionarios (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   nome TEXT NOT NULL,
//   cargo INTEGER NOT NULL,
//   email TEXT NOT NULL,
//   cpf TEXT NOT NULL,
//   senha TEXT NOT NULL
// );
/*---------------------------------------------------- */
/*----------------- Definição de Tabela ----------------*/
export const funcionarios = new EntitySchema({
  name: "funcionarios", //nome da tabela
  tableName: "funcionarios", //nome da tabela
  columns: {
    id: {
      type: "integer", //tipo do tipo inteiro
      primary: true, //chave primária
      generated: true, //gerado automaticamente
    },
    nome: {
      type: "text", //tipo do tipo texto
      notNull: true, //nao pode ser nulo
    },
    cargo: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
    email: {
      type: "text", //tipo do tipo texto
      notNull: true, //nao pode ser nulo
    },
  },
});
//tabela sem relacionamentos
/*---------------------------------------------------- */
