var http = require("http");

//include the built-in filesystem(fs) module
var fs = require("fs");
fs.unlink("test.txt", function (err) {
  if (err) throw err;
  console.log("saved");
});
//The function passed into the http.createServer() method,
//will be executed when someone tries to access the computer on port 8080.
