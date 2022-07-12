const path = require("path");
const crypto = require("crypto");
const validator = require("validator");
const { promisify } = require("util");
const { comments } = require("../../models");

exports.createCommentValidator = async (req, res, next) => {
  try {
    const errors = [];
    if (
      !validator.isLength(req.body.comment, {
        min: 1,
      })
    ) {
      errors.push(
        "Sorry, an error occurred when submitting! Comment still empty!"
      );
    }

    if (
      !validator.isLength(req.body.comment, {
        max: 200,
      })
    ) {
      errors.push(
        "Sorry, an error occurred when submitting! Comment max 200 characters!"
      );
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ errors: ["Bad Request"] });
  }
};
