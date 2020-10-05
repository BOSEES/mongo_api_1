const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const mongo_url = process.env.MONGO_URL;

app.use(express.urlencoded({extended : false}));
mongoose.connect(mongo_url,
  { useNewUrlParser: true, 
    useUnifiedTopology: true 
  });

app.get("/", function(req, res){
  res.send("hellow world");
});

app.listen(port, function(){
  console.log(`Server is Stating at https://localhost:${port}`);
});