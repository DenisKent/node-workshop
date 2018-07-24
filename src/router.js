var handlers = require("./handlers");

function router (request, response) {
  var endpoint = request.url;
  if (endpoint === "/") {
    handlers.homeHandler (request, response);
  } else if (endpoint === "/create-post") {
    handlers.postHandler (request, response);
  } else {
    handlers.genericHandler (request, response, endpoint);
  }
}

module.exports = router;
