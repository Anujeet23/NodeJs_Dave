const express = require("express");
const router = express.Router();
const data = {};
data.employees = require("../../data/employees.json");

router
  .route("/")
  .get((req, res) => {
    res.json(data.employees);
  })
  .post((req, res) => {
    req.json({
      "firstname": res.body.firstname,
      "lastname": res.body.lastname,
    });
  })
  .put((req, res) => {
    res.json({
      "firstname": res.body.firstname,
      "lastname": res.body.lastname,
    });
  })
  .delete((req, res) => {
    res.json({
      "id": req.bosy.id,
    });
  });

router.route("/:id").get((req, res) => {
  res.json({ id: req.params.id });
});

module.exports = router;
