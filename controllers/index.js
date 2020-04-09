const page = "index"
const logger = require('../logger').getLogger("index-route");

module.exports.delegate = function(req, res, next) {
  logger.info("indexing")
  res.render(page, {title: "Express"});
};

module.exports.path = ["/"];
