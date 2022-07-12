const express = require("express");

const {
  createServiceValidator,
} = require("../middlewares/validators/services");

const {
  getAllService,
  getDetailService,
  createService,
  updateService,
  deleteService,
} = require("../controllers/services");

const router = express.Router();

router
  .route("/")
  .post(createServiceValidator, createService)
  .get(getAllService);
router
  .route("/:id")
  .get(getDetailService)
  .put(createServiceValidator, updateService)
  .delete(deleteService);
