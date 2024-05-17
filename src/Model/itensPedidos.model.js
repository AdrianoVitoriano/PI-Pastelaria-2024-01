import { EntitySchema } from "typeorm";

export const ItensPedidos = new EntitySchema({
  name: "itensPedidos",
  tableName: "itensPedidos",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    idPedido: {
      name: "pedidosId",
      type: "int",
    },
    idItem: {
      name: "itensId",
      type: "int",
    },
    quantidade: {
      type: "int",
    },
    cozinha: {
      type: "int",
      default: 0,
    },
    subtotal: {
      type: "real",
    },
  },
  relations: {
    itens: {
      type: "many-to-one",
      target: "itens",
      inverseSide: "itensPedidos",
    },
    pedidos: {
      type: "many-to-one",
      target: "pedidos",
      inverseSide: "itensPedidos",
    },
  },
});
