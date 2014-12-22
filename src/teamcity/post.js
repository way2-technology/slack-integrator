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
		if (error) {
			console.log(error);
		}		
	});
};
