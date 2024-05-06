//EntitySchema é usado para criar tabelas
//se usa o new EntitySchema({}) para criar uma tabela
import { EntitySchema } from "typeorm";
/*---------------- Definição de Tabela SQL--------------*/
// CREATE TABLE listaPedidos (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   idPedido INTEGER NOT NULL,
//   idComanda INTEGER NOT NULL,
//   FOREIGN KEY (idComanda) REFERENCES comandas(id),
//   FOREIGN KEY (idPedido) REFERENCES pedidos(id)
// );
/*---------------------------------------------------- */
/*----------------- Definição de Tabela ----------------*/
export const listaPedidos = new EntitySchema({
  name: "listaPedidos", //nome da tabela
  tableName: "listaPedidos", //nome da tabela
  columns: {
    id: {
      type: "integer", //tipo do tipo inteiro
      primary: true, //chave primária
      generated: true, //gerado automaticamente
    },
    idComanda: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
    idPedido: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
  },
  //relacionamentos entre tabelas
  relations: {
    comandas: {
      target: "comandas", //nome da tabela
      type: "many-to-one", //tipo do relacionamento
      joinColumn: {
        name: "idComanda", //nome da coluna
        referencedColumnName: "id", // chave estrangeira
      },
      nullable: false, //não pode ser nulo
    },
    pedidos: {
      target: "pedidos", //nome da tabela
      type: "many-to-one", //tipo do relacionamento
      joinColumn: {
        name: "idPedido", //nome da coluna
        referencedColumnName: "id", // chave estrangeira
      },
      nullable: false, //não pode ser nulo
    },
  },
});
/*---------------------------------------------------- */
