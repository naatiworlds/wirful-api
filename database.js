const mysql = require('mysql2');
import { createPool } from 'mysql2';

const mysqlConection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'natiworlds',
    database: 'natiworlds'
})

mysqlConection.connect(function(err){
    if(err){
        console.log(err)
        return;
    } else{
        console.log("bd is connected")
    }
});

module.exports = mysqlConection