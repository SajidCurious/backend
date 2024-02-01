const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Hello Bro");
  next();
});

app.get("/profile/:username", function (req, res) {
  res.send(`Hello from ${req.params.username}`);
});

app.listen(3000);
