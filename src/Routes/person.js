const express = require("express");
const router = express.Router();

router.get("/person", (req, res) => {
  res.send("You have requested a person");
});

//http://localhost:3000/person/thomas
router.get("/person/:name", (req, res) => {
  res.send(`You have requested a person ${req.params.name}`); //thomas
});

module.exports = router;
