const express = require("express");

const {
  createOrderMenuValidator,
} = require("../middlewares/validators/orderMenu");

const {
  getDetailOrderMenu,
  getOrderMenuByOrderId,
  createorderMenu,
  updateOrderMenu,
  deleteOrderMenu,
} = require("../controllers/orderMenu");

const router = express.Router();

router
  .route("/")
  .get(getOrderMenuByOrderId)
  .post(createOrderMenuValidator, createorderMenu);

router
  .route("/:id")
  .get(getDetailOrderMenu)
  .put(createOrderMenuValidator, updateOrderMenu)
  .delete(deleteOrderMenu);

module.exports = router;
