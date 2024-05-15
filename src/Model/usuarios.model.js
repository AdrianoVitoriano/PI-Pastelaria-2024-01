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
    cargo: {
      type: "int",
    },
    email: {
      type: "text",
    },
    cpf: {
      type: "int",
    },
    senha: {
      type: "text",
    },
  },
  // relations: {
  //   Pedidos: {
  //     type: "one-to-many",
  //     target: "Pedidos",
  //     inverseSide: "Usuarios",
  //   },
  // },
});
