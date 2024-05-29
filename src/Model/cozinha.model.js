
import { EntitySchema } from "typeorm";

export const Cozinhas = new EntitySchema({
  name: "cozinhas",
  tableName: "cozinhas",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    idPedido:{
      name: "pedidosId",
      type: "int",  
    },
    idItem:{
      name:"itensId",
      type: "int",  
    },
    quantidade:{
        type: "int",  
      },
    produzido: {
      type: "int",
      default:0,
    }
  },
  relations: {
    itens: {
      type: "many-to-one",
      target: "itens",
      inverseSide: "cozinhas",
    },
    pedidos:{
      type: "many-to-one",
      target:"pedidos",
      inverseSide:"cozinhas",
      joinColumn: true,
      onDelete: 'CASCADE'
    },
  },
});
