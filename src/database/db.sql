CREATE TABLE usuarios(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	nome TEXT(100) NOT NULL,
	email TEXT(60) NOT NULL,
	senha TEXT(20) NOT NULL,
	tipo INTEGER DEFAULT(0)
);
CREATE TABLE mesas(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	posicao TEXT(40) NOT NULL
);
CREATE TABLE categorias(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	categoria TEXT(30) NOT NULL,
	descricao TEXT(100)
);
CREATE TABLE itens(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	nome TEXT(30) NOT NULL,
	sabor TEXT(100),
	categoria_id INTEGER NOT NULL,
	preco INTEGER NOT NULL,
	CONSTRAINT itens_categoria_FK FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
CREATE TABLE pedidos(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	total INTEGER NOT NULL,
	data_horario TEXT NOT NULL,
	usuario_id INTEGER NOT NULL,
	CONSTRAINT comandasPedidos_usuarios_FK FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);
CREATE TABLE comandas(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	mesa_id INTEGER NOT NULL,
	total INTEGER NOT NULL,
	status INTEGER NOT NULL DEFAULT(0),
	CONSTRAINT comandas_mesas_FK FOREIGN KEY (mesa_id) REFERENCES mesas(id)
);
CREATE TABLE itens_Pedidos(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	pedido_id INTEGER NOT NULL,
	item_id INTEGER NOT NULL,
	quantidade INTEGER NOT NULL,
	cozinha INTEGER NOT NULL DEFAULT(0),
	subtotal INTEGER NOT NULL,
	CONSTRAINT itensPedidos_Pedidos_FK FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
	CONSTRAINT itensPedidos_itens_FK FOREIGN KEY (item_id) REFERENCES itens(id)
);
CREATE TABLE comandas_pedidos(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	comanda_id INTEGER NOT NULL,
	pedido_id INTEGER NOT NULL,
	subtotal INTEGER NOT NULL,
	CONSTRAINT comandasPedidos_comandas_FK FOREIGN KEY (comanda_id) REFERENCES comandas(id),
	CONSTRAINT comandasPedidos_pedidos_FK FOREIGN KEY (pedido_id) REFERENCES pedidos(id)
);




