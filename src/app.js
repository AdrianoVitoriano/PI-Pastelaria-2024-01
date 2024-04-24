import express from "express"; // Importa o Express
import { dataBase } from "./ormconfig.js";
import { mesas } from "./entity.js";
import {insert, updateById, deleteById}from "./crud.js"

const app = express(); // Atribui o express() a constante app
const port = 3000; // Defini a porta onde a API ficará rodando

app.use(express.json()); // Permite que a API receba requisições no formato JSON
app.get("/sayHi", (req, res) => {
  // Rota teste que retorna "Hi!"
  res.send("Hi!");
});
app.get("/mesas", async function (req, res) {
  // Rota que retorna todas as mesas da tabela "mesas"
  const data = await dataBase.getRepository(mesas).find(); // Atribui a constante data todas as mesas da tabela "mesas"
  res.json(data); // Retorna as mesas em formato JSON
});
app.post("/mesas", async function (req, res) {
  // Rota que insere uma nova mesa na tabela "mesas"
  console.log(req.body);
  res.json(await insert(req,mesas))
});
app.put("/mesas", async function (req, res) {
  // Rota que altera uma mesa na tabela "mesas"
  console.log(req.body);
  res.json(await updateById(req,mesas))
});
app.delete("/mesas", async function (req, res) {
  // Rota que altera uma mesa na tabela "mesas"
  console.log(req.body);
  res.json(await deleteById(req,mesas))
});
app.listen(port, () => {
  console.clear();
  console.log(`API executando na porta ${port}`);
  console.log(dataBase.isInitialized); // Inicializa o banco de dados
}); 
