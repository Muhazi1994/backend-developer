const express = require("express");

const {
  createOrder,
  updateOrderMenu,
  getAllOrders,
} = require("../controllers/orders");

const { isSignedIn } = require("../middlewares/validators/auth");

const {
  createOrderValidator,
  updateOrderValidator,
} = require("../middlewares/validators/orders");

const router = express.Router();

router
  .route("/")
  .post(isSignedIn, createOrderValidator, createOrder)
  .get(getAllOrders);
router.route("/:id").put(isSignedIn, updateOrderValidator, updateOrderMenu);

module.exports = router;
