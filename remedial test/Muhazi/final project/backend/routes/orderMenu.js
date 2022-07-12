const express = require("express");

const {
  createOrderMenuValidator,
  updateOrderMenuValidator,
} = require("../middlewares/validators/orderMenu");

const {
  getAllOrderMenu,
  getDetailOrderMenu,
  getOrderMenuByOrderId,
  createorderMenu,
  updateOrderMenu,
  deleteOrderMenu,
} = require("../controllers/orderMenu");

const router = express.Router();

router
  .route("/")
  .get(getAllOrderMenu)
  .get(getOrderMenuByOrderId)
  .post(createOrderMenuValidator, createorderMenu);

router
  .route("/:id")
  .get(getDetailOrderMenu)
  .put(updateOrderMenuValidator, updateOrderMenu)
  .delete(deleteOrderMenu);

module.exports = router;
