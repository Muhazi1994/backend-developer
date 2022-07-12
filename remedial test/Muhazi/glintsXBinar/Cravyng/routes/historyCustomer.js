const express = require("express");

const { isSignedIn } = require("../middlewares/validators/auth");

const { getAllOrderMenu } = require("../controllers/orders-menu");

const router = express.Router();

router.route("/").get(isSignedIn, getAllOrderMenu);

module.exports = router;
