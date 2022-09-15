var MongoClient = require("mongodb").MongoClient;
const url =
  "mongodb+srv://momen:mo2men@cluster0.cnrgfls.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo
    .collection("customers")
    .find({}, { projection: { address: 1 } })
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
});
