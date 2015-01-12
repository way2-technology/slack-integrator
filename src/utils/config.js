/*jslint node:true*/

var config = {
  redmineApiKey: process.env.redmineApiKey,
  redmineUrl: process.env.redmineUrl,
  slackUrl: process.env.slackUrl,
  tcRestUrl: process.env.tcRestUrl,
  tcUser: process.env.tcUser,
  tcPassword: process.env.tcPassword
};
config.redmineIssueUrl = function (issueNumber) {
  return config.redmineUrl + 'issues/' + issueNumber + '.json?key=' + config.redmineApiKey;
};
module.exports = config;
