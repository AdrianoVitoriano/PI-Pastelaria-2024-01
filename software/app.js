{
  // imoprta o express
  const express = require("express");
  const app = express();
  const port = 3000;
}
{
  //Requisições
  app.get("/", (req, res) => {
    res.send("Olá, mundo!");
  });
}
{
  //faz a abertura do servidor
  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });
}
