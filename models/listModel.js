const mongoose = require("mongoose");
const listSchema = mongoose.Schema({
  title : {
    type : String,
    require : true
  },
  contents : {
    type : String,
    require : true
  },
  author : {
    type : String,
    require : true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

const List = mongoose.model("List",listSchema);

module.exports = List;