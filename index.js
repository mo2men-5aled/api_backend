var MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://momen:mo2men@cluster0.cnrgfls.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: /^S/ };
  var newvalues = { $set: { name: "Minnie" } };
  dbo
    .collection("customers")
    .updateMany(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log(" document(s) updated");
      db.close();
    });
});
