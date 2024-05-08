import { EntitySchema } from "typeorm";

export const TipoItens = new EntitySchema({
  name: "tipoItens",
  tableName: "tipoItens",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    nome: {
      type: "text",
    },

  },
  // relations: {
  //   Itens: {
  //     type: "one-to-many",
  //     target: "Itens",
  //     inverseSide: "Categorias",
  //   },
  // },
}); 