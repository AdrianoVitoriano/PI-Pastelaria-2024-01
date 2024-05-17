import { EntitySchema } from "typeorm";

export const Itens = new EntitySchema({
  name: "itens",
  tableName: "itens",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    nome: {
      type: "text",
    },
    preco: {
      type: "real",
    },
    idTipo: {
      name: "tipoItensId",
      type: "int",
    },
  },
  relations: {
    tipoItens: {
      type: "many-to-one",
      target: "tipoItens",
      inverseSide: "itens",
    },
    itensPedidos: {
      type: "one-to-many",
      target: "itensPedidos",
      inverseSide: "itens",
    },
    cozinhas: {
      type: "one-to-many",
      target: "cozinhas",
      inverseSide: "itens",
    },
  },
});
