
const router = require("express").Router();
const { isSignedIn } = require("../middlewares/validators/auth");
const { checkout } = require("../controllers/payment");


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

const { getAllOrderMenu } = require("../controllers/orderMenu");
const { salesSummary } = require("../controllers/salesSummary");


router.get("/", getAllUser);
router.get("/history", isSignedIn, getAllOrderMenu);
// router.get("/summary", isSignedIn, salesSummary);
router.get("/myprofile", getDetailUser);
router.post("/signup", createUserValidator, signUp);
router.post("/signin", signIn);
router.put("/", isSignedIn, updateUserValidator, updateUser);
router.delete("/:id", deleteUser);
router.post("/checkout", checkout);
// router.post("/callback", callbackURL);

// Export router
module.exports = router;

