const express = require("express");
//express() é uma função que retorna uma instância de aplicação Express.js.
const app = express();
//.get(): é um método do objeto app que é usado para definir uma rota HTTP que responde a requisições GET
app.get(
  "/",
  function (
    req,
    res
  ) //function (req, res) {}: é a função de callback que é executada quando a rota é acionada por uma requisição GET. Ela recebe dois parâmetros: req (abreviação de "request") que representa o objeto de requisição HTTP enviado pelo cliente, e res (abreviação de "response") que representa o objeto de resposta HTTP que será enviado de volta para o cliente.
  {}
);
