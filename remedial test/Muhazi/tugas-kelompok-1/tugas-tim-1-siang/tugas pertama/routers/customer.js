const express = require("express"); // Import express

// Import controller
const {
  createCustomer,
  getAllCustomer,
  getDetailCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controller/customer");

// Make router
const router = express.Router();

router.get("/", getAllCustomer);
router.get("/:id", getDetailCustomer);
router.post("/", createCustomer);
router.put("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router; // Export router
