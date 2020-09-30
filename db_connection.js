const mysql = require('mysql');
const e = require('express');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cumulations',
  database: 'seimens'
});

connection.connect((err) => {
    if (!err) {
      console.log("Connected to MySQL Server!");
    } else {
      throw err;
    }
  });

module.exports = connection