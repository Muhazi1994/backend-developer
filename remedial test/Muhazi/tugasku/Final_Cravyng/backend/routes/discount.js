const express = require("express");

const { isSignedIn } = require("../middlewares/validators/auth");

const {
  getAllDiscount,
  getDetailDiscount,
  createDiscount,
  updateDiscount,
  deleteDiscount,
} = require("../controllers/discount");

const router = express.Router();

router.get("/", getAllDiscount);
router.get("/:id", getDetailDiscount);
router.post("/", isSignedIn, createDiscount);
router.put("/:id", isSignedIn, updateDiscount);
router.delete("/:id", isSignedIn, deleteDiscount);

module.exports = router;
