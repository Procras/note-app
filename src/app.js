// node node_modules/http-server/bin/http-server


var httpServer = require("http-server");
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname, "../");
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(8080);
console.log("Server is running on http://127.0.0.1:8080/  or alternatevely http://localhost:8080/");
