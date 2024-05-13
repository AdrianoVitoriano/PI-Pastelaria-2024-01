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
//   Mesa: {
//     type: "many-to-one",
//     target: "Mesas",
//     inverseSide:"Comanda",
//     JoinColumn: true,
//   }, 
//   Pedidos: {
//     type: "one-to-many",
//     target: "Pedidos",
//     inverseSide: "Comandas",
//   }
// },
});
