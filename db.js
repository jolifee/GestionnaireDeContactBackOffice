const mysql = require('mysql');

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gestion_contact_cadiou',
});

module.exports = connection;