let mongoose = require("mongoose");

const username = "momen";
const password = "mo2men";
const cluster = "cluster0";
const dbname = "mydb";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.cnrgfls.mongodb.net/${dbname}?retryWrites=true&w=majority`
);

//those validations done by the application itself not mongo
let customerSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = mongoose.model("Customer", customerSchema);
