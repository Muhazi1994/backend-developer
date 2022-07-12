const express = require("express");

// Import validator
const { createGoodValidator } = require("../middlewares/validators/goods");

// Import controller
const {
  getAllGoods,
  getDetailGood,
  createGood,
  updateGood,
  deleteGood,
} = require("../controllers/goods");

const router = express.Router();

router.route("/").get(getAllGoods).post(createGoodValidator, createGood);

// It will find route that has /:id first after that it will find is it GET or PUT or DELETE
router
  .route("/:id")
  .get(getDetailGood)
  .put(createGoodValidator, updateGood)
  .delete(deleteGood);
module.exports = router;
