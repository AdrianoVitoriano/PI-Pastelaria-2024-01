import { EntitySchema } from "typeorm";

export const Itens = new EntitySchema({
  name: "itens",
  tableName: "itens",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    nome: {
      type: "text",
    },
    preco: {
      type: "real",
    },
    idTipo: {
      type: "int",
    },
  },
//   relations: {
//     Categorias: {
//         type: "many-to-one",
//         target: "Categorias",
//         inverseSide: "Itens"
//     },
//     ItensPedidos: {
//       type: "one-to-many",
//       target: "ItensPedidos",
//       inverseSide: "Itens"
//   },
// }, 
  
});
