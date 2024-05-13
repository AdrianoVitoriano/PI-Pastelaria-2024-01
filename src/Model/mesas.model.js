import { EntitySchema } from "typeorm";

export const Mesas = new EntitySchema({
  name: "mesas",
  tableName: "mesas",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    }, 
    localizacao: {
      type: "text",
    },
  },
  // relations: {
  //   Comanda: {
  //     type: "one-to-many",
  //     target: "Comandas",
  //     inverseSide:"Mesa"
  //   }, 
  // },  
});