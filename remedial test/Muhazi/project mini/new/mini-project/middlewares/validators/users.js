const path = require("path");
const crypto = require("crypto");
const validator = require("validator");
const { promisify } = require("util");
const UsersController = require("../../controllers/users");
const { users } = require("../../models");

exports.getDetailValidator = async (req, res, next) => {
  try {
    if (!validator.isNumeric(req.param.id)) {
      return next({ message: "id not valid", statusCode: 400 });
    }
    next();
  } catch (error) {
    next(error);
  }
};
exports.createUpdateUserValidator = async (req, res, next) => {
  try {
    const errors = [];
    if (
      !validator.isLength(req.body.firstName, {
        min: 5,
      })
    ) {
      errors.push("Please Input First Name at least 5 Characters !");
    }
    if (validator.isEmpty(req.body.lastName, { ignore_whitespace: false })) {
      errors.push("Please input Last Name");
    }
    const findEmail = await users.findOne({
      where: { email: req.body.email },
    });
    if (findEmail) {
      errors.push("Please, fill in correctly !");
    }
    if (!validator.isEmail(req.body.email)) {
      errors.push("Email is not valid");
    }
    if (req.body.password !== req.body.confirmPassword) {
      errors.push("password and confirm password didn't match!");
    }
    if (
      !validator.isStrongPassword(req.body.password, [
        {
          minLength: 10,
          maxLength: 20,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1,
          returnScore: false,
          pointsPerUnique: 0,
          pointsPerRepeat: 0,
          pointsForContainingLower: 10,
          pointsForContainingUpper: 10,
          pointsForContainingNumber: 10,
          pointsForContainingSymbol: 10,
        },
      ])
    ) {
      errors.push(
        "Password must has at least 10 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'"
      );
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ errors: ["Bad request"] });
  }
};
// Import validator
// const validator = require("validator");

// exports.createOrUpdateUserValidator = async (req, res, next) => {
//   try {
//     // Variabel to save errors
//     const errors = [];

//     //   Check input from user
//     if ((validator.isEmpty(req.body.task), { ignore_whitespace: false })) {
//       errors.push("Please input the user");
//     }

//     next();
//   } catch (error) {}
// };
