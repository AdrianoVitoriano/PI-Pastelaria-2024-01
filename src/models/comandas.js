//EntitySchema é usado para criar tabelas
//se usa o new EntitySchema({}) para criar uma tabela
import { EntitySchema } from "typeorm";
/*---------------- Definição de Tabela SQL--------------*/
// CREATE TABLE comandas (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   valorTotal REAL,
//   idMesa INTEGER NOT NULL,
//   abertura DATETIME DEFAULT CURRENT_TIMESTAMP,
//   FOREIGN KEY (idMesa) REFERENCES mesas(id)
// )
/*---------------------------------------------------- */
/*----------------- Definição de Tabela ----------------*/
export const comandas = new EntitySchema({
  name: "comandas", //nome da tabela
  tableName: "comandas", //nome da tabela
  columns: {
    id: {
      type: "integer", //tipo do tipo inteiro
      primary: true, //chave primária
      generated: true, //gerado automaticamente
    },
    valorTotal: {
      type: "real", //tipo do tipo real
    },
    idMesa: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
    abertura: {
      type: "timestamp", //tipo do tipo timestamp
      default: () => "CURRENT_TIMESTAMP", //data atual
    },
  },
  //relacionamentos entre tabelas
  relations: {
    mesas: {
      target: "mesas", //nome da tabela
      type: "many-to-one", //tipo do relacionamento
      joinColumn: {
        name: "idMesa", //nome da coluna
        referencedColumnName: "id", // chave estrangeira
      },
      nullable: false, //não pode ser nulo
    },
  },
});
