var db = require('../db');

module.exports = {
  // a function which produces all the messages
  getAll: function (callback) {
    var queryStr  = 'SELECT messages.id, messages.text, users.name from messages left outer join users on (messages.user_id = users.id)';
    db.query(queryStr, (err, result) => {
      callback(err, result);
    });
  },

  create: function (params, callback) {
    console.log(params);
    var queryStr = 'INSERT INTO messages (text, user_id) VALUES (?, (SELECT id from users where name = ? limit 1))';
    db.query(queryStr, params, (err, response) => {
      callback(err, response);
    });
  }
};

// `INSERT INTO 'messages' VALUES (${message}, (SELECT 'id' FROM users WHERE name = ${username}), (SELECT 'id' FROM 'rooms' WHERE name = ${roomname})) INTO 'messages'`
// a function which can be used to insert a message into the database
