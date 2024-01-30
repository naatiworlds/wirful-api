CREATE DATABASE if NOT EXISTS natiworlds;

USE natiworlds;
CREATE TABLE productos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20),
    coste INT,
    stock VARCHAR(15) DEFAULT 'activo' CHECK (stock in ('activo', 'no activo')),
    primary key(id)
);
CREATE TABLE natiworlds.pedidos (
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
