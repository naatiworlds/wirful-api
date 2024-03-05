CREATE DEFINER=`freedb_wirful`@`%` PROCEDURE `addPedidos`(
in _id_cliente int, 
in _id_producto int,
in _nombre_cliente varchar(20), 
in _fecha datetime, 
in _estado varchar(15),
in _coste_total int,
in _cantidad_total int
)
BEGIN
	if _id_cliente = 0 then
		insert into pedidos (id_producto, nombre_cliente, fecha, estado, coste_total, cantidad_total)
        values(_id_producto,_nombre_cliente, _fecha, _estado, _coste_total, _cantidad_total);
		set _id_cliente = last_insert_id();
        update productos
        set cantidad = cantidad - _cantidad_total
        where id = _id_producto;
    else
		update pedidos
        set
            id_producto = _id_producto,
			nombre_cliente = _nombre_cliente,
            fecha = _fecha,
            estado = _estado,
            coste_total = _coste_total
            where id_cliente = _id_cliente;
	end if;
    select * from pedidos;
END