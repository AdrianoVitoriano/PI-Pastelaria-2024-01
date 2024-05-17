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
      name: "usuariosId",
      type: "int",
    },
    idComanda: {
      name: "comandasId",
      type: "int",
    },
    total: {
      type: "real",
      default: 0,
    },
    dataHorario: {
      type: "text",
    },    
    finalizado: {
      type: "int",
      default: 0,
    },
  },
  relations: {
    itensPedidos: {
      type: "one-to-many",
      target: "itensPedidos", 
      inverseSide: "pedidos",
    },
    usuarios: {
      type: "many-to-one",
      target: "usuarios",
      inverseSide: "pedidos",
    },
    comandas: {
      type: "many-to-one",
      target: "comandas",
      inverseSide: "pedidos"
    },
    cozinhas:{
      type: "one-to-many",
      target:"cozinhas",
      inverseSide:"pedidos"
    },
  },
});
