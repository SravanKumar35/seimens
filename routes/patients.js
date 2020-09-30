var express = require("express");
var router = express.Router();
const connection = require("../db_connection");

router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM patients", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
