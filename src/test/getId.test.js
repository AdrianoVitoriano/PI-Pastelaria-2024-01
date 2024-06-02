import { test, run } from 'vitest';
import request from 'supertest';
import app from '../app.js';

/*----------Rota get:id comanda----------*/
test('GET /comandas/1 retorna status 200 e uma comanda', async () => {
  const response = await request(app).get('/comandas/1');
  if (response.status === 200 && response.body) {
    console.log('Teste passou: GET /comandas/1 retornou status 200 e uma comanda');
  } else {
    throw new Error('Teste falhou: GET /comandas/1 não retornou status 200 ou uma comanda');
  }
});
/*----------Rota get:id mesa----------*/
test('GET /mesas/1 retorna status 200 e uma mesa', async () => {
  const response = await request(app).get('/mesas/1');
  if (response.status === 200 && response.body) {
    console.log('Teste passou: GET /mesas/1 retornou status 200 e uma mesa');
  } else {
    throw new Error('Teste falhou: GET /mesas/1 não retornou status 200 ou uma mesa');
  }
});
/*----------Rota get:id item----------*/
test('GET /itens/1 retorna status 200 e um item', async () => {
  const response = await request(app).get('/itens/1');
  if (response.status === 200 && response.body) {
    console.log('Teste passou: GET /itens/1 retornou status 200 e um item');
  } else {
    throw new Error('Teste falhou: GET /itens/1 não retornou status 200 ou um item');
  }
});
/*----------Rota get:id pedido----------*/
test('GET /pedidos/1 retorna status 200 e um pedido', async () => {
  const response = await request(app).get('/pedidos/1');
  if (response.status === 200 && response.body) {
    console.log('Teste passou: GET /pedidos/1 retornou status 200 e um pedido');
  } else {
    throw new Error('Teste falhou: GET /pedidos/1 não retornou status 200 ou um pedido');
  }
});
/*----------Rota get:id usuario----------*/
test('GET /usuarios/1 retorna status 200 e um usuario', async () => {
  const response = await request(app).get('/usuarios/1');
  if (response.status === 200 && response.body) {
    console.log('Teste passou: GET /usuarios/1 retornou status 200 e um usuario');
  } else {
    throw new Error('Teste falhou: GET /usuarios/1 não retornou status 200 ou um usuario');
  }
});
/*----------Rota get:id tipoitem----------*/
test('GET /tipositens/1 retorna status 200 e um tipo de item', async () => {
  const response = await request(app).get('/tipoitens/1');
  if (response.status === 200 && response.body) {
    console.log('Teste passou: GET /tipositens/1 retornou status 200 e um tipo de item');
  } else {
    throw new Error('Teste falhou: GET /tipositens/1 não retornou status 200 ou um tipo de item');
  }
})
