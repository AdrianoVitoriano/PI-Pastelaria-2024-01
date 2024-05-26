import express from "express";
import { router } from "./routes.js";
import fs from "fs";
import https from "https";
import cors from "cors";

const app = express();
const port_http = 3000;
const port_https = 3001;
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port_http, () => {
  console.clear();
  console.log(`API executando na porta ${port_http}`);
});


https
  .createServer(
    {
      cert: fs.readFileSync("./src/SSL/code.crt"),
      key: fs.readFileSync("./src/SSL/code.key"),
    },
    app
  )
  .listen(port_https, () => console.log(`API executando na porta ${port_https}`));
//https://localhost:3001
//http://localhost:3000