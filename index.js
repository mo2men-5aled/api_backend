var http = require("http");
var url = require("url");
//create a server object:
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query; //use url module to split the query into readable parts
    var txt = q.year + " " + q.month + " " + q.day; //their values been given after the domain name http://localhost:8000/?year=2000&month=jun&day=13
    res.end(txt); //end the response
  })
  .listen(8080); //the server object listens on port 8080

//The function passed into the http.createServer() method,
//will be executed when someone tries to access the computer on port 8080.
