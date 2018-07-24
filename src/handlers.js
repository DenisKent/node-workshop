var fs = require("fs");
var path = require("path");

function homeHandler (request, response) {
  fs.readFile(__dirname + "/../public/index.html", function (error, file) {
    if (error) {
      console.log(error);
      return;
    }
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
}

function genericHandler (request, response, endpoint) {
  var extension = endpoint.split(".")[1];
  var extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-icon",
    png: "image/png",
    jpg: "image/jpeg"
  };
  var filepath = path.join(__dirname,"../public",endpoint);
  fs.readFile(filepath,function (err,file) {
    if (err) {
      console.log(error);
      return;
    }
    response.writeHead(200, { "Content-Type": extensionType[extension]});
    response.end(file);
  });
}

module.exports = {
  homeHandler:homeHandler,
  genericHandler:genericHandler
};
