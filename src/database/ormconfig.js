import { DataSource } from 'typeorm'

const dataBase = new DataSource({
  type: 'sqlite',
  database: './src/database/db.sqlite',
  entities: [
    './src/models/task.js'
  ],
  logging: true, // log das queries executadas
  synchronize: true // cria as tabelas automaticamente
})

dataBase.initialize()
  .then(() => {
    console.log(`Banco de dados inicializado`);
  })
  .catch((err) => {
    console.error(`Erro ao inicializar o banco de dados`, err);
  })

export default dataBase