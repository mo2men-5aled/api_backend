const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");
//static assets
app.use(express.static("./methods-public"));

//parsing from data
app.use(express.urlencoded({ extended: false }));

//parse Json
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
