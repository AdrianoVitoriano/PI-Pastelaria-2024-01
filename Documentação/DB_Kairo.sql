CREATE TABLE mesas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  localizacao TEXT
);

CREATE TABLE comandas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  total REAL DEFAULT 0,
  mesasId INT,
  abertura TEXT,
  aberta INT DEFAULT 1,
  FOREIGN KEY (mesasId) REFERENCES mesas(id)
);

CREATE TABLE pedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuariosId INT,
  comandasId INT,
  total REAL DEFAULT 0,
  dataHorario TEXT,
  finalizado INT DEFAULT 0,
  FOREIGN KEY (usuariosId) REFERENCES usuarios(id),
  FOREIGN KEY (comandasId) REFERENCES comandas(id)
);

CREATE TABLE itens (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome TEXT,
  preco REAL,
  tipoItensId INT,
  FOREIGN KEY (tipoItensId) REFERENCES tipoItens(id)
);

CREATE TABLE cozinhas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pedidosId INT,
  itensId INT,
  quantidade INT,
  produzido INT DEFAULT 0,
  FOREIGN KEY (pedidosId) REFERENCES pedidos(id),
  FOREIGN KEY (itensId) REFERENCES itens(id)
);

CREATE TABLE itensPedidos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  pedidosId INT,
  itensId INT,
  quantidade INT,
  cozinha INT DEFAULT 0,
  subtotal REAL,
  FOREIGN KEY (pedidosId) REFERENCES pedidos(id),
  FOREIGN KEY (itensId) REFERENCES itens(id)
);

CREATE TABLE tipoItens (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome TEXT
);

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome TEXT,
  cargo INT,
  email TEXT,
  cpf INT,
  senha TEXT
);
