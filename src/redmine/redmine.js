/*jslint node:true*/
var request = require('request');
var moment = require('moment');
var _ = require('lodash');

var config = require('../utils/config');
var fix = require('../utils/fix');
var postSlack = require('../slack/post');


var getIssueFromRedmineJson = function (i) {
  return {
    id: i.id,
    project: i.project.name,
    subject: i.subject,
    tracker: i.tracker.name,
    status: i.status.name,
    author: i.author.name,
    createdOn: i.created_on,
    assignee: i.assigned_to ? i.assigned_to.name : "-",
    estimatedHours: i.estimated_hours,
    spentHours: i.spent_hours,
    description: i.description,
    priority: i.priority.name
  };
};

module.exports = function (req, res) {
  var channel = req.body.channel_name;
  var text = req.body.text;
  if (_.contains(text, config.redmineUrl + 'issues')) {
    var regex = new RegExp(config.redmineUrl + 'issues/([0-9]{0,})');
    var regexExec = regex.exec(text);
    var issueNumber = regexExec[regexExec.length - 1];
    var url = config.redmineIssueUrl(issueNumber);
    request.get(url, function (error, response, body) {
      var issue = JSON.parse(body).issue;
      var slackIssue = getIssueFromRedmineJson(issue);
      var summary = '[' + slackIssue.id + ' - ' + slackIssue.tracker + ' - ' + slackIssue.assignee + ']: ' + slackIssue.subject;

      var data = {
        username: 'redmine',
        channel: '#' + channel,
        attachments: JSON.stringify([{
          'fallback': summary,
          'color': 'good',
          pretext: 'Issue <' + fix('http://redmine.way2.com.br/issues/' + slackIssue.id) + '|' + slackIssue.id + '>',
          'fields': [{
            title: 'Id',
            'value': slackIssue.id,
            'short': true
                    }, {
            title: 'Status',
            'value': slackIssue.status,
            'short': true
                        }, {
            title: 'Projeto',
            'value': slackIssue.project,
            'short': true
                        }, {
            title: 'Tipo',
            'value': slackIssue.tracker,
            'short': true
                        }, {
            title: 'Criado por',
            'value': slackIssue.author,
            'short': true
                        }, {
            title: 'Criado em',
            'value': moment(slackIssue.createdOn).format('DD/MM/YYYY HH:mm'),
            'short': true
                        }, {
            title: 'Prioridade',
            'value': slackIssue.priority,
            'short': true
                        }, {
            title: 'Designado para',
            'value': slackIssue.assignee,
            'short': true
                        }, {
            'title': 'Horas estimadas',
            'value': slackIssue.estimatedHours,
            'short': true
                        }, {
            'title': 'Horas utilizadas',
            'value': slackIssue.spentHours,
            'short': true
                        }, {
            'title': 'Assunto',
            'value': slackIssue.subject,
            'short': false
                        }, {
            'title': 'Descrição',
            'value': slackIssue.description,
            'short': false
                        }]
                }])
      };
      postSlack(data);
    });
  }
  res.end();
};
