const express = require("express");
const router = express.Router();
const fs = require("fs");
const logger = require('../logger').getLogger("router");


//automatically index all controller routes by reading the controller directory
//assumes all controllers have implemented the exported delegate function which
//renders a request or forwards it and have exported their associated path
fs.readdir("./controllers/", (err, files) => {
    if(err){
        logger.error(err)
    }
    files.forEach(file => interpretController(file));
});

//function to interpret all controllers
function interpretController(file){
    var controller = require("../controllers/"+file);
    router.get(controller.path, controller.delegate);
}

module.exports = router;