// Import express router
const router = require("express").Router();

// Import users controller
const { signUp } = require("../controllers/user");

// Import signin controller
const { signIn } = require("../controllers/signIn");

// Make router
router.post("/signup", signUp);
router.post("/signin", signIn);

// Export router
module.exports = router;
