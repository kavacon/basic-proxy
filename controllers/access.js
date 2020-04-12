const page = "access"
const forwardUrl = (process.env.REDIRECT || "localhost:8000");
const logger = require("../logger").getLogger("access-route");
const proxy = require("express-http-proxy");

module.exports.delegate = proxy(forwardUrl, {
    proxyReqPathResolver: (req) => {
        logger.info("Redirecting path [%s] to [%s]", req.path, forwardUrl);
        return req.path}
})

module.exports.path = ["/access/*"];