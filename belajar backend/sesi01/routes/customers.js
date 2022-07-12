const express = require("express");

// Import validator
const {
  createCustomerValidator,
} = require("../middelwares/validators/customers");

// Import controller
const {
  getAllCustomer,
  getDetailCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customers");

// Make router
const router = express.Router();

router.get("/", getAllCustomer);
router.get("/:id", getDetailCustomer);
router.post(createCustomerValidator, createCustomer);
router.put(createCustomerValidator, updateCustomer);
router.delete("/:id", deleteCustomer);

module.exports = router; // Export router
