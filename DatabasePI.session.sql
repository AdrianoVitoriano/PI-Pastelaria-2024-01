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

CREATE TABLE lista_pedidos (
    id INTEGER NOT NULL,
    id_pedido INTEGER NOT NULL,
    id_comanda INTEGER NOT NULL,
    FOREIGN KEY (id_comanda) REFERENCES comanda(id),
    FOREIGN KEY (id_pedido) REFERENCES pedido(id)
);

CREATE TABLE pedido (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_garcom INTEGER NOT NULL,
    id_mesa INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (id_garcom) REFERENCES funcionario(id),
    FOREIGN KEY (id_mesa) REFERENCES mesa(id)
);
CREATE TRIGGER 
CREATE TABLE descricao_pedido (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_pedido INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id),
    FOREIGN KEY (id_produto) REFERENCES produto(id)
);

CREATE TABLE funcionario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    cargo INTEGER NOT NULL,
    email TEXT NOT NULL,
    cpf INTEGER NOT NULL,
    senha TEXT NOT NULL,
    total_de_vendas REAL NOT NULL
);

CREATE TABLE produto (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    preco REAL NOT NULL,
    tipo INTEGER NOT NULL
);
