const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    // Your Mysql username,
    user: 'root',
    //Your Mysql password
    password: 'Reserve160!',
    database: 'election'
});

module.exports = db;