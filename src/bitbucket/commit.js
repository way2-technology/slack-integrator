/*jslint node:true*/
var request = require('request');
var postBuild = require('../teamcity/post');
var buildIdDictionary = require('../teamcity/buildIds');
var _ = require('lodash');

module.exports = function (req, res) {
  var body = JSON.parse(req.body.payload);
  if (body) {
    var repository = body.repository;
    var buildId = buildIdDictionary[repository.name];
    var branches = _.chain(body.commits)
                    .map(function(c) {
                        return c.branch;
                    })
                    .uniq()
                    .value();

    if (_.contains(branches, 'default')) {
      var data = {
        buildTypeId: buildId,
        branchName: 'default',
      };
      postBuild(data);
    }
  }
  res.end();
};
