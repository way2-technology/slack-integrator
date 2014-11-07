/*jslint node:true*/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var root = require('./home');
var redmine = require('./redmine/redmine');
var bitbucketPR = require('./bitbucket/pr');
var teamcityBuild = require('./teamcity/build');
var config = require('./utils/config');
console.log(config);

app.get('/', root);

app.post('/teamcity-build', teamcityBuild);

app.post('/bitbucket-pr', bitbucketPR);

app.post('/redmine', redmine);

app.listen(process.env.PORT || 1337);
