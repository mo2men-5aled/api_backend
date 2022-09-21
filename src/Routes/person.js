const express = require("express");
const router = express.Router();

//http://localhost:3000/person?name=thomas
router.get("/person", (req, res) => {
  if (req.query.name) {
    res.send(`you have requested for a person ${req.query.name}`); //thomas
  }

  res.send("You have requested a person");
});

//http://localhost:3000/person/thomas
router.get("/person/:name", (req, res) => {
  res.send(`You have requested a person ${req.params.name}`); //thomas
});

router.get("/error", (req, res) => {
  throw new Error("this is a forced error");
});

module.exports = router;
