/*jslint node:true*/

var config = {
  redmineApiKey: process.env.redmineApiKey,
  redmineUrl: process.env.redmineUrl,
  slackUrl: process.env.slackUrl
};
config.redmineIssueUrl = function (issueNumber) {
  return config.redmineUrl + 'issues/' + issueNumber + '.json?key=' + config.redmineApiKey;
};
module.exports = config;
