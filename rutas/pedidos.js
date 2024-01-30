const exprees = require('express')
const router = exprees.Router();
const mysqlConection = require('../database');

router.get('/pedidos', async (req, res) => {
    const [resultadoPedidos] = await mysqlConection.query('SELECT * FROM pedidos')
    res.json(resultadoPedidos)
});

router.get('/pedidos/:nombre_cliente', (req, res) => { 
    const { nombre_cliente } = req.params-nombre_cliente;
    mysqlConection.query('SELECT * FROM pedidos where nombre_cliente = ?', [nombre_cliente])
    if(!err){
        res.send(rows)
        console.log(err);
    }
})
 
router.post('/pedidos', (req, res)=> {
    const { id_cliente, id_producto, nombre_cliente, fecha, estado, coste_total, cantidad_total } = req.body
    console.log(`id cliente: ${id_cliente}, id producto: ${id_producto}, nombre: ${nombre_cliente}, fecha: ${fecha}, estado: ${estado}, coste_total: ${coste_total}, cantidad_total ${cantidad_total}`)
    mysqlConection.query('call addPedidos(?, ?, ?, ?, ?, ?, ?)', [id_cliente, id_producto, nombre_cliente, fecha, estado, coste_total, cantidad_total])
    if(!err){
        res.json({Status: "Producto guardado correctamente"});
        console.log({Status: "Producto guardado correctamente"});
    } else{
        console.log(err);
    }
});

module.exports = router;