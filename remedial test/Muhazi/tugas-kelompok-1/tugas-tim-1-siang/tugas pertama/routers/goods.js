const express = require("express"); // Import express

// Import controller
const {
  getAllGoods,
  getDetailGood,
  createGood,
  updateGood,
  deleteGood,
} = require("../controller/goods");

// Make router
const router = express.Router();

router.get("/", getAllGoods);
router.get("/:id", getDetailGood);
router.post("/", createGood);
router.put("/:id", updateGood);
router.delete("/:id", deleteGood);

module.exports = router;
