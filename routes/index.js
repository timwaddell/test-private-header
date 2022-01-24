var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.header("cache-control", "no-cache, must-revalidate");
  res.header("expires", "-1");

  res.render("index", { title: "Express" });
});

module.exports = router;
