CREATE DATABASE DeliveryEat;

DROP TABLE IF EXISTS T_COMERCIO ;
CREATE TABLE T_COMERCIO(
	id_comercio int NOT NULL,
	nombre varchar(40),
	descripcion varchar(40),
	direccion varchar(40),
	CONSTRAINT pk_comercio PRIMARY KEY (id_comercio)
);

DROP TABLE IF EXISTS T_ARTICULO ;
CREATE TABLE T_ARTICULO(
	id_articulo int NOT NULL,
	id_comercio int,
	descripcion varchar(200),
	nombre varchar(40),
	precio float(5,5),
	CONSTRAINT pk_articulo PRIMARY KEY (id_articulo),
	CONSTRAINT fk_comercio FOREIGN KEY (id_comercio) REFERENCES T_COMERCIO(id_comercio)
);

DROP TABLE IF EXISTS T_PEDIDO ;
CREATE TABLE T_PEDIDO(
	numero_pedido int NOT NULL,
	fecha_hora TIMESTAMP,
	domicilio varchar(40),
	entrega_deseada varchar(40),
	forma_pago varchar(40),
	CONSTRAINT pk_pedido PRIMARY KEY (numero_pedido)
);

DROP TABLE IF EXISTS T_DETALLE_PEDIDO ;
CREATE TABLE T_DETALLE_PEDIDO(
	numero_pedido int NOT NULL,
	id_articulo int NOT NULL,
	cantidad int,
	precio float(5,5),
	CONSTRAINT pk_detalle_pedido PRIMARY KEY (numero_pedido, id_articulo),
	CONSTRAINT fk_pedido FOREIGN KEY (numero_pedido) REFERENCES T_PEDIDO(numero_pedido),
	CONSTRAINT fk_articulo FOREIGN KEY (id_articulo) REFERENCES T_ARTICULO(id_articulo)
);


/*INSERT INTO T_COMERCIO (id_comercio, nombre, descripcion, direccion) VALUES ();*/

INSERT INTO T_COMERCIO (id_comercio, nombre, descripcion, direccion) VALUES (1, "El Club de la Milanesa", "Comercio Adherido", "Bv. Chacabuco 895, Nueva Córdoba");

/*INSERT INTO T_PEDIDO (numero_pedido, fecha_hora, domicilio, entrega_deseada, forma_pago) VALUES ();*/

/*INSERT INTO T_DETALLE_PEDIDO (numero_pedido, id_articulo, cantidad, precio) VALUES ();*/

/*INSERT INTO T_ARTICULO (id_articulo, id_comercio, descripcion, nombre, precio) VALUES ();*/

INSERT INTO T_ARTICULO (id_articulo, id_comercio, descripcion, nombre, precio)
VALUES (1, 1, "Muzzarella, fiambre con hierbas ahumado, tomates cherry confitados y rúcula.", "Milanesa patagónica con guarnición", 269);

INSERT INTO T_ARTICULO (id_articulo, id_comercio, descripcion, nombre, precio)
VALUES (2, 1, "Muzzarella, jamón cocido, rodajas de tomate fresco, huevo frito y perejil.", "Milanesa de la casa con guarnición", 247);

INSERT INTO T_ARTICULO (id_articulo, id_comercio, descripcion, nombre, precio)
VALUES (3, 1, "Salsa Barbacoa, queso cheddar, panceta crocante, huevo frito y perejíl.", "Milanesa La Gringa con guarnición", 250);

INSERT INTO T_ARTICULO (id_articulo, id_comercio, descripcion, nombre, precio)
VALUES (4, 1, "Bondiola, barbacoa y cebolla caramelizada.", "Sándwich de bondiola barbacue con papas rústicas", 190);

INSERT INTO T_ARTICULO (id_articulo, id_comercio, descripcion, nombre, precio)
VALUES (5, 1, "Anillos de calamar rebozados.", "Rabas", 180);

INSERT INTO T_ARTICULO (id_articulo, id_comercio, descripcion, nombre, precio)
VALUES (6, 1, "2 tortillas de trigo rellenas con mix de vegetales y pollo, con cazuela de guacamole y mayonesa casera.", "Tacos de pollo", 165);
