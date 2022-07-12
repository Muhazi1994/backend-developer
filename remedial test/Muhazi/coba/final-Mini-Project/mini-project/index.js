const express = require("express");
const fileUpload = require("express-fileupload");
// Import routes
const router = require("./routes/index");
// const users = require("./routes/users");
// const events = require("./routes/events");
// const categories = require("./routes/categories");
const errorHandler = require("./middlewares/errorHandler");
// const bookmarks = require("./routes/bookmarks");
// const comments = require("./routes/comments");
// const ratings = require("./routes/ratings");
const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();
const corsOptions = {
  origin: "*",
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Content-Length",
    "X-Requested-With",
    "Accept",
  ],
  methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload());

app.use(express.static("public"));
/* Make routes */
app.use("/", router);
app.all("*", (req, res, next) => {
  next({ statusCode: 404, message: "Endpoint not found" });
});
app.use(errorHandler);

if (process.env.NODE_ENV !== "test") {
  /* Run server */
  app.listen(port, () => console.log(`Server running on ${port}`));
}
module.exports = app;


// https://www.bezkoder.com/node-js-mongodb-auth-jwt/