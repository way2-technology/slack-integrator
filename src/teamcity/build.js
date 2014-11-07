/*jslint node:true*/
var fix = require('../utils/fix');
var postSlack = require('../slack/post');

module.exports = function (req, res) {
  var build = req.body.build;
  var data = {
    username: 'teamcity',
    channel: '#' + req.query.channel,
    icon_url: 'http://i.imgur.com/efy2UuK.png',
    attachments: JSON.stringify([{
      'fallback': build.text,
      'color': build.buildResult == 'success' ? 'good' : 'danger',
      pretext: 'Resultado do build <' + fix(build.buildStatusUrl) + '|' + build.buildFullName + ' - ' + build.buildId + '>',
      'fields': [{
        title: 'Mensagem',
        'value': build.text,
        'short': false
            }, {
        'title': '+ Informação',
        'value': build.buildStatus,
        'short': true
                }, {
        'title': 'Quem?',
        'value': build.triggeredBy,
        'short': true
                }]
        }])
  };
  postSlack(data);
  res.end();
};
