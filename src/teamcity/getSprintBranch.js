/*jslint node:true*/
var request = require('request');
var config = require('../utils/config');

module.exports = function (callback) {
  request.get({
    url: config.tcRestUrl + 'projects/PlataformaDeColeta/parameters/sprint.branch',
    json: true,
    'auth': {
      'user': config.tcUser,
      'pass': config.tcPassword,
      'sendImmediately': true
    }
  }, function (error, response, body) {
    if (error || response.statusCode != 200) {
      console.log('tc-getSprintBranch failure');
      console.log(response);
      console.log('StatusCode: ' + (response ? response.statusCode : null));
      console.log('Error: ' + error);
      console.log('Body: ' + body);
      callback('');
    }
    else {
      callback(body.value);
    }
  });
};
