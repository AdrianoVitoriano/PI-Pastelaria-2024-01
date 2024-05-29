SELECT 
    comandas.idMesa AS mesa,
    SUM(comandas.total) AS total,
    AVG(comandas.total) AS media,
    (
        SELECT usuarios.nome
        FROM pedidos
        JOIN usuarios ON pedidos.usuariosId = usuarios.id
        WHERE pedidos.comandasId = comandas.id
        GROUP BY pedidos.usuariosId
        ORDER BY SUM(pedidos.total) DESC
        LIMIT 1
    ) AS usuario_que_mais_vendeu
FROM comandas
WHERE comandas.abertura >= '2024-03-01' AND comandas.abertura <= '2024-03-31'
GROUP BY comandas.idMesa;
