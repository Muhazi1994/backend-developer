const path = require("path");
const crypto = require("crypto");
const { promisify } = require("util");
const validator = require("validator");
const cloudinary = require("cloudinary").v2;
const encryption = require("../../helpers/encryption");
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
exports.createUserValidator = async (req, res, next) => {
  try {
    const errors = [];
    // if (
    //   !validator.isLength(req.body.name, {
    //     min: 5,
    //   })
    // ) {
    //   errors.push("Please Input First Name at least 5 Characters !");
    // }

    if (validator.isEmpty(req.body.name, { ignore_whitespace: false })) {
      errors.push("Please input restaurant name");
    }
    const findEmail = await users.findOne({
      where: { email: req.body.email },
    });
    if (findEmail) {
      errors.push("Email already registered!!");
    }
    if (!validator.isEmail(req.body.email)) {
      errors.push("Email is not valid");
    }
    if (req.body.password !== req.body.confirmPassword) {
      errors.push("Password and confirm Password didn't match!");
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

exports.updateUserValidator = async (req, res, next) => {
  try {
    const errors = [];

    // Validator Update Name
    if (req.userData.name == req.body.name) {
      errors.push("Please enter new restaurant name");
    }

    // Validator Update Email
    if (req.userData.email === req.body.email) {
      errors.push("Please enter new email");
    }

    if (!validator.isEmail(req.body.email)) {
      errors.push("Email is not valid oke");
    }

    // Validator Image
    if (!(req.files && req.files.image)) {
      errors.push("Please insert menu image");
    } else if (req.files.image) {
      const file = req.files.image;

      if (!file.mimetype.startsWith("image/")) {
        errors.push("File must be an image");
      }

      if (file.size > 2000000) {
        errors.push("Image must be less than 2MB");
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }

      let fileName = crypto.randomBytes(16).toString("hex");

      file.name = `${fileName}${path.parse(file.name).ext}`;

      const move = promisify(file.mv);

      await move(`./public/images/${file.name}`);

      const image = await cloudinary.uploader
        .upload(`./public/images/${file.name}`)
        .then((result) => {
          return result.secure_url;
        });

      req.body.image = image;
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
