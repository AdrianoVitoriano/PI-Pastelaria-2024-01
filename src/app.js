import express, { Router } from "express"; // Importa o Express
import { dataBase } from "./ormconfig.js";
import { router } from "./routes.js";
const app = express(); // Atribui o express() a constante app
const port = 3000; // Defini a porta onde a API ficará rodando
app.use(express.json()); // Permite que a API receba requisições no formato JSON
app.use(router);

app.listen(port, () => {
  console.clear();
  console.log(`API executando na porta ${port}`);
  console.log(dataBase.isInitialized); // Inicializa o banco de dados
});
