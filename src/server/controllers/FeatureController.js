const sequelize = require('./../database');
const Features = require('./../models/FeatureModel');

const FeatureController = {
  create: function(req, res) {
    Features.create({
      featureName: req.body.featureName,
      projectId: req.body.projectId
    }).then(function(feature) {
      console.log(feature);
    });
  },

  getFeatures: function(req, res) {
    Features.findAll()
    .then(function(features) {
      res.send(features);
    });
  },
}

module.exports = FeatureController;
