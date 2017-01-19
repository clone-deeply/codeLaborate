const Sequelize = require('sequelize');

const sequelize = new Sequelize('	postgres://wzixuzdg:iaWmxsKOVuXH0Qyd5cMysSvZSUXt8ZDM@elmer.db.elephantsql.com:5432/wzixuzdg');

sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

module.exports = sequelize;
