var page = "index"
var logger = require('morgan');

module.exports.delegate = function(req, res, next) {
  logger("indexing")
  res.render(page, {title: "Express"});
};

module.exports.path = ["/"];
