const express = require("express");

const {
  createOrder,
  updateOrder,
  getAllOrders,
  getDetailOrder,
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
router.get("/:id",getDetailOrder);
router.route("/:id").put(isSignedIn, updateOrderValidator, updateOrder);

module.exports = router;
