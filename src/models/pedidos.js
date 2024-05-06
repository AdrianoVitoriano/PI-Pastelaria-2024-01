//EntitySchema é usado para criar tabelas
//se usa o new EntitySchema({}) para criar uma tabela
import { EntitySchema } from "typeorm";
/*---------------- Definição de Tabela SQL--------------*/
// CREATE TABLE pedidos(
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   idFuncionario INTEGER NOT NULL,
//   idMesa INTEGER NOT NULL,
//   subtotal REAL NOT NULL,
//   FOREIGN KEY (idFuncionario) REFERENCES funcionarios(id),
//   FOREIGN KEY (idMesa) REFERENCES mesas(id)
// );
/*---------------------------------------------------- */
/*----------------- Definição de Tabela ----------------*/
export const pedidos = new EntitySchema({
  name: "pedidos", //nome da tabela
  tableName: "pedidos", //nome da tabela
  columns: {
    id: {
      type: "integer", //tipo do tipo inteiro
      primary: true, //chave primária
      generated: true, //gerado automaticamente
    },
    idFuncionario: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
    idMesa: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
    subtotal: {
      type: "real", //tipo do tipo real
      notNull: true, //nao pode ser nulo
    },
  },
  //relacionamentos entre tabelas
  relations: {
    garcoms: {
      target: "funcionarios", //nome da tabela
      type: "many-to-one", //tipo do relacionamento
      joinColumn: {
        name: "idFuncionario", //nome da coluna
        referencedColumnName: "id", // chave estrangeira
      },
      nullable: false, //não pode ser nulo
    },
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
