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
    posicao: {
      type: "text",
    },
  },
  // relations: {
    Pedidos: {
      type: "one-to-many",
      target: "Pedidos",
      inverseSide: "Mesas",
    },  
  //   Comandas: {
  //     type: "one-to-many",
  //     target: "Mesas",
  //     inverseSide: "mesas",
  //   }, 
  // },  
});