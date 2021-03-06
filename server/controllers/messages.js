var models = require('../models');

//url: localhost 3000 /classes/messages

module.exports = {
  get: function (req, res) {
    //response to a get request to read the database
    // console.log('I got the get request for users', req)
    models.messages.getAll((err, data) => {
      if (err) {
        //res.statusCode(404);
        res.status(400).send(err);
      } else {
        console.log("Messages GET Data :", data);
        res.json(data);
      }
    });
  },

  post: function (req, res) {
    let username = req.body.username;
    //let roomname = req.body.roomname || 'lobby'
    let message = req.body.message;
    //let roomname = req.body.roomname;
    var params = [message, username];
    models.messages.create(params, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        // console.log("Messages POST Data :", data);
        res.sendStatus(201);
      }
    });
  }
};
