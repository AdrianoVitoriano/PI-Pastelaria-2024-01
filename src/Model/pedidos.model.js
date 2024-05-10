import { EntitySchema } from "typeorm";
const data = new Date()

export const Pedidos = new EntitySchema({
  name: "pedidos",
  tableName: "pedidos",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    idUsuario: {
      type: "int",
    },
    idComanda: {
      type: "int",
    },
    total: {
      type: "real",
      default: 0,
    },
    dataHorario: {
      type: "text",
    },
  },
  // relations: {
  //   ItensPedidos: {
  //     type: "one-to-many",
  //     target: "ItensPedidos", 
  //     inverseSide: "Pedidos",
  //   },
  //   Usuarios: {
  //     type: "many-to-one",
  //     target: "Usuarios",
  //     inverseSide: "Pedidos",
  //   },
  //   Mesas: {
  //     type: "many-to-one", 
  //     target: "Mesas",
  //     inverseSide: "Pedidos",
  //   },
  //   ComandasPedidos: {
  //     type: ""
  //   }
  // },
});
