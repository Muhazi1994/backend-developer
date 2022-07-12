const express = require("express");
// // import controller
// const { createTransaction } = require("../controllers/taskMuhazi");
// // make router
// const router = express.Router();
// // Router
// router.post("/", createTransaction);
// router.get('/')
// // Exports router
// module.exports = router;

// const express = require("express");

// Import validators
// Import controllers
const {
  getAllTask,
  createTask,
  getDetailTask,
  deleteTask,
  updateTask,
} = require("../controllers/taskMuhazi");

const router = express.Router();

// It will find route that has / first after that it will find is it GET or POST
router
  .route("/")
  .get(getAllTask)
  .post(createTask);

// It will find route that has /:id first after that it will find is it GET or PUT or DELETE
router
  .route("/:id")
  .get(getDetailTask)
  .put(updateTask)
  .delete(deleteTask);

module.exports = router;
