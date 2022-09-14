var http = require("http");

//include the built-in filesystem(fs) module
var fs = require("fs");

//create a server object:
http
  .createServer(function (req, res) {
    fs.readFile("./index.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data); //data returned from the HTML file(index.html)
      return res.end(); //end the response
    });
  })
  .listen(8080); //the server object listens on port 8080

//The function passed into the http.createServer() method,
//will be executed when someone tries to access the computer on port 8080.
