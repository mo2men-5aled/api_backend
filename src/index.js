const express = require("express");
const router = require("./Routes/person.js");

const app = express();
app.use(router);
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
