const page = "access"
const logger = require('morgan');
const funcMap = new Map();

module.exports.delegate = function(req, res, next) {
    logger("assessing access request");
    var func = req.params.func;
};

module.exports.path = ["/access/:func"];