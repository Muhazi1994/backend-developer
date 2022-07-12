const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv/config");

// ---------------------------------------------------
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: true, limit: "25mb" }));
app.use(cookieParser());



app.listen(3000, () => console.log(`app is up und running smoothly`));
module.exports = app;







