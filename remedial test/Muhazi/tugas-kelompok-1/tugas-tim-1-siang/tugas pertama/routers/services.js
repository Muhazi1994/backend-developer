const express = require("express");

const {
  getAllService,
  getDetailService,
  createService,
  updateService,
  deleteService,
} = require("../controller/services");

const router = express.Router();

router.get("/", getAllService);
router.get("/:id", getDetailService);
router.post("/", createService);
router.put("/:id", updateService);
router.delete("/:id", deleteService);

module.exports = router;
