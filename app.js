const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello World :)");
  }
  if (req.url == "/about") {
    res.write("this is the about page");
  }
  return res.write(`<div>
      <div>oops</div>
      <a href="/">back home</a>
    </div>`);
});

server.listen(5050);
