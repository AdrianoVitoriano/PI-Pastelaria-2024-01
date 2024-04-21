/** @format */

const { DataTypes, Sequelize } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite", // Tipo de banco de dados (neste caso, SQLite)
  storage:
    "C:UserskairoOneDriveÁrea de TrabalhoPI PastelariaSIs.Info_BancoBancoSQLITE", // Caminho para o arquivo do banco de dados
}); // Configuração da conexão com o banco de dados
// a função sequelize.define() permite criar um novo modelo de dados (tabela)
//sequilize.define() primeiro define o nome da tabela, depois um objeto referenciando as colunas
const Produto = sequelize.define("produto", {
  nome: {
    //type define o tipo de dado
    //DataTypes.<tipo> define o tipo de dado da coluna
    type: DataTypes.STRING,
    //allowNull define se o campo pode ou não ser nulo
    //false define que o campo não pode ser nulo
    allowNull: false,
    //define o campo como unico
    unique: true,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
/*os tipos serão listados da seguinteforma
    1. Bebida Alcoolica
    2. Bebida Sem Alcool
    3.Doce
    4.Salgado Assado
    5.Salgado Frito*/
// Função para criar um novo produto
//async permite que a operação seja concluída antes de continuar
async function criarProduto(nome, preco, tipo) {
  if (tipo == "Bedida Alcoolica") {
    tipo = 1;
  } else if (tipo == "Bebida Sem Alcool") {
    tipo = 2;
  } else if (tipo == "Doce") {
    tipo = 3;
  } else if (tipo == "Salgado Assado") {
    tipo = 4;
  } else if (tipo == "Salgado Frito") {
    tipo = 5;
  }
  try {
    //Produto.create() permite criar um novo registro na tabela, pois chama o metodo create do sequelize no objeto Produto
    //awith espera que a operação seja concluída antes de continuar
    const novoProduto = await Produto.create({
      nome: nome,
      preco: preco,
      tipo: tipo,
    });
    console.log("Novo produto criado:", novoProduto.toJSON());
    return novoProduto;
  } catch (error) {
    console.error("Erro ao criar produto:", error);
    //throw serve para lançar um erro
    throw error;
  }
}
// Exemplo de uso da função
//async permite que a operação seja concluída antes de continuar
(async () => {
  try {
    await sequelize.sync(); // Sincronizar o modelo com o banco de dados
    console.log("Tabela Produto sincronizada");

    await criarProduto("Pastel de Carne", 5, 7);
  } catch (error) {
    console.error("Erro:", error);
  }
})();
