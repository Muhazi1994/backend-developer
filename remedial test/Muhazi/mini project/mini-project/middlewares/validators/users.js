const path = require("path");
const crypto = require("crypto");
const validator = require("validator");
const { promisify } = require("util");
const UsersController = require("../../controllers/users");
// const { users } = require ("../../models");

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
    if (validator.isEmpty(req.body.firstName, { ignore_whitespace: false })) {
      console.log()
      errors.push("Please input the user!");
    }
    // const findEmail = await Users.findOne({ where: { email: req.body.email}})
    // if (findEmail) {
    //   errors.push("This email is already registered")
    // }
    if (!validator.isEmail(req.body.email)) {
      errors.push("Email is not valid");
    }
    if (req.body.password !== req.body.confirmPassword){
      errors.push("password and confirm password did'nt match!");
    }
    if (!validator.isStrongPassword(req.body.password)) {
      errors.push(
        "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'"
      );
    }
     if (errors.length > 0) {
       return res.status(400).json({ errors: errors });
     }

    // If image was uploaded
    if (req.files.image) {
      // req.files.image is come from key (file) in postman
      const file = req.files.image

      // Make sure image is photo
      if (!file.mimetype.startsWith("image")) {
        errors.push("File must be an image");
      }

      // Check file size (max 1MB)
      if (file.size > 1000000) {
        errors.push("Image must be less than 1MB");
      }

      // If error
      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }

      // Create custom filename
      let fileName = crypto.randomBytes(16).toString("hex");
      console.log(fileName);

      // Rename the file
      file.name = `${fileName}${path.parse(file.name).ext}`;

      // Make file.mv to promise
      const move = promisify(file.mv);

      // Upload image to /public/images
      await move(`./public/images/${file.name}`);

      // assign req.body.image with file.name
      req.body.image = file.name;
    }

    next();
  } catch (error) {
    console.log(error)
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

