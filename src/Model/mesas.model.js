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
    ativo: {
      type: "int",
      default: 1,
    },
  },
  relations: {
    comandas: {
      type: "one-to-many",
      target: "comandas",
      inverseSide:"mesas",
    },
  },  
});