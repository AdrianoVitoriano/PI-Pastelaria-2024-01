import { EntitySchema } from "typeorm";

export const ItensPedidos = new EntitySchema({
  name: "itens_Pedidos",
  tableName: "itens_Pedidos",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    pedido_id: {
      type: "int",
    },
    item_id: {
      type: "int",
    },
    quantidade: {
      type: "int",
    },
    cozinha: {
      type: "int",
    },
    subtotal: {
      type: "int",
    },
  },
  relations: {
    Itens: {
      type: "many-to-one",
      target: "Itens",
      inverseSide: "ItensPedidos",
    },
    Pedidos: {
      type: "many-to-one",
      target: "Pedidos",
      inverseSide: "ItensPedidos",
    },
  },

});
