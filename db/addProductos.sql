CREATE DEFINER=`freedb_wirful`@`%` PROCEDURE `addProducto`(
in _id int, 
in _nombre varchar(20), 
in _coste int(5), 
in _stock varchar(15)
)
BEGIN
	if _id = 0 then
		insert into productos (nombre, coste, stock)
        values(_nombre, _coste, _stock);
		set _id = last_insert_id();
    else
		update productos
        set
			nombre = _nombre,
            coste = _coste,
            stock = _stock
            where id = _id;
	end if;
    select * from productos;
END