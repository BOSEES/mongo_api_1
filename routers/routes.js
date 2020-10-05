const express = require("express");
const router = express.Router();
const User = require("../models/contactModel");

router.get("/", function(req, res) {
  // res.send("hello seocho!!!");
  res.render("index", {name : "김영일"});
});

router.post("/signup", function(req, res){
  console.log(req.body);
  res.send("Success");
});

module.exports = router;