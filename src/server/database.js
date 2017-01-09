const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://ebanrqqz:sE13dKoNZ3qr17M8SqoQYTg8-Tkqv_Ry@elmer.db.elephantsql.com:5432/ebanrqqz');

sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

module.exports = sequelize;
