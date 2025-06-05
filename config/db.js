const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '',
  database: 'listatarea_db'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a MariaDB');
});

module.exports = connection;
