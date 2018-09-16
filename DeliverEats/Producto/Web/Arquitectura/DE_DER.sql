CREATE TABLE DeliveryEat;

CREATE TABLE T_COMERCIO(
	id_comercio int NOT NULL;
	nombre varchar(40);
	descripcion varchar(40);
	direccion varchar(40);
	CONSTRAINT pk_comercio PRIMARY KEY (id_comercio);
);

CREATE TABLE T_PEDIDO(
	numero_pedido int NOT NULL;
	fecha_hora TIMESTAMP;
	domicilio varchar(40);
	entrega_deseada varchar(40);
	forma_pago varchar(40);
	CONSTRAINT pk_pedido PRIMARY KEY (numero_pedido);
);

CREATE TABLE T_DETALLE_PEDIDO(
	numero_pedido int NOT NULL;
	id_articulo int NOT NULL;
	CONSTRAINT pk_detalle_pedido PRIMARY KEY (numero_pedido, id_articulo);
	CONSTRAINT fk_pedido FOREIGN KEY (numero_pedido) REFERENCES T_PEDIDO(numero_pedido);
	CONSTRAINT fk_articulo FOREIGN KEY (id_articulo) REFERENCES T_ARTICULO(id_articulo);
);

CREATE TABLE T_ARTICULO(
	id_articulo int NOT NULL;
	id_comercio int;
	descripcion varchar(40);
	nombre varchar(40);
	precio float(5,5);
	CONSTRAINT pk_articulo PRIMARY KEY (id_articulo);
	CONSTRAINT fk_comercio FOREIGN KEY (id_comercio) REFERENCES T_COMERCIO(id_comercio);
);