const express = require("express");

const { createOrder, updateOrderMenu } = require("../controllers/orders");

const { isSignedIn } = require("../middlewares/validators/auth");

const {
  createOrderValidator,
  updateOrderValidator,
} = require("../middlewares/validators/orders");

const router = express.Router();

router.route("/").post(isSignedIn, createOrderValidator, createOrder);
router.route("/:id").put(isSignedIn, updateOrderValidator, updateOrderMenu);

module.exports = router;

