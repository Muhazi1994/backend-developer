const router = require("express").Router();
const { isSignedIn } = require("../middlewares/validators/auth");

// Import User Validator
const {
  createUserValidator,
  updateUserValidator,
} = require("../middlewares/validators/users");

// Import users controller
const {
  getAllUser,
  getDetailUser,
  signUp,
  signIn,
  updateUser,
  deleteUser,
} = require("../controllers/users");

router.get("/", getAllUser);
router.get("/:id", getDetailUser);
router.post("/signup", createUserValidator, signUp);
router.post("/signin", signIn);
router.put("/:id", isSignedIn, updateUserValidator, updateUser);
router.delete("/:id", deleteUser);

// Export router
module.exports = router;
