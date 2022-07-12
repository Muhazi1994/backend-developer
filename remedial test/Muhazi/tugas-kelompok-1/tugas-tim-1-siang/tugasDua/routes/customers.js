const express = require("express");

// Import validator
const { createCustomerValidator } = require("../middlewares/validators/customers");

// Import controller
const { getAllCustomer, getDetailCustomer, createCustomer, updateCustomer, deleteCustomer } = require("../controllers/customers");

// Make router
const router = express.Router();

router.route("/").post(createCustomerValidator, createCustomer).get(getAllCustomer);

router.route("/:id").get(getDetailCustomer).put(createCustomerValidator, updateCustomer).delete(deleteCustomer);

module.exports = router; // Export router
