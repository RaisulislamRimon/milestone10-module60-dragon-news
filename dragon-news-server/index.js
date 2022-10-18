const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
// const port = 5000;

app.get("/", (req, res) => {
  res.send("NEWS API RUNNING");
});

app.listen(port, () => {
  console.log(`Dragon News Server running on port `, port);
});
