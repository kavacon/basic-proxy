const page = "access"
const funcMap = new Map();
const forwardUrl = "http://localhost:8000/" + page;
const request = require("request")
const logger = require("../logger").getLogger("access-route");

//fill the func map with function prototypes to forward requests
//for access information
{
    funcMap.set("getKey", sendBody);
    funcMap.set("activateRemote", sendBody)
    funcMap.set("deactivateRemote", sendBody)
}

//functions associated with the function map
//actions to take on the response from a forwarded request, assumes a response object is bound to the function
function sendBody(body){
    this.send(body)
}

//utility function to forward a message and perform an action on the response
function forwardMessage(accessPoint, info, callback){
    logger.info("message forwarded to %s at access point %s", forwardUrl, accessPoint);
    let url = forwardUrl+ "/" + accessPoint;
    url = info ? url + "/" + info : url;
    request(url, function(err, response, body){
        if(err){
            logger.error(err)
            logger.info(response)
        }
        else {
            callback(body)
        }
    });
}

module.exports.delegate = function(req, res, next) {
    logger.info("assessing access request");
    const func = req.params.func;
    const info = req.params.info
    const callback = funcMap.get(func).bind(res)
    forwardMessage(func, info, callback);
};

module.exports.path = ["/access/:func", "/access/:func/:info"];