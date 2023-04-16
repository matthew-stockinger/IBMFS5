const http = require("http");
const today = require("./today");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end(`Hello, Coding 3! It is now ${today.getDate()}`);
};

const port = 8888;
const server = http.createServer(requestListener);
console.log("server listening on port: " + port);
server.listen(port);
