const express = require("express");
// import controller
const { createTransaction } = require("../controllers/transactions");
// make router
const router = express.Router();
// Router
router.post("/", createTransaction);
// Exports router
module.exports = router;
