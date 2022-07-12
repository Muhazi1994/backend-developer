const mongoose = require("mongoose");
const URL =
  "mongodb+srv://bob:KxyrRTVFmwgZhU4W@cluster0.glv5l.mongodb.net/oh15";
mongoose.connect(URL).catch((err) => console.log(err));
// mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
