const Sequelize = require('sequelize');
const sequelize = require('./../database');

const Messages = sequelize.define('messages', {
  author: {
    type: Sequelize.string(1000),
    field: 'message_author',
  },
  message: {
    type: Sequelize.string(1000),
    field: 'message_message',
  },
}, {
  freezeTableName: true
});

Messages.sync();

module.exports = Messages;
