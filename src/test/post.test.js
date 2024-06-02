import { test, run } from 'vitest';
import request from 'supertest';
import app from '../app.js';

/*----------Rota post mesa----------*/
test('POST /mesas cria uma nova mesa', async () => {
  const response = await request(app)
    .post('/mesas')
    .send({
      "localizacao": "perto da janela norte"
    });

  if (response.status === 200 && response.body) {
    console.log('Teste passou: POST /mesas criou uma nova mesa');
  } else {
    throw new Error('Teste falhou: POST /mesas não criou uma nova mesa');
  }
});
/*----------Rota post pedido----------*/
test('POST /pedidos cria um novo pedido', async () => {
  const response = await request(app)
    .post('/pedidos')
    .send({
      "idUsuario": "c3edeca7-3ff3-4b71-aace-6385a6da73ef",
      "idMesa": 1,
      "itens": [
        {
          "id": 1,
          "quantidade": 5,
          "cozinha": 0
        },
        {
          "id": 1,
          "quantidade": 6,
          "cozinha": 1
        }
      ]
    }
    );

  if (response.status === 200 || response.status === 201) {
    console.log('Teste passou: POST /pedidos criou um novo pedido');
  } else {
    throw new Error('Teste falhou: POST /pedidos não criou um novo pedido');
  }
});
/*----------Rota post usuario----------*/
test('POST /usuarios cria um novo usuario', async () => {
  const response = await request(app)
    .post('/usuarios')
    .send({
      "nome": "JpFTaQLW",
      "cargo": 42,
      "email": "JpFTaQLW@example.com",
      "cpf": 97624857642,
      "senha": "vN2g1sHg#W"
    });

  if (response.status === 200 || response.status === 201) {
    console.log('Teste passou: POST /usuarios criou um novo usuario');
  } else {
    throw new Error('Teste falhou: POST /usuarios não criou um novo usuario');
  }
})
/*----------Rota post tipoitem----------*/
test('POST /tipoitens cria um novo tipo de item', async () => {
  const response = await request(app)
    .post('/tipoitens')
    .send({
      "nome": "assado",
    });

  if (response.status === 200 || response.status === 201) {
    console.log('Teste passou: POST /tipositens criou um novo tipo de item');
  } else {
    throw new Error('Teste falhou: POST /tipositens não criou um novo tipo de item');
  }
})
/*----------Rota post item----------*/
test('POST /itens cria um novo item', async () => {
  const response = await request(app)
    .post('/itens')
    .send({
      "nome": "chocolate",
      "preco": 10,
      "idTipo": 1
    });

  if (response.status === 200 || response.status === 201) {
    console.log('Teste passou: POST /itens criou um novo item');
  } else {
    throw new Error('Teste falhou: POST /itens não criou um novo item');
  }
});
