var MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://momen:mo2men@cluster0.cnrgfls.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function (err, res) {
    if (err) throw err;
    console.log("Collection created");
    db.close();
  });
});
