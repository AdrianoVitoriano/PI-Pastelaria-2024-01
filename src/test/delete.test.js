import { test, run } from 'vitest';
import request from 'supertest';
import app from '../app.js';

/*----------Rota delete pedidos----------*/
test('DELETE /pedidos/1 retorna status 204', async () => {
  const response = await request(app).delete('/pedidos/1');
  if (response.status === 204) {
    console.log('Teste passou: DELETE /pedidos/1 retornou status 204');
  } else {
    throw new Error('Teste falhou: DELETE /pedidos/1 não retornou status 204');
  }
});
