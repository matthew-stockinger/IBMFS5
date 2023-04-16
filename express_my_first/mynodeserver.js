const express = require("express");
const app = express();
const port = 3000;

// listen to incoming HTTP GET requests.
// route to /temperature/...
// call the callback.
app.get("/temperature/:location_code", (request, response) => {
  // request.params is standard.
  // pull location from GET request.
  var location = request.params.location_code;

  // use the location in a method.
  weather.current(location, (error, temp_f) => {});
});

// step 5.  start HTTP server.
// .listen returns an instance of the server object.
// callback runs on creation.
var server = app.listen(port, () => {
  console.log(`Listening on URL http://localhost:${port}`);
});
