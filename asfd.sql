CREATE TABLE tipoItens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
);	
CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cargo INTEGER NOT NULL,
    email TEXT NOT NULL,
    cpf TEXT NOT NULL, 
    senha TEXT NOT NULL
);
CREATE TABLE mesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    localizacao TEXT
);
CREATE TABLE Itens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    idTipo INTEGER NOT NULL,
    FOREIGN KEY (idTipo) REFERENCES tipoItens(id)
);

CREATE TABLE comandas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    valorTotal REAL NOT NULL,
    idMesa INTEGER NOT NULL,
    abertura DATETIME DEFAULT CURRENT_TIMESTAMP,
    aberta BOOLEAN DEFAULT 1,
    FOREIGN KEY (idMesa) REFERENCES mesa(id)
);
CREATE TABLE pedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idUsuario INTEGER NOT NULL,
    idComanda INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (idComanda) REFERENCES comanda(id),
    FOREIGN KEY (idUsuario) REFERENCES usuario(id)
);
CREATE TABLE itensPedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idPedido INTEGER NOT NULL,
    idItem INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (idPedido) REFERENCES pedido(id),
    FOREIGN KEY (idItens) REFERENCES itens(id)
);
-- CREATE TRIGGER atualizar_subtotal_pedido
-- AFTER INSERT ON descricao_pedido
-- BEGIN
--     UPDATE pedido
--     SET subtotal = (
--         SELECT SUM(subtotal) 
--         FROM descricao_pedido 
--         WHERE id_pedido = NEW.id_pedido
--     )
--     WHERE id = NEW.id_pedido;
-- END;
-- CREATE TRIGGER atualizar_valor_total_comanda
-- AFTER INSERT ON lista_pedidos
-- BEGIN
--     UPDATE comanda
--     SET valor_total = (
--         SELECT SUM(pedido.subtotal)
--         FROM pedido
--         INNER JOIN lista_pedidos ON pedido.id = lista_pedidos.id_pedido
--         WHERE lista_pedidos.id_comanda = NEW.id_comanda
--     )
--     WHERE id = NEW.id_comanda;
-- END;
-- CREATE TRIGGER backup_produto
-- AFTER UPDATE ON produto
-- FOR EACH ROW
-- BEGIN
--     INSERT INTO produto_backup (id_produto, nome, preco, id_tipo)
--     VALUES (OLD.id, OLD.nome, OLD.preco, OLD.id_tipo);
-- END;
