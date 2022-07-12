const router = require("express").Router();
const { isSignedIn } = require("../middlewares/validators/auth");
const { checkout, callback } = require("../controllers/payment");

// Import User Validator
const {
  createUserValidator,
  updateUserValidator,
} = require("../middlewares/validators/users");
const { checkout, callback} = require("../controllers/payment");
// Import users controller
const {
  getAllUser,
  getDetailUser,
  signUp,
  signIn,
  updateUser,
  deleteUser,
} = require("../controllers/users");

const { getAllOrderMenu } = require("../controllers/orderMenu");
const { salesSummary } = require("../controllers/salesSummary");

router.get("/", getAllUser);
router.get("/history", isSignedIn, getAllOrderMenu);
router.get("/summary", isSignedIn, salesSummary);
<<<<<<< HEAD:Cravyng/routes/users.js
router.get("/:id", getDetailUser);
router.post("/signup", createUserValidator, signUp);
router.post("/signin", signIn);
router.put("/:id", isSignedIn, updateUserValidator, updateUser);
router.delete("/:id", deleteUser);
router.post("/checkout", checkout);
router.post("/callback", callback);
=======
router.get("/myprofile", getDetailUser);
router.post("/signup", createUserValidator, signUp);
router.post("/signin", signIn);
router.post("/payment/:id", checkout);
router.post("/callback", callback);
router.put("/", isSignedIn, updateUserValidator, updateUser);
router.delete("/:id", deleteUser);




>>>>>>> ac876cab3e0fba7b3b255e1a02408d6e65215134:routes/users.js
// Export router
module.exports = router;
