const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()
require('dotenv/config')
// ---------------------------------------------------
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ extended: true, limit: '25mb' }));
app.use(cookieParser());
// ---------------------------------------------------
const mongoose = require("mongoose");
const URL ="mongodb+srv://bob:KxyrRTVFmwgZhU4W@cluster0.glv5l.mongodb.net/oh15";
mongoose.connect(URL).catch((err) => console.log(err));
// mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const taksMuhazi = require('./routers/taskMuhazi')
app.use("/taksMuhazi", taksMuhazi);
