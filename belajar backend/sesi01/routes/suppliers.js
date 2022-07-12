const express = require("express");

// Import validators
const {
  createOrUpdateSupplierValidator,
} = require("../middelwares/validators/suppliers");

// Import controllers
const {
  getAllSuppliers,
  createSupplier,
  getDetailSupplier,
  deleteSupplier,
  updateSupplier,
} = require("../controllers/suppliers");

const router = express.Router();

// It will find route that has / first after that it will find is it GET or POST
router
  .route("/")
  .get(getAllSuppliers)
  .post(createOrUpdateSupplierValidator, createSupplier);

// It will find route that has /:id first after that it will find is it GET or PUT or DELETE
router
  .route("/:id")
  .get(getDetailSupplier)
  .put(createOrUpdateSupplierValidator, updateSupplier)
  .delete(deleteSupplier);

module.exports = router;
