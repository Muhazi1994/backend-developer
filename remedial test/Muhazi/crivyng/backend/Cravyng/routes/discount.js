const express = require("express");
const router = express.Router();

const { isSignedIn } = require("../middlewares/validators/auth");


const { discountPrice } = require("../controllers/discount");



// router.use("/auth", isSignedIn);
// router.use("/menus", ProductRoutes)
router.post("/discount", isSignedIn, discountPrice)


module.exports= router