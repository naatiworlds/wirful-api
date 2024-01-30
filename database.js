// database.js
const mysql = require('mysql2/promise');
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} = require('./config'); // Cambiar la ruta según la ubicación real

const mysqlConection = mysql.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    reconnect: {
      maxRetries: 10,  // Número máximo de intentos de reconexión
      delay: 3000,     // Tiempo de espera entre intentos (en milisegundos)
    },
});

mysqlConection.getConnection((err, connection) => {
    if (err) {
      console.error('Error al conectar a la base de datos:', err.message);
    } else {
      console.log('Conexión exitosa a la base de datos');
      connection.release();
    }
  });
  

module.exports = mysqlConection;

