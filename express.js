const express = require("express");
const app = express();

app.use(function (req, res, next) {
  console.log("Hello Bro");
  next();
});

app.get("/Profile", function (req, res) {
  res.send("Mohammed Bro");
});

app.listen(3000);
