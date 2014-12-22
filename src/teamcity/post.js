/*jslint node:true*/
var request = require('request');
var config = require('../utils/config');

module.exports = function (data) {
  request.post({
    url: config.tcBuildUrl,
    body: data,
    json: true,
    'auth': {
      'user': config.tcUser,
      'pass': config.tcPassword,
      'sendImmediately': true
    }
  }, function (error, response, body) {
    if (error || response.statusCode != 200) {
      console.log('StatusCode: ' + response.statusCode);
      console.log('Error: ' + error);
      console.log('Body: ' + body);
    }
    else {
      console.log('Successfully queued build ' + data.buildTypeId
        + ' on branch ' + data.branchName);
    }
  });
};
