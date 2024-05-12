-- Este trigger atualiza o subtotal do pedido baseado nos valores adicionados em descricaoPedido --
-- O trigger é executado sempre que houver uma nova linha inserida na tabela descricaoPedido --
-- O trigger faz a soma de todos os valores da coluna subtotal e atualiza o valor da coluna subtotal na tabela pedidos --
CREATE TRIGGER atualizar_subtotal_pedido
AFTER INSERT ON descricaoPedidos
BEGIN
    UPDATE pedidos
    SET subtotal = (
        SELECT SUM(subtotal) 
        FROM descricaoPedidos 
        WHERE idPedido = NEW.idPedido
    )
    WHERE id = NEW.idPedido;
END;

-- Este trigger atualiza o campo valor_total na tabela comandas --
-- O trigger é executado sempre que uma nova linha é inserida na tabela listaPedidos --
-- Ele calcula a soma dos subtotais dos pedidos associados à comanda e atualiza o valor_total na tabela comandas --
CREATE TRIGGER atualizar_valor_total_comanda
AFTER INSERT ON listaPedidos
BEGIN
    UPDATE comandas
    SET valorTotal = (
        SELECT SUM(pedidos.subtotal)
        FROM pedidos
        INNER JOIN listaPedidos ON pedidos.id = listaPedidos.idPedido
        WHERE listaPedidos.idComanda = NEW.idComanda
    )
    WHERE id = NEW.idComanda;
END;

-- Este trigger salva as alterações feitas em produtos na tabela backup_produto --
CREATE TRIGGER backup_produto
AFTER UPDATE ON produtos
FOR EACH ROW
BEGIN
    INSERT INTO produto_backup (id_produto, nome, preco, id_tipo)
    VALUES (OLD.id, OLD.nome, OLD.preco, OLD.idTipo);
END;
