// Import express
const express = require("express");

// Import routes
const todo = require("./routes/user");
const task = require("./routes/task");

// Import error Handler
const errorHandler = require("./middlewares/errorHandler");

// Define port
const port = process.env.PORT || 3000;

// Make express app
const app = express();

// Enable req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make routes
app.use("/todo", todo);
app.use("/task", task);

// If routes not exist
app.all("*", (req, res, next) => {
  next({ statusCode: 404, message: "Endpoint not found" });
});

// Enable error handler
app.use(errorHandler);

// Run server
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});


// user event bermasalah
// event dibawah user
// event belongsTo
// hasOne belongsTo sama-sama One to One
// event banyak category
// event miliki satu category
// event Onetomany 
// category hasMany

// date start and start End
// speaker 
// link Zoom di event
// Bookmark composit table
// manytomany belongto user belongstevent
// buat CRUD
// 1 table 2 API
// GetAll category list
// filter started
// katergory
// get my Ivent
// ivent findAll
// coming soon data apa yang kalian mau
// id event 
// explore catergory rendom atau bagaimana
// API getallivnt
// vilter date
// filter category
// filter name
// sort date
// sort category
// sort name

// resent verifikasi 