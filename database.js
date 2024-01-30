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
    connectionLimit: 10, // Ajusta según tus necesidades
    queueLimit: 0,
});


module.exports = mysqlConection;
