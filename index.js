var http = require("http");

//include the built-in filesystem(fs) module
var fs = require("fs");

//to renamefile use the method rename("oldname","newname")
fs.rename("test.txt", "index.txt", function (err) {
  if (err) throw err;
  console.log("saved");
});
//The function passed into the http.createServer() method,
//will be executed when someone tries to access the computer on port 8080.
