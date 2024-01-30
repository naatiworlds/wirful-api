const mysql = require('mysql2');


const mysqlConection = mysql.createConnection({
    host: 'monorail.proxy.rlwy.net',
    port: 24279,
    user: 'root',
    password: 'EB6AF4GB5dab2E2fA5h6g-hEG2f-ADbC',
    database: 'railway'
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