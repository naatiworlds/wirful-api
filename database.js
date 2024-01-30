// database.js
const mysql = require('mysql2');
const {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
} = require('./config'); // Cambiar la ruta según la ubicación real

const mysqlConection = mysql.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
});

mysqlConection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("bd is connected");
  }
});

mysqlConection.end((err) => {
  if (err) {
    console.error('Error al cerrar la conexión a la base de datos:', err);
    return;
  }
  console.log('Conexión cerrada correctamente');
});

module.exports = mysqlConection;
