const express = require("express");
const { isSignedIn } = require("../middlewares/validators/auth");

const { 
    addCart,
    deleteCart,
    showCart, 
} = require("../controllers/cart");

const router = express.Router();

router.post("/:id",isSignedIn,addCart );
router.get("/",isSignedIn,showCart);
router.delete("/:id",isSignedIn, deleteCart);

module.exports = router;
