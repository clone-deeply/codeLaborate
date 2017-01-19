const Sequelize = require('sequelize');
const sequelize = require('./../database');
const Features = require('./FeatureModel');

const Projects = sequelize.define('projects', {
  title: {
    type: Sequelize.STRING(1000),
    field: 'project_title',
  },
  summary: {
    type: Sequelize.TEXT,
    field: 'summary',
  },
});

Projects.hasMany(Features);
Features.belongsTo(Projects); // projectId to model

sequelize.sync();

module.exports = Projects;
