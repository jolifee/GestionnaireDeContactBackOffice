var mysql      = require('mysql');

var connection = mysql.createConnection({
      host     : 'localhost',
      database : 'gestion_contact_cadiou',
      user     : 'root',
      password : ""
});

module.exports = connection;