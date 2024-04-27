import { EntitySchema } from "typeorm";

export const ComandasPedidos = new EntitySchema({
  name: "comandasPedidos",
  tableName: "comandasPedidos",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    comanda_id: {
      type: "int",
    },
    pedido_id: {
      type: "int",
    },
  },
  relations: {
    ItensPedidos: {
      type: "one-to-many",
      target: "ItensPedidos",
      inverseSide: "Pedidos",
    },
  }, 
});