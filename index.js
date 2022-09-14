var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "momen",
  password: "Mo2men@2468",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
