const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return "Hello world";
});

app.listen(3000, () => {
  console.log("app started on  3000");
});
