const express = require("express");
const router = express.Router();
const { isSignedIn } = require("../middlewares/validators/auth");

//Import validator
const {
  createCommentValidator,
} = require("../middlewares/validators/comments");

//Import controller
const {
  getAllComments,
  getDetailComment,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/comments");

//router.route("/").get(getAllComments).post(createComment);
router.get("/", getAllComments);
router.post("/", isSignedIn, createCommentValidator, createComment);

//router.route("/:id").get(getDetailComment).delete(deleteComment);
router.get("/:id", getDetailComment);
router.put("/:id", isSignedIn, updateComment);
router.delete("/:id", deleteComment);
module.exports = router;
