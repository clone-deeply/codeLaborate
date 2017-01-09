const Sequelize = require('sequelize');
const sequelize = require('./../database');
const Projects = require('./ProjectModel');

const Features = sequelize.define('Features', {
  featureName: {
    type: Sequelize.STRING,
    field: 'feature_name',
  }
});

sequelize.sync();

module.exports = Features;
