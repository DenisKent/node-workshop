var http = require("http");
var handlers = require("./src/handlers");

function router (request, response) {
  var endpoint = request.url;
  if (endpoint === "/") {
    handlers.homeHandler (request, response);
  } else {
    handlers.genericHandler (request, response, endpoint);
  }
}

var server = http.createServer(router);
server.listen(3000, function () {
  console.log("Server is listening on port 3000.  Ready to accept requests!");
});
