const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: {
    type: String,
    require: true //필수로 널어라는 뜻. 만약 넣어도 되고 넣어도 된다면 밸류로 false을 설정하거나 기입을 하지 않으면 된다.
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("Users", userSchema);

module.exports = User;