import { EntitySchema, JoinColumn } from "typeorm";

export const Comandas = new EntitySchema({
  name: "comandas",
  tableName: "comandas",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    total: {
      type: "real",
      default: 0,
    },
    idMesa: {
      name: "mesasId",
      type: "int",
    },
    abertura: {
      type: "text",
    },
    aberta: {
      type: "int",
      default: 1,
    },
  },
  relations: {
  mesas: {
    type: "many-to-one",
    target: "mesas",
    inverseSide:"comandas",
  }, 
  pedidos: {
    type: "one-to-many",
    target: "pedidos",
    inverseSide: "comandas",
  }
},
});
