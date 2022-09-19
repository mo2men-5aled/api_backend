const http = require("http");
const { readFileSync } = require("fs");

// for printing data in the server from html file
// read file using fs module
// define what type of data you will return in the page in the writeHead() methode {"content-type":"text/html"}
// print it in the page using response.write(file)

const portfolio = readFileSync("./index.html");
const portfolio_css = readFileSync("./portfolio.css");
const earth = readFileSync("./images/18.png");
const earth2 = readFileSync("./images/19.png");

const server = http.createServer((request, response) => {
  console.log(request.url);
  if (request.url === "/") {
    response.writeHead(200, { "content-type": "text/html" });
    response.write(portfolio);
    response.end();
  } else if (request.url === "/portfolio.css") {
    response.writeHead(200, { "content-type": "text/css" });
    response.write(portfolio_css);
    response.end();
  } else if (request.url === "/images/18.png") {
    response.writeHead(200, { "content-type": "image/png" });
    response.write(earth);
    response.end();
  } else if (request.url === "/images/19.png") {
    response.writeHead(200, { "content-type": "image/png" });
    response.write(earth2);
    response.end();
  }
});

server.listen(3000);
