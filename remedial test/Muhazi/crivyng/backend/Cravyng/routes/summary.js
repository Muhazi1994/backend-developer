const express = require("express");

const { isSignedIn } = require("../middlewares/validators/auth");

const { getAverageTransactions } = require("../controllers/salesSummary");

const router = express.Router();

router.route("/").get(isSignedIn, getAverageTransactions);

module.exports = router;
