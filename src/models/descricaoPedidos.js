//EntitySchema é usado para criar tabelas
//se usa o new EntitySchema({}) para criar uma tabela
import { EntitySchema } from "typeorm";
/*---------------- Definição de Tabela SQL--------------*/
// CREATE TABLE descricaoPedidos (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   idPedido INTEGER NOT NULL,
//   idProduto INTEGER NOT NULL,
//   quantidade INTEGER NOT NULL,
//   subtotal REAL NOT NULL,
//   FOREIGN KEY (idPedido) REFERENCES pedidos(id),
//   FOREIGN KEY (idProduto) REFERENCES produtos(id),
//   on update no ACTION
// );
/*---------------------------------------------------- */
/*----------------- Definição de Tabela ----------------*/
export const descricaoPedidos = new EntitySchema({
  name: "descricaoPedidos", //nome da tabela
  tableName: "descricaoPedidos", //nome da tabela
  columns: {
    id: {
      type: "integer", //tipo do tipo inteiro
      primary: true, //chave primária
      generated: true, //gerado automaticamente
    },
    idPedido: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
    idProduto: {
      type: "integer", //tipo do tipo inteiro
      notNull: true, //nao pode ser nulo
    },
    quantidade: {
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
    pedidos: {
      target: "pedidos", //nome da tabela
      type: "many-to-one", //tipo do relacionamento
      joinColumn: {
        name: "idPedido", //nome da coluna
        referencedColumnName: "id", // chave estrangeira
      },
      nullable: false, //não pode ser nulo
    },
    produtos: {
      target: "produtos", //nome da tabela
      type: "many-to-one", //tipo do relacionamento
      joinColumn: {
        name: "idProduto", //nome da coluna
        referencedColumnName: "id", // chave estrangeira
      },
      nullable: false, //não pode ser nulo
    },
  },
});
/*---------------------------------------------------- */
