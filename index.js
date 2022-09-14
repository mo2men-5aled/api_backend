var http = require("http");

//create a server object:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(req.url); //write a response to the client with the url that comes after the domain name
    res.end(); //end the response
  })
  .listen(8081); //the server object listens on port 8080

//The function passed into the http.createServer() method,
//will be executed when someone tries to access the computer on port 8080.
