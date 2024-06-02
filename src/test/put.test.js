import { test, run } from 'vitest';
import request from 'supertest';
import app from '../app.js';

/*----------Rota put comanda----------*/
test('PUT /comandas/1 atualiza uma comanda', async () => {
  const response = await request(app)
    .put('/comandas/1')
    .send({
      "status": 0
    });
  if (response.status === 200 && response.body) {
    console.log('Teste passou: PUT /comandas/1 atualizou uma comanda');
  } else {
    throw new Error('Teste falhou: PUT /comandas/1 não atualizou uma comanda');
  }
});
/*----------Rota put mesa----------*/
test('PUT /mesas/1 atualiza uma mesa', async () => {
  const response = await request(app)
    .put('/mesas/1')
    .send({
      "localizacao": "perto da janela norte"
    });
  if (response.status === 200 && response.body) {
    console.log('Teste passou: PUT /mesas/1 atualizou uma mesa');
  } else {
    throw new Error('Teste falhou: PUT /mesas/1 não atualizou uma mesa');
  }
});
/*----------Rota put item----------*/
test('PUT /itens/1 atualiza um item', async () => {
  const response = await request(app)
    .put('/itens/1')
    .send({
      "nome": "Pastel",
      "preco": 5
    });
  if (response.status === 200 && response.body) {
    console.log('Teste passou: PUT /itens/1 atualizou um item');
  } else {
    throw new Error('Teste falhou: PUT /itens/1 não atualizou um item');
  }
})
/*----------Rota put tipoitem----------*/
test('PUT /tipoitens/1 atualiza um tipo de item', async () => {
  const response = await request(app)
    .put('/tipoitens/1')
    .send({
      "nome": "cru",
    });
  if (response.status === 200 && response.body) {
    console.log('Teste passou: PUT /tipositens/1 atualizou um tipo de item');
  } else {
    throw new Error('Teste falhou: PUT /tipositens/1 não atualizou um tipo de item');
  }
})
/*----------Rota put usuario----------*/
test('PUT /usuarios/1 atualiza um usuario', async () => {
  const response = await request(app)
    .put('/usuarios/1')
    .send({
      "nome": "JpFTaQLW",
      "cargo": 20,
      "email": "JpFTaQLW@example.com",
      "cpf": 97624857642,
      "senha": "vN2g1sHg#W"
    });
  if (response.status === 200 && response.body) {
    console.log('Teste passou: PUT /usuarios/1 atualizou um usuario');
  } else {
    throw new Error('Teste falhou: PUT /usuarios/1 não atualizou um usuario');
  }
})
/*----------Rota put pedido----------*/
test('PUT /pedidos/1 atualiza um pedido', async () => {
  const response = await request(app)
    .put('/pedidos/1')
    .send({
      "finalizado": 0
    });
  if (response.status === 200 && response.body) {
    console.log('Teste passou: PUT /pedidos/1 atualizou um pedido');
  } else {
    throw new Error('Teste falhou: PUT /pedidos/1 não atualizou um pedido');
  }
});
