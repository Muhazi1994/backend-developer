// Import express
const express = require("express");

// Import routes
const users = require("./routes/users");
const categories = require("./routes/categories");


// Import error Handler
const errorHandler = require("./middlewares/errorHandler");
const fileUpload = require("express-fileupload");

// Define port
const port = process.env.PORT || 3000;

// Make express app
const app = express();

// Enable req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());


app.use(express.static('public'));
// Make routes
app.use("/", users);
app.use("/categories", categories);


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

