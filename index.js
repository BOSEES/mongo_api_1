const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;
const mongo_url = process.env.MONGO_URL;
const cors = require("cors");
const apiRouter = require("./routers/routes");
const path = require("path");
// const bodyParser = require("body-parser");

app.set("views", path.resolve(__dirname + "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors());

app.use("/api", apiRouter);

mongoose.connect(mongo_url,
  { useNewUrlParser: true, 
    useUnifiedTopology: true 
  });

app.listen(port, function(){
  console.log(`Server is Stating at https://localhost:${port}`);
});