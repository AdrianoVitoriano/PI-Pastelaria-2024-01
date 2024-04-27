import { EntitySchema } from "typeorm";

export const Comandas = new EntitySchema({
  name: "comandas",
  tableName: "comandas",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    mesa_id: {
      type: "int",
    },
    total: {
      type: "int",
    },
    status: {
      type: "int",
    },
  },
  relations: {
  // Mesas: {
  //   type: "many-to-one",
  //   target: "Comandas",
  //   inverseSide: "comandas",
  // }, 
},
});
