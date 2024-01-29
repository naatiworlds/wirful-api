const mysql = require('mysql2');


const mysqlConection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'natiworlds',
    database: 'natiworlds'
})

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

module.exports = mysqlConection