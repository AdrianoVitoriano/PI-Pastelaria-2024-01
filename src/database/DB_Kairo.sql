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
    idComanda INTEGER NOT NULL,
    idFuncionario INTEGER NOT NULL,
    idMesa INTEGER NOT NULL,
    subtotal REAL NOT NULL,
    FOREIGN KEY (idFuncionario) REFERENCES funcionarios(id),
    FOREIGN KEY (idMesa) REFERENCES mesas(id),
    FOREIGN KEY (idComanda) REFERENCES comandas(id)
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

CREATE TABLE produto_backup (
    id_produto INTEGER,
    nome TEXT,
    preco REAL,
    id_tipo INTEGER,
    FOREIGN KEY (id_produto) REFERENCES produtos(id)
);

