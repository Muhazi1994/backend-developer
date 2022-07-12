const express = require("express");
const app = express();


app.get("/", function (req, res) {
  // consume api

  // dapet response
  // dikirim ke views melalui payload
  res.send("./hello");
});
let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("app is running on 3000");
});
