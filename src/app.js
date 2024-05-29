import express from "express"; // Importa o Express
import { router } from "./routes.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express(); // Atribui o express() a constante app
const PORThttp = 3000; // Defini a porta onde a API ficará rodando
const PORThttps = 3001;
app.use(express.json()); // Permite que a API receba requisições no formato JSON
app.use(cors()); // reduz erros na consulta
app.use(router); // Busca as rotas no arquivo routes.js

app.listen(PORThttp, () => {
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
  .listen(PORThttps, () => console.log("Rodando em https."));
//http://localhost:3000
//https://localhost:3001