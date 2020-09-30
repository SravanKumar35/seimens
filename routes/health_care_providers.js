var express = require("express");
var router = express.Router();
const connection = require("../db_connection");


router.get("/", function (req, res, next) {
  connection.query("SELECT * FROM health_providers", (err, rows, fields) => {
    if (!err) {
      res.send(rows);
    } else {
      res.send(err);
    }
  });
});

router.post("/", function(req, res, next) {
  data = req.body
  connection.query("INSERT INTO health_providers SET?", data, (err, rows, fields) => {
    if(!err) {
      res.send("Sucess")
    }
    else {
      res.send(err)
    }
  })
})

router.post("/register", function(req, res, next) {
  data = req.body
  connection.query("INSERT INTO health_providers SET?", data, (err, rows, fields) => {
    if(!err) {
      res.send("Sucess")
    }
    else {
      res.send(err)
    }
  })
})

module.exports = router;
