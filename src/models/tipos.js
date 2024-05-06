//EntitySchema é usado para criar tabelas
//se usa o new EntitySchema({}) para criar uma tabela
import { EntitySchema } from "typeorm";
/*---------------- Definição de Tabela SQL--------------*/
// CREATE TABLE tipos (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   nome TEXT NOT NULL
//   -- 1. Bebidas Alcoólicas--
//   -- 2. Bebidas Sem Álcool--
//   -- 3. Doces--
//   -- 4. Salgados Assados--
//   -- 5. Salgados Fritos--
// );
/*---------------------------------------------------- */
/*----------------- Definição de Tabela ----------------*/
export const tipos = new EntitySchema({
  name: "tipos", //nome da tabela
  tableName: "tipos", //nome da tabela
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
  },
});
