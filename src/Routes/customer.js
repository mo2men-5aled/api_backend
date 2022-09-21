let customerModel = require("../modals/customer.modal");
let express = require("express");
let router = express.Router();

//Create a new customer

router.post("/customer", (req, res) => {
  //req.body
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }
  let model = new customerModel(req.body);
  model.save().then((doc) => {
    if (!doc || doc.length === 0) {
      res.status(500).send(doc);
    }
    res.status(201).send("done");
  });
  res.status(500).json(err);
});

//GET
router.get("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("MIssing url parametars: email ");
  }
  customerModel
    .findOne({
      email: req.query.email,
    })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//PUT - Update
router.put("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("MIssing url parametars: email ");
  }

  customerModel
    .findOneAndUpdate(
      {
        email: req.query.email,
      },
      req.body,
      {
        new: true,
      }
    )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//DELETE
router.delete("/customer", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("MIssing url parametars: email ");
  }

  customerModel
    .findOneAndRemove({
      email: req.query.email,
    })
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
