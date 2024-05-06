//EntitySchema é usado para criar tabelas
//se usa o new EntitySchema({}) para criar uma tabela
import { EntitySchema } from "typeorm";
/*---------------- Definição de Tabela SQL--------------*/
// CREATE TABLE produtos (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   nome TEXT NOT NULL,
//   preco REAL NOT NULL,
//   idTipo INTEGER NOT NULL,
//   FOREIGN KEY (idTipo) REFERENCES tipos(id)
// );
/*---------------------------------------------------- */
/*----------------- Definição de Tabela ----------------*/
export const produtos = new EntitySchema({
  name: "produtos", //nome da tabela
  tableName: "produtos", //nome da tabela
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
    preco: {
      type: "real", //tipo do tipo real
      notNull: true, //nao pode ser nulo
    },
    idTipo: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
  },
  //relacionamentos entre tabelas
  relations: {
    tipos: {
      target: "tipos", //nome da tabela
      type: "many-to-one", //tipo do relacionamento
      joinColumn: {
        name: "idTipo", //nome da coluna
        referencedColumnName: "id", // chave estrangeira
      },
      nullable: false, //não pode ser nulo
    },
  },
});
