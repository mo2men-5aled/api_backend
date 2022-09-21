const express = require("express");
const app = express();
const router = require("./Routes/person.js");
const path = require("path");

//console.log date
app.use((req, res, next) => {
  console.log(`${new Date().toString()}`);
  next();
});

//router
app.use(router);

//html,css,js, and images
app.use(express.static("public"));

//handle error 404
app.use((req, res, next) => {
  res.status(404).send("we think you are lost");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, "../public/500.html"));
});

app.listen(3000);
