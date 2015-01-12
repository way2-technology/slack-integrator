/*jslint node:true*/
var request = require('request');
var postBuild = require('../teamcity/postBuild');
var getSprintBranch = require('../teamcity/getSprintBranch');
var buildIdDictionary = require('../teamcity/buildIds');
var util = require('util');
var _ = require('lodash');

module.exports = function (req, res) {
  var body = JSON.parse(req.body.payload);
  var repository = body.repository.name;
  if (body) {
    getSprintBranch(function(sprintBranch) {
      processCommits(body.commits, sprintBranch, repository);
    });
  }
  res.end();
};

var processCommits = function(commits, sprintBranch, repository) {
  _.chain(commits)
    .reject(function(commit) {
      return commit.author.toLowerCase() == 'teamcity'.toLowerCase();
    })
    .map(function(commit) {
     return commit.branch;
    })
    .uniq()
    .each(function(branch) {
      startBuildsForBranch(branch, sprintBranch, repository);
    });
}

var startBuildsForBranch = function(branch, sprintBranch, repository) {
  var buildMaps = buildIdDictionary[repository];
  buildMaps.forEach(function(buildMap) {
    if (branchMatches(branch, sprintBranch, buildMap.branchDefinition)) {
      var data = {
        buildTypeId: buildMap.buildId,
        branchName: buildMap.buildBranch ? buildMap.buildBranch : branch,
      };
      postBuild(data);
    }
  });
};

var branchMatches = function(branch, sprintBranch, branchDefinition) {
  if (util.isRegExp(branchDefinition)) {
    return branchDefinition.test(branch);
  }
  if (branchDefinition === '%sprint.branch%') {
    return branch === sprintBranch;
  }
  return branch === branchDefinition;
}
