const express = require('express');
const router = express.Router();
const mysqlConnection = require('../api/database');

router.get('/', async (req, res) => {
    try {
        const [resultadoProductos] = await mysqlConnection.query('SELECT * FROM productos');
        res.json(resultadoProductos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/:nombre', async (req, res) => { 
    try {
        const { nombre } = req.params;
        const [producto] = await mysqlConnection.query('SELECT * FROM productos WHERE nombre = ?', [nombre]);
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/', (req, res) => {
    const { id, nombre, coste, stock } = req.body;
    console.log(`id: ${id}, nombre: ${nombre}, coste: ${coste}, stock: ${stock}`);

    mysqlConnection.query('CALL freedb_wirful.addProducto(?, ?, ?, ?)', [id, nombre, coste, stock], (err, results) => {
        if (!err) {
            res.json({ status: "Producto guardado correctamente" });
            console.log({ status: "Producto guardado correctamente" });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});
// Ruta para eliminar un producto por ID
router.delete('/:id', (req, res) => {
    const productId = req.params.id;

    mysqlConnection.query('CALL freedb_wirful.deleteProducto(?)', [productId], (err, results) => {
        if (!err) {
            // Comprobar si se eliminó correctamente
            if (results.affectedRows > 0) {
                res.json({ status: "Producto eliminado correctamente" });
                console.log({ status: "Producto eliminado correctamente" });
            } else {
                res.status(404).json({ error: 'Producto no encontrado' });
            }
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
});


module.exports = router;
