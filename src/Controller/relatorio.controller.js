import { dataBase } from "../ormconfig.js";

export async function totalPorUsuario(req, res) {
  try {
    const query = `
    SELECT 
    p.Id AS Pedido_Id,
    u.nome AS Nome_Usuário,
    p.subtotal AS Subtotal
FROM
    pedidos p
INNER JOIN usuarios u on p.usuario_id = u.id
    `;

    const result = await dataBase.query(query);

    return res.json(result);
  } catch (error) {
    console.error("Erro ao obter relatório de vendas:", error);
    return res.json(null);
  }
}

export async function totalPorMesa(req, res) {
  try {
    const query = `
    SELECT 
    p.Id AS Pedido_Id,
    m.id AS Nº_Mesa,
    m.posicao AS Posição_Mesa,
    p.subtotal AS Subtotal
FROM
    pedidos p
INNER JOIN mesas m on p.mesa_id = m.id
    `;

    const result = await dataBase.query(query);

    return res.json(result);
  } catch (error) {
    console.error("Erro ao obter relatório de vendas:", error);
    return res.json(null);
  }
}