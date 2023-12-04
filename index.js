const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Login } = require("./model");

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
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(req.body);
  //   res.send("hello");
  const data = await Login.findOne({ user: username, pass: password });
  if (data != null) {
    res.sendFile(__dirname + "/pages/encode.html");
  }
});
app.listen(3000, () => console.log("Connected to the port 3000..."));
