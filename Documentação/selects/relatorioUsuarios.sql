SELECT 
    usuarios.nome AS nome_usuario,
    usuarios.id AS id_usuario,
    SUM(pedidos.total) AS total_vendas,
    (
        SELECT itens.nome
        FROM pedidos
        JOIN itensPedidos ON pedidos.id = itensPedidos.pedidosId
        JOIN itens ON itensPedidos.itensId = itens.id
        WHERE pedidos.usuariosId = usuarios.id
        GROUP BY pedidos.comandasId
        ORDER BY COUNT(*) DESC
        LIMIT 1
    ) AS produto_mais_vendido,
    AVG(
        (
            SELECT COUNT(*)
            FROM pedidos AS p3
            WHERE p3.usuariosId = usuarios.id
            GROUP BY p3.comandasId
        )
    ) AS media_vendas_por_mesa
FROM usuarios
LEFT JOIN pedidos ON usuarios.id = pedidos.usuariosId
WHERE pedidos.comandasId IN (
    SELECT id
    FROM comandas
    WHERE abertura >= '2024-01-01' AND abertura <= '2024-05-31'
)
GROUP BY usuarios.id, usuarios.nome;
