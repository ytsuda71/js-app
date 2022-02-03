const log4js = require("log4js");
const config = require("../../config/log4js.config");
var console, application;

log4js.configure(config);

//console.logger
console = log4js.getLogger();

//Application.logger
application = log4js.getLogger("application");


module.exports = {
  console,
  application
};