const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const stream = fs.createReadStream("./bigData.txt", "utf8");
    stream.on("open", () => {
      stream.pipe(res);
    });
  })
  .listen(5000);
