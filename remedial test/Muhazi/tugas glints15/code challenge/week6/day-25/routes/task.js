const express = require("express"); // Import Express

// Import controllers
const {
  getAllTask,
  getOneTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");

// Import auth validator
const { isSignedIn } = require("../middlewares/validators/auth");

// Make router
const router = express.Router();

router.get("/", isSignedIn, getAllTask);
// router.get("/:id", getOneTask);
router.post("/", isSignedIn, createTask);
// router.put("/:id", updateTask);
// router.delete("/:id", deleteTask);

// Export router
module.exports = router;
