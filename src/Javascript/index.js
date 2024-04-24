import express from "express";  // Importa o Express
import dataBase from '../database/ormconfig.js'
import {mesa} from '../models/task.js'

const app = express();  // Atribui o express() a constante app
const port = 3000;  // Defini a porta onde a API ficará rodando

app.get("/sayHi", (req, res) => {
  res.send("Hi!");
});
app.get("/mesas", async function (req, res){
  const data =  await dataBase.getRepository(mesa).find()
  res.json(data);
});

app.listen(port, () => {
  console.log(`API executando na porta ${port}`)
  console.log(`Banco de dados`, dataBase.isInitialized ? 'inicializado' : 'não inicializado')
})