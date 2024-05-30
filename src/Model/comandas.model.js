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
    data: {
      type: "int",
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
      inverseSide: "comandas",
      joinColumn: true,
    },
    pedidos: {
      type: "one-to-many",
      target: "pedidos",
      inverseSide: "comandas",
    }
  },
});
