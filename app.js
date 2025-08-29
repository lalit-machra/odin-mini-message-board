const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8080, (req, res) => {
  console.log("server is running on http://localhost:8080");
});