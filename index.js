const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Login } = require("./model/model");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
mongoose
  .connect("mongodb://localhost:27017/profile")
  .then(() => {
    console.info("connect successfully");
  })
  .catch(() => {
    console.error("connection error");
  });

//login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const data = await Login.findOne({ user: username, pass: password });
  if (data != null) {
    res.sendFile(__dirname + "/pages/encode.html");
  } else {
    res.sendFile(__dirname + "/pages/login.html");
  }
});

//register
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  const data = await Login.create({ user: username, pass: password });
  if (data != null) {
    res.sendFile(__dirname + "/pages/login.html");
  } else {
    res.sendFile(__dirname + "/pages/register.html");
  }
});
//encode
app.post("/encode", async (req, res) => {
  const { t_id, key, msg, auth_user, photo } = req.body;
});

//decode
app.post("/decode", async (req, res) => {
  const { t_id, key } = req.body;
});
app.listen(3000, () => console.log("Connected to the port 3000..."));
