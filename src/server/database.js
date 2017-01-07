const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://itjhrgaa:qAkrhaPSbZHYhZT0hu7XV5HYtOVV6jKQ@elmer.db.elephantsql.com:5432/itjhrgaa');

sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

module.exports = sequelize;
