import { EntitySchema } from "typeorm";

export const Categorias = new EntitySchema({
  name: "categorias",
  tableName: "categorias",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    categoria: {
      type: "text",
    },
    descricao: {
      type: "text",
    },
  },
  relations: {
    Itens: {
      type: "one-to-many",
      target: "Itens",
      inverseSide: "Categorias",
    },
  },
}); 