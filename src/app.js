import express from "express"; // Importa o Express
import { router } from "./routes.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express(); // Atribui o express() a constante app
const port = 3000; // Defini a porta onde a API ficará rodando
app.use(express.json()); // Permite que a API receba requisições no formato JSON
app.use(cors()); // reduz erros na consulta
app.use(router); // Busca as rotas no arquivo routes.js

app.listen(port, ()=>{
  console.clear();
  console.log(`API executando na porta ${port}`);
});

https
  .createServer(
    {
      cert: fs.readFileSync("./src/SSL/code.crt"),
      key: fs.readFileSync("./src/SSL/code.key"),
    },
    app
  )
  .listen(3001, () => console.log("Rodando em https."));
