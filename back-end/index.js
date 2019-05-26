const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/about", (req, res) => {
  res.send("about");
});

app.listen(3065, () => {
  console.log(`server is running on http://localhost:3065`);
});
