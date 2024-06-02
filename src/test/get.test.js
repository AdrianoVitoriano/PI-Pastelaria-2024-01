import { test, run } from 'vitest';
import request from 'supertest';
import app from '../app.js';
/*----------Rota Vazia----------*/
test('GET /sayhi retorna status 200 e corpo "Hi!"', async () => {
  const response = await request(app).get('/sayhi');
  if (response.status === 200 && response.text === 'Hi!') {
    console.log('Teste passou: GET /sayhi retornou status 200 e corpo "Hi!"');
  } else {
    throw new Error('Teste falhou: GET /sayhi não retornou status 200 ou corpo "Hi!"');
  }
});
/*----------Rota de Comandas----------*/
test('GET /comandas retorna status 200 e um array de comandas', async () => {
  const response = await request(app).get('/comandas');
  if (response.status === 200 && Array.isArray(response.body)) {
    console.log('Teste passou: GET /comandas retornou status 200 e um array de comandas');
  } else {
    throw new Error('Teste falhou: GET /comandas não retornou status 200 ou um array de comandas');
  }
})
/*----------Rota de Mesas----------*/
test('GET /mesas retorna status 200 e um array de mesas', async () => {
  const response = await request(app).get('/mesas');
  if (response.status === 200 && Array.isArray(response.body)) {
    console.log('Teste passou: GET /mesas retornou status 200 e um array de mesas');
  } else {
    throw new Error('Teste falhou: GET /mesas não retornou status 200 ou um array de mesas');
  }
});
/*----------Rota de Itens----------*/
test('GET /itens retorna status 200 e um array de itens', async () => {
  const response = await request(app).get('/itens');
  if (response.status === 200 && Array.isArray(response.body)) {
    console.log('Teste passou: GET /itens retornou status 200 e um array de itens');
  } else {
    throw new Error('Teste falhou: GET /itens não retornou status 200 ou um array de itens');
  }
});
/*----------Rota de Pedidos----------*/
test('GET /pedidos retorna status 200 e um array de pedidos', async () => {
  const response = await request(app).get('/pedidos');
  if (response.status === 200 && Array.isArray(response.body)) {
    console.log('Teste passou: GET /pedidos retornou status 200 e um array de pedidos');
  } else {
    throw new Error('Teste falhou: GET /pedidos não retornou status 200 ou um array de pedidos');
  }
});
/*----------Rota de Usuários----------*/
test('GET /usuarios retorna status 200 e um array de usuarios', async () => {
  const response = await request(app).get('/usuarios');
  if (response.status === 200 && Array.isArray(response.body)) {
    console.log('Teste passou: GET /usuarios retornou status 200 e um array de usuarios');
  } else {
    throw new Error('Teste falhou: GET /usuarios não retornou status 200 ou um array de usuarios');
  }
});
/*----------Rota de Tipos de Itens----------*/
test('GET /tipositens retorna status 200 e um array de tipos de itens', async () => {
  const response = await request(app).get('/tipoitens');
  if (response.status === 200 && Array.isArray(response.body)) {
    console.log('Teste passou: GET /tipositens retornou status 200 e um array de tipos de itens');
  } else {
    throw new Error('Teste falhou: GET /tipositens não retornou status 200 ou um array de tipos de itens');
  }
});
/*----------Rota de Cozinha----------*/
test('GET /cozinha retorna status 200 e um array de cozinha', async () => {
  const response = await request(app).get('/cozinhas');
  if (response.status === 200 && Array.isArray(response.body)) {
    console.log('Teste passou: GET /cozinha retornou status 200 e um array de cozinha');
  } else {
    throw new Error('Teste falhou: GET /cozinha não retornou status 200 ou um array de cozinha');
  }
})
/*----------Rota de ItensPedidos----------*/
test('GET /itenspedidos retorna status 200 e um array de itenspedidos', async () => {
  const response = await request(app).get('/itenspedidos');
  if (response.status === 200 && Array.isArray(response.body)) {
    console.log('Teste passou: GET /itenspedidos retornou status 200 e um array de itenspedidos');
  } else {
    throw new Error('Teste falhou: GET /itenspedidos não retornou status 200 ou um array de itenspedidos');
  }
})