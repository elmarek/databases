var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    var queryStr = "SELECT * FROM users";
    db.query(queryStr, (err, result) => {
      callback(err, result);
    });
  },

  create: function (params, callback) {

    var queryStr = 'INSERT INTO users (name) values (?)';
    db.query(queryStr, params, (err, results) => {
      callback(err, results);
    });
  }
};