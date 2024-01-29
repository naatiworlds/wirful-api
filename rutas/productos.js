const express = require('express');
const router = express.Router();
const mysqlConection = require('../database');

router.get('/productos', (req, res) => {
    mysqlConection.getConnection((err, connection) => {
        if (err) {
            console.error('Error al obtener la conexión:', err);
            res.status(500).json({ error: 'Error de servidor' });
            return;
        }

        connection.query('SELECT * FROM productos', (err, rows, fields) => {
            connection.release(); // Liberar la conexión después de usarla

            if (!err) {
                res.json(rows);
            } else {
                console.error(err);
                res.status(500).json({ error: 'Error de servidor' });
            }
        });
    });
});

router.get('/productos/:nombre', (req, res) => {
    const { nombre } = req.params;
    
    mysqlConection.getConnection((err, connection) => {
        if (err) {
            console.error('Error al obtener la conexión:', err);
            res.status(500).json({ error: 'Error de servidor' });
            return;
        }

        connection.query('SELECT * FROM productos WHERE nombre = ?', [nombre], (err, rows, fields) => {
            connection.release(); // Liberar la conexión después de usarla

            if (!err) {
                res.json(rows[0]);
            } else {
                console.error(err);
                res.status(500).json({ error: 'Error de servidor' });
            }
        });
    });
});

router.post('/productos', (req, res) => {
    const { id, nombre, coste, stock } = req.body;
    
    mysqlConection.getConnection((err, connection) => {
        if (err) {
            console.error('Error al obtener la conexión:', err);
            res.status(500).json({ error: 'Error de servidor' });
            return;
        }

        connection.query('CALL addProducto(?, ?, ?, ?)', [id, nombre, coste, stock], (err, rows, fields) => {
            connection.release(); // Liberar la conexión después de usarla

            if (!err) {
                res.json({ Status: 'Producto guardado correctamente' });
                console.log({ Status: 'Producto guardado correctamente' });
            } else {
                console.error(err);
                res.status(500).json({ error: 'Error de servidor' });
            }
        });
    });
});

module.exports = router;
