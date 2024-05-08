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
    valorTotal: {
      type: "real",
      default: 0,
    },
    idMesa: {
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
//   relations: {
//   Mesas: {
//     type: "many-to-one",
//     target: "Comandas",
//     inverseSide: "comandas",
//   }, 
// },
});
