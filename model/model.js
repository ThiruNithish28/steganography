const mongoose = require("mongoose");
const LoginSchema = new mongoose.Schema({
  user: String,
  pass: String,
});

const Login = mongoose.model("login", LoginSchema);
module.exports = { Login };
