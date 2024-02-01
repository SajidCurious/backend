const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/Profile", function (req, res) {
  res.render("index");
});

app.listen(3000);
