import { EntitySchema } from "typeorm";

export const Pedidos = new EntitySchema({
  name: "pedidos",
  tableName: "pedidos",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    total: {
      type: "int",
    },
    data_horario: {
      type: "text",
    },
    usuario_id: {
      type: "int",
    },
    mesa_id: {
      type: "int",
    },
    subtotal: {
      type: "int",
    },
  },
  relations: {
    ItensPedidos: {
      type: "one-to-many",
      target: "ItensPedidos",
      inverseSide: "Pedidos",
    },
    Usuarios: {
      type: "many-to-one",
      target: "Usuarios",
      inverseSide: "Pedidos",
    },
    Mesas: {
      type: "many-to-one",
      target: "Mesas",
      inverseSide: "Pedidos",
    },
    ComandasPedidos: {
      type: ""
    }
  }, 
});
