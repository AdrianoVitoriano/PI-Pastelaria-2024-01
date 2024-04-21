CREATE TABLE usuarios(
	id INTEGER NOT NULL AUTOINCREMENT,
	nome TEXT(100) NOT NULL,
	email TEXT(60) NOT NULL,
	senha TEXT(20) NOT NULL,
	cargo INTEGER not null,
	--o cargo vai ser usado como inteiro e trtabalhado na api para retornar um texto--
	valor_de_venda decimal not null,
	tipo INTEGER DEFAULT(0),
	--questionar o adriano sobre este campo--
PRIMARY KEY(id) );
CREATE TABLE mesas(
	id INTEGER NOT NULL AUTOINCREMENT,
	posicao TEXT(40) NOT NULL,
	PRIMARY key (id)
);
CREATE TABLE comandas(
	id INTEGER NOT NULLAUTOINCREMENT,
	mesa_id INTEGER NOT NULL,
	total INTEGER NOT NULL,
	usuario_id INTEGER NOT NULL,
	`status` INTEGER NOT NULL DEFAULT(0),
	CONSTRAINT comandas_mesas_FK FOREIGN KEY (mesa_id) REFERENCES mesas(id),
	CONSTRAINT comandas_usuarios_FK FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
	 PRIMARY KEY (id)
);
CREATE TABLE comandas_pedidos(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	comanda_id INTEGER NOT NULL,
	pedido_id INTEGER NOT NULL,
	subtotal INTEGER NOT NULL,
	CONSTRAINT comandasPedidos_comandas_FK FOREIGN KEY (comanda_id) REFERENCES comandas(id),
	CONSTRAINT comandasPedidos_pedidos_FK FOREIGN KEY (pedido_id) REFERENCES pedidos(id)
);


CREATE TABLE pedidos(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	total INTEGER NOT NULL,
	data_horario TEXT NOT NULL
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
CREATE TABLE itens(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	nome TEXT(30) NOT NULL,
	sabor TEXT(100),
	categoria_id INTEGER NOT NULL,
	preco INTEGER NOT NULL,
	CONSTRAINT itens_categoria_FK FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
CREATE TABLE categorias(
	id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	categoria TEXT(30) NOT NULL,
	descricao TEXT(100)
);
