const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://cjyrmvcq:H3qXH_73fyYeZlGFg9_nIKZausC1mmAr@elmer.db.elephantsql.com:5432/cjyrmvcq');

sequelize.authenticate().then(function() {
  console.log('Connected!');
}).catch(function(err) {
  console.log('Error: ', err);
});

module.exports = sequelize;
