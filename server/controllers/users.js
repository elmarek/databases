var models = require('../models');

//url: localhost 3000 /classes/users

module.exports = {
  get: function (req, res) {
    //response to a get request to read the database
    models.users.getAll((err, data) => {
      if (err) {
        //res.statusCode(404);
        res.status(404).send('Could not get user');
      } else {
        //console.log("Users GET Data :", data);
        res.json(data);
      }
    });
  },

  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, (err, data) => {
      //callback
      if (err) {
        res.status(404).send('Could not confirm user');
      } else {
      //  console.log("Users POST Data :", data);
        res.sendStatus(201);
      }
    });
  }
};
