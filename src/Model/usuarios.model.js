import { EntitySchema } from "typeorm";

export const Usuarios = new EntitySchema({
  name: "usuarios",
  tableName: "usuarios",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    nome: {
      type: "text",
    },
    email: {
      type: "text",
    },
    senha: {
      type: "text",
    },
    tipo: {
      type: "int",
    },
  },
  relations: {
    Pedidos: {
      type: "one-to-many",
      target: "Pedidos",
      inverseSide: "Usuarios",
    },
  },
});
