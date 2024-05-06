CREATE TABLE produtos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    id_tipo INTEGER NOT NULL,
    FOREIGN KEY (id_tipo) REFERENCES tipos(id)
);

CREATE TABLE tipos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
    -- 1. Bebidas Alcoólicas--
    -- 2. Bebidas Sem Álcool--
    -- 3. Doces--
    -- 4. Salgados Assados--
    -- 5. Salgados Fritos--
);

CREATE TABLE funcionarios (
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

CREATE TABLE comandas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    valor_total REAL NOT NULL,
    id_mesa INTEGER NOT NULL,
    quantidade_pessoas INTEGER NOT NULL,
    abertura DATETIME DEFAULT CURRENT_TIMESTAMP,
    aberta BOOLEAN DEFAULT 1,
    FOREIGN KEY (id_mesa) REFERENCES mesas(id)
);

CREATE TABLE pedidos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_garcom INTEGER NOT NULL,
    id_mesa INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (id_garcom) REFERENCES funcionarios(id),
    FOREIGN KEY (id_mesa) REFERENCES mesas(id)
);

CREATE TABLE descricaoPedidos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_pedido INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id),
    FOREIGN KEY (id_produto) REFERENCES produtos(id),
    on update no ACTION
);
-- o subtotal não pode alterar com o tempo--

CREATE TABLE listaPedidos (
    id INTEGER NOT NULL,
    id_pedido INTEGER NOT NULL,
    id_comanda INTEGER NOT NULL,
    FOREIGN KEY (id_comanda) REFERENCES comandas(id),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id)
);

-- Este trigger atualiza o subtotal do pedido baseado nos valores adicionados em descricaoPedido --
-- O trigger é executado sempre que houver uma nova linha inserida na tabela descricaoPedido --
-- O trigger faz a soma de todos os valores da coluna subtotal e atualiza o valor da coluna subtotal na tabela pedidos --
CREATE TRIGGER atualizar_subtotal_pedido
AFTER INSERT ON descricaoedidos
BEGIN
    UPDATE pedidos
    SET subtotal = (
        SELECT SUM(subtotal) 
        FROM descricaoPedidos 
        WHERE id_pedido = NEW.id_pedido
    )
    WHERE id = NEW.id_pedido;
END;

-- Este trigger atualiza o campo valor_total na tabela comandas --
-- O trigger é executado sempre que uma nova linha é inserida na tabela listaPedidos --
-- Ele calcula a soma dos subtotais dos pedidos associados à comanda e atualiza o valor_total na tabela comandas --
CREATE TRIGGER atualizar_valor_total_comanda
AFTER INSERT ON listaPedidos
BEGIN
    UPDATE comandas
    SET valor_total = (
        SELECT SUM(pedidos.subtotal)
        FROM pedidos
        INNER JOIN listaPedidos ON pedidos.id = listaPedidos.id_pedido
        WHERE listaPedidos.id_comanda = NEW.id_comanda
    )
    WHERE id = NEW.id_comanda;
END;

-- Este trigger salva as alterações feitas em produtos na tabela backup_produto --
CREATE TRIGGER backup_produto
AFTER UPDATE ON produtos
FOR EACH ROW
BEGIN
    INSERT INTO produto_backup (id_produto, nome, preco, id_tipo)
    VALUES (OLD.id, OLD.nome, OLD.preco, OLD.id_tipo);
END;
