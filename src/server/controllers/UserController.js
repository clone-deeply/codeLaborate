const Users = require('./../models/UserModel');


const UserController = {
  //register user, if username already exists send 'already exists' message
  signup: function(req, res) {
    Users.find({
      where: {username: req.body.username}
    })
    .then(function(user) {
      if (user) {
        return res.send({message: 'Username already exists', view: 1});
      } else {
        Users.create({
          username: req.body.username,
          password: req.body.password,
          name: req.body.name
        })
        .then(function(user) {
          res.send({message: 'New user created!', view: 0});
        });
      }
    })
  },
  //login user, if user or password is invalid, send 'invalid' message
  login: function(req, res) {
    Users.findOne({
      where: {username: req.body.username}
    }).then(function(user) {
      if (!user) {
         res.send({view: 0, message: 'Invalid Login'});
      } else if (user.password === req.body.password) {
        res.send({view: 2});
      } else {
        res.send({view: 0, message: 'Invalid Login'});
      }
    });
  }
}

module.exports = UserController;
