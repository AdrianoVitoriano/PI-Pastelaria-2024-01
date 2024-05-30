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
    ativo: {
      type: "int",
      default: 1,
    },
  },
  relations: {
    itens: {
      type: "one-to-many",
      target: "itens",
      inverseSide: "tipoItens",
    },
  },
});
