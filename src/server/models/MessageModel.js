const Sequelize = require('sequelize');
const sequelize = require('./../database');

const Messages = sequelize.define('messages', {
  author: {
    type: Sequelize.String(1000),
    field: 'message_author',
  },
  message: {
    type: Sequelize.String(1000),
    field: 'message_message',
  },
}, {
  freezeTableName: true
});

Messages.belongsTo(Projects);

sequelize.sync();

module.exports = Messages;
