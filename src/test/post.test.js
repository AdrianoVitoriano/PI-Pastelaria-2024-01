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
      "usuarioId": "554a167f-a6fb-47a0-bbef-c24f899ee43c",
      "mesaId": 1,
      "itens": [
        {
          "id": 2,
          "quantidade": 8,
          "cozinha": 0
        },
        {
          "id": 3,
          "quantidade": 5,
          "cozinha": 1
        }
      ]
    });

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