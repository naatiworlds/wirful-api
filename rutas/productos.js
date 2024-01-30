const exprees = require('express')
const router = exprees.Router();
const mysqlConection = require('../database');

router.get('/productos', async (req, res) => {
    const [resultadoProductos] = await mysqlConection.query('SELECT * FROM productos')
    res.json(resultadoProductos)
});

router.get('/productos/:nombre', (req, res) => { 
    const { nombre } = req.params;
    mysqlConection.query('SELECT * FROM productos where nombre = ?', [nombre], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        } else{
            console.log(err);
        }
    })
})

router.post('/productos', (req, res)=> {
    const { id, nombre, coste, stock } = req.body
    console.log(`id: ${id}, nombre: ${nombre}, coste: ${coste}, stock: ${stock}`)
    mysqlConection.query('call addProducto(?, ?, ?, ?)', [id, nombre, coste, stock], (err, rows, fields)=> {
        if(!err){
            res.json({Status: "Producto guardado correctamente"});
            console.log({Status: "Producto guardado correctamente"});
        } else{
            console.log(err);
        }
    });
});



module.exports = router;