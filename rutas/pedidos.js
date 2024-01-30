const express = require('express');
const router = express.Router();
const mysqlConection = require('../database');

router.get('/', async (req, res) => {
    try {
        const [resultadoPedidos] = await mysqlConection.query('SELECT * FROM pedidos');
        res.json(resultadoPedidos);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error al obtener los pedidos' });
    }
});

router.get('/:nombre_cliente', async (req, res) => { 
    try {
        const { nombre_cliente } = req.params;
        const [rows] = await mysqlConection.query('SELECT * FROM pedidos where nombre_cliente = ?', [nombre_cliente]);
        if (rows.length > 0) {
            res.json(rows[0]);
        } else {
            res.status(404).json({ error: 'Pedido no encontrado' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error al obtener el pedido' });
    }
});

router.post('/pedidos', async (req, res)=> {
    try {
        const { id_cliente, id_producto, nombre_cliente, fecha, estado, coste_total, cantidad_total } = req.body;
        console.log(`id cliente: ${id_cliente}, id producto: ${id_producto}, nombre: ${nombre_cliente}, fecha: ${fecha}, estado: ${estado}, coste_total: ${coste_total}, cantidad_total ${cantidad_total}`);
        const [result] = await mysqlConection.query('call addPedidos(?, ?, ?, ?, ?, ?, ?)', [id_cliente, id_producto, nombre_cliente, fecha, estado, coste_total, cantidad_total]);
        res.json({ status: 'Pedido guardado correctamente', result });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Error al guardar el pedido' });
    }
});

module.exports = router;
