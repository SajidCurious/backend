const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Mohammed Wajid");
});

app.listen(3000);
