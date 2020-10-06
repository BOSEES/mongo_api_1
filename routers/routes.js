const express = require("express");
const router = express.Router();
const User = require("../models/contactModel"); 
const List = require("../models/listModel");

router.get("/", function(req, res) {
  // res.send("hello seocho!!!");
  res.render("index", {name : "김영일"});
});

router.post("/signup", function(req, res, next){

  User.findOne({email : req.body.email}, function(err, user){
    if (err) {
      next(err);
    } else if (user) {
      return res.send("이미 사용된 이메일 입니다.");
    } else {
      const contact = new User();
      contact.name = req.body.name;
      contact.email = req.body.email;
      contact.password = req.body.password;
      contact.gender = req.body.gender;
      contact.phone = req.body.phone;

      contact.save(function(error){
        if (error) {
          console.log(res.json(error));
        } else {
          res.json({
            message : "New Contact createe",
            data : contact
          });
        }
      });
    }
  });
});

router.post("/login", function(req, res, next) {
  const id = req.body.id;
  const password = req.body.password;
  
  User.findOne({email : id}, function(err, user) {
    if (err) {
      return next(err);
    } else if(!user) {
      return res.send("아이디가 없습니다.");
    } else {
      if (user.password !== password) {
        res.send("비밀번호가 틀렸습니다.");
      } else {
        res.send(`welcome to my world ${user.name}`);
      }
    }
  })
});

router.get("/list", function(req, res, next){
  res.render("inputList");
})

router.post("/list", (req, res, next) => {
  const list = new List();

  list.title = req.body.title;
  list.contents = req.body.contents;
  list.author = req.body.author;

  list.save(function(error){
    if (error) {
      console.log(res.json(error));
    } else {
      res.json({
        message : "New Contact createe",
        data : list
      });
    }
  })
})

router.get("/contents", function(req, res , next){
  List.find(function(err, data){
    if (err) {
      next(err);
    } else {
      return res.json(data);
    }
  })
})


module.exports = router;