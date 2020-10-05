const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended : false}));
mongoose.connect("mongodb+srv://root:1234@cluster0.ojsbm.mongodb.net/mydb?retryWrites=true&w=majority",
  { useNewUrlParser: true, 
    useUnifiedTopology: true 
  });

app.get("/", function(req, res){
  console.log(req);
  res.send("hellow world");
});

app.listen(port, function(){
  console.log(`Server is Stating at https://localhost:${port}`);
});