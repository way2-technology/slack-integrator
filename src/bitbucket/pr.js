/*jslint node:true*/
var fix = require('../utils/fix');
var postSlack = require('../slack/post');

module.exports = function (req, res) {
  var body = req.body;
  if (body.pullrequest_created) {
    var pr = body.pullrequest_created;
    var title = pr.title;
    var url = pr.links.html.href;
    var repo = pr.destination.repository.full_name;
    var branchFrom = pr.source.branch.name;
    var branchTo = pr.destination.branch.name;
    var author = pr.author.display_name;
    var data = {
      username: 'bitbucket',
      channel: '#' + req.query.channel,
      icon_url: 'http://i.imgur.com/GdGXeeL.png',
      attachments: JSON.stringify([{
        'fallback': 'PR criado: "' + repo + '" por ' + author + '. ' + url,
        'color': 'good',
        pretext: 'PR criado: <' + fix(url) + '|' + repo + ' - ' + title + '>',
        'fields': [{
          title: 'Repositório',
          'value': repo,
          'short': true
                }, {
          title: 'Autor',
          'value': author,
          'short': true
                }, {
          title: 'branch',
          'value': branchFrom + ' para o ' + branchTo,
          'short': false
                }]
            }])
    };
    postSlack(data);
  }
  res.end();
};
