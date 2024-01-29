create database if not exists natiworlds;

use natiworlds;
drop table productos;
create table productos (
    id int not null AUTO_INCREMENT,
    nombre varchar(20),
    coste int,
    stock varchar(15) default 'activo' check (stock in ('activo', 'no activo')),
    primary key(id)
);
drop table natiworlds.pedidos;
create table natiworlds.pedidos (
	id_cliente int not null AUTO_INCREMENT,
    id_producto int not null,
    nombre_cliente varchar(20),
    fecha datetime default CURRENT_TIMESTAMP,
    estado varchar(15) default 'pendiente' check (estado in ('pendiente', 'revision', 'pagado', 'finalizado')),
    coste_total int,
    cantidad_total int,
    primary key(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES productos(id) on delete cascade
);
select * from pedidos;
select * from productos;
INSERT into pedidos values(1, 1, 'Carlos', '2023-06-25 16:45:27', 'pendiente', 22, 1);
delete from natiworlds.pedidos where id_cliente = 1;