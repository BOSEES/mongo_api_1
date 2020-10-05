const express = require("express");
const app = express();
const port = 8080;

app.get("/", function(req, res){
  console.log(req);
  res.send("hellow world");
});

app.listen(port, function(){
  console.log(`Server is Stating at https://localhost:${port}`);
});