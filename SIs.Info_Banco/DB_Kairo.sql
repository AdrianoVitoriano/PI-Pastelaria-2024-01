CREATE TABLE produto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    tipo INTEGER NOT NULL
    --os tipos serão listados da seguinteforma--
    -- 1. Bebida Alcoolica--
    -- 2. Bebida Sem Alcool--
    -- 3.Doce--
    -- 4.Salgado Assado--
    -- 5.Salgado Frito--
);
CREATE TABLE produto_backup (
    id_produto INTEGER NOT NULL,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    tipo INTEGER NOT NULL,
    Foreign Key (id) REFERENCES produto(id)
);

CREATE TABLE funcionario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cargo INTEGER NOT NULL,
    email TEXT NOT NULL,
    cpf TEXT NOT NULL, 
    senha TEXT NOT NULL
);

CREATE TABLE mesa (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    localizacao TEXT
);

CREATE TABLE comanda (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    valor_total REAL NOT NULL,
    id_mesa INTEGER NOT NULL,
    quantidade_pessoas INTEGER NOT NULL,
    abertura DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_mesa) REFERENCES mesa(id)
);

CREATE TABLE pedido (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_garcom INTEGER NOT NULL,
    id_mesa INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (id_garcom) REFERENCES funcionario(id),
    FOREIGN KEY (id_mesa) REFERENCES mesa(id)
);

CREATE TABLE descricao_pedido (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_pedido INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id),
    FOREIGN KEY (id_produto) REFERENCES produto(id)
);

CREATE TABLE lista_pedidos (
    id INTEGER NOT NULL,
    id_pedido INTEGER NOT NULL,
    id_comanda INTEGER NOT NULL,
    FOREIGN KEY (id_comanda) REFERENCES comanda(id),
    FOREIGN KEY (id_pedido) REFERENCES pedido(id)
);

-- Este trigger atualiza o subtotal do pedido baseado nos valores adicionados em descricao_pedido --
-- O trigger é executado sempre que houver uma nova linha inserida na tabela descricao_pedido --
-- O trigger faz a soma de todos os valores da coluna subtotal e atualiza o valor da coluna subtotal na tabela pedido --
CREATE TRIGGER atualizar_subtotal_pedido
AFTER INSERT ON descricao_pedido
BEGIN
    UPDATE pedido
    SET subtotal = (
        SELECT SUM(subtotal) 
        FROM descricao_pedido 
        WHERE id_pedido = NEW.id_pedido
    )
    WHERE id = NEW.id_pedido;
END;
-- Este trigger atualiza o campo valor_total na tabela comanda --
-- O trigger é executado sempre que uma nova linha é inserida na tabela lista_pedidos --
-- Ele calcula a soma dos subtotais dos pedidos associados à comanda e atualiza o valor_total na tabela comanda --
CREATE TRIGGER atualizar_valor_total_comanda
AFTER INSERT ON lista_pedidos
BEGIN
    UPDATE comanda
    SET valor_total = (
        SELECT SUM(pedido.subtotal)
        FROM pedido
        INNER JOIN lista_pedidos ON pedido.id = lista_pedidos.id_pedido
        WHERE lista_pedidos.id_comanda = NEW.id_comanda
    )
    WHERE id = NEW.id_comanda;
END;
-- Este trigger salva as alterações feitas em produtos na tabela backup_produto --
CREATE TRIGGER backup_produto
AFTER UPDATE ON produto
FOR EACH ROW
BEGIN
    INSERT INTO produto_backup (id_produto, nome, preco, tipo)
    VALUES (OLD.id, OLD.nome, OLD.preco, OLD.tipo);
END;


