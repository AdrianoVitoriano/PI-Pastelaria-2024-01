import express from "express";
import { router } from "./routes.js";
import fs from "fs";
import https from "https";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import swaggerFile from "./swagger_output.json" assert { type: "json" }; //se reclamar do assert troca para with

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());
app.use(router);

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

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
