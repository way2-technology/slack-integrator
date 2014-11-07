/*jslint node:true*/
var request = require('request');

var config = require('../utils/config');

module.exports = function (data) {
  request.post({
    url: config.slackUrl,
    form: data
  });
};
