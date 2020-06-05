var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(console.log('Connected!'));
  }
});

//db.end()

module.exports = db;


