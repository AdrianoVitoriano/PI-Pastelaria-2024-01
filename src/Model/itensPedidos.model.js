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
      type: "int",
    },
    idItem: {
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
  // relations: {
  //   Itens: {
  //     type: "many-to-one",
  //     target: "Itens",
  //     inverseSide: "ItensPedidos",
  //   },
  //   Pedidos: {
  //     type: "many-to-one",
  //     target: "Pedidos",
  //     inverseSide: "ItensPedidos",
  //   },
  // },
});
