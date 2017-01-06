const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://ufqqdrnm:uu7I2pphz78lM-TCMGnB3i8M9b-mPpUt@elmer.db.elephantsql.com:5432/ufqqdrnm');

sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

module.exports = sequelize;
