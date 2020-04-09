
function Logger(name){
    this.name = name;
}

Logger.prototype.info = function(string, ...args){
    console.log("[%s] INFO: "+string, this.name, ...args)
}

Logger.prototype.error = function(string, ...args){
    console.error("[%s] ERROR: "+string, this.name, ...args)
}
module.exports.getLogger = function(name){
    return new Logger(name)
}