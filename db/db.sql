

USE freedb_wirful;
CREATE TABLE productos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20),
    coste INT,
    stock VARCHAR(15) DEFAULT 'activo' CHECK (stock in ('activo', 'no activo')),
    primary key(id)
);
CREATE TABLE freedb_wirful.pedidos (
	id_cliente INT NOT NULL AUTO_INCREMENT,
    id_producto INT NOT NULL,
    nombre_cliente VARCHAR(20),
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(15) DEFAULT 'pendiente' CHECK (estado in ('pendiente', 'revision', 'pagado', 'finalizado')),
    coste_total INT,
    cantidad_total INT,
    PRIMARY KEY(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES productos(id) on delete cascade
);
select * from productos;
insert into productos (nombre, coste, stock)
        values("camiseta natiworlds", 19.99, "activo");