const express = require("express");
const app = express();
const morgan = require("morgan");
const logger = require("./logger");
const auth = require("./auth");

//to add  that middleware to all methodes you have
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("About Page");
});

app.get("/api/v1", (req, res) => {
  res.send("About Page");
});
app.listen(5000, () => {
  console.log("app is listening on port 5000");
});
