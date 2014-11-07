/*jslint node:true*/
var config = require('./utils/config');

module.exports = function (req, res) {
  console.log(config);
  res.send('ok');
};
