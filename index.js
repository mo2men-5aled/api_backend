var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mo2men@2468",
  database: "mydb",
});

con.connect(function (err) {
  var adr = "Mountain 21";
  //var sql = `SELECT * FROM customers WHERE address = "${adr}"`;
  var sql = "SELECT * FROM customers WHERE address = " + mysql.escape(adr);
  if (err) throw err;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
