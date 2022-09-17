const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("Hello Worllllllllllld :)");
    res.end();
  } else if (req.url == "/about") {
    res.write("this is the about page");
    res.end();
  } else {
    res.end(`<div>
      <div>oops</div>
      <a href="/">back home</a>
    </div>`);
  }
});

server.listen(5050);
