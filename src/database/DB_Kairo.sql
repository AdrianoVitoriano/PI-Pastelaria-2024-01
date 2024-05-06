CREATE TABLE tipos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
    -- 1. Bebidas Alcoólicas--
    -- 2. Bebidas Sem Álcool--
    -- 3. Doces--
    -- 4. Salgados Assados--
    -- 5. Salgados Fritos--
);

CREATE TABLE mesas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    localizacao TEXT
);

CREATE TABLE produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    idTipo INTEGER NOT NULL,
    FOREIGN KEY (idTipo) REFERENCES tipos(id)
);

CREATE TABLE funcionarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cargo INTEGER NOT NULL,
    email TEXT NOT NULL,
    cpf TEXT NOT NULL, 
    senha TEXT NOT NULL
);

CREATE TABLE comandas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    valorTotal REAL NOT NULL,
    idMesa INTEGER NOT NULL,
    abertura DATETIME DEFAULT CURRENT_TIMESTAMP,
    aberta BOOLEAN DEFAULT 1,
    FOREIGN KEY (idMesa) REFERENCES mesas(id)
);

CREATE TABLE pedidos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idFuncionario INTEGER NOT NULL,
    idMesa INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (idFuncionario) REFERENCES funcionarios(id),
    FOREIGN KEY (idMesa) REFERENCES mesas(id)
);

CREATE TABLE descricaoPedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idPedido INTEGER NOT NULL,
    idProduto INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (idPedido) REFERENCES pedidos(id),
    FOREIGN KEY (idProduto) REFERENCES produtos(id)
    -- o subtotal não pode alterar com o tempo--
);

CREATE TABLE listaPedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    idPedido INTEGER NOT NULL,
    idComanda INTEGER NOT NULL,
    FOREIGN KEY (idComanda) REFERENCES comandas(id),
    FOREIGN KEY (idPedido) REFERENCES pedidos(id)
);

CREATE TABLE produto_backup (
    id_produto INTEGER,
    nome TEXT,
    preco REAL,
    id_tipo INTEGER,
    FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

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
