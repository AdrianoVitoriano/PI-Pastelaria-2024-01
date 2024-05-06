import express from "express"; //importa o express para criar o servidor e definir rotas
import cors from "cors"; //importa o cors para permitir acesso de qualquer origem
import { router } from "./routes/router.js"; //importa as rotas do router de produtos_router.js
import fs from "fs"; //importa o fs para ler o certificado
import https from "https"; // importa o https para ler o certificado
/*----------------------------------------------------- */
const app = express(); //cria o servidor
app.use(cors()); //usa o cors para permitir acesso de qualquer origem
app.use(express.json()); //usa o express para ler o json
app.use(router); //usa as rotas do router
/*---------------------------------------------------- */
const door = 3000; //define a porta do servidor
const door2 = 3001; //define a porta do servidor
/*---------------------------------------------------- */
//servidor http
app.listen(door, () =>
  console.log(`Servidor Rodando na porta ${door}`),
); //inicia o servidor na porta da variável door
//servidor https
https
  .createServer(
    {
      key: fs.readFileSync("src/SSL/code.key"),
      cert: fs.readFileSync("src/SSL/code.crt"),
    },
    app,
  )
  .listen(door2, () =>
    console.log(`Servidor Rodando na porta ${door2}`),
  );
/*---------------------------------------------------- */
//nodemon src/app.js
