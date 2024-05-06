import express from "express"; //importa o express para criar o servidor e definir rotas
import cors from "cors"; //importa o cors para permitir acesso de qualquer origem
import { router } from "./routes/router.js"; //importa as rotas do router
import fs from "fs"; //importa o fs para ler o certificado
import https from "https"; // importa o https para ler o certificado
