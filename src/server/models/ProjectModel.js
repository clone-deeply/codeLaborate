const Sequelize = require('sequelize');
const sequelize = require('./../database');

const Projects = sequelize.define('projects', {
  title: {
    type: Sequelize.STRING(1000),
    field: 'project_title',
  },
  summary: {
    type: Sequelize.TEXT(1000),
    field: 'summary',
  },
}, {
  freezeTableName: true
});

Projects.sync();

module.exports = Projects;
