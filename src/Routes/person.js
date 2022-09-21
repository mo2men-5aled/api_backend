const express = require("express");
const router = express.Router();

router.get("/person", (req, res) => {
  res.send("You have requested a person");
});

module.export = router;
