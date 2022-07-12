const express = require("express");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const users = require("./routes/users");
const menu = require("./routes/menu");
const orders_menu = require("./routes/orders-menu");
const orders = require("./routes/orders");


const errorHandler = require("./middlewares/errorHandler");

const port = process.env.PORT || 3000;
const cors = require("cors");
const app = express();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEYCLOUD,
  api_secret: process.env.API_SECRET,
});
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
app.use(multer().any({ storage: multer.memoryStorage() }));
app.use(fileUpload());

app.use(express.static("public"));


app.use("/user", users);
app.use("/menu", menu)
app.use("/ordersmenu", orders_menu);
app.use("/order", orders);

// app.use("/comments", comments);
// app.use("/bookmarks", bookmarks);
// app.use("/ratings", ratings);
app.all("*", (req, res, next) => {
  next({ statusCode: 404, message: "Endpoint not found" });
});
app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port}!`));
