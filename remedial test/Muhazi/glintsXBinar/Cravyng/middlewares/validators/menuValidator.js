const path = require("path");
const crypto = require("crypto");
const cloudinary = require("cloudinary").v2;
const validator = require("validator");
const { promisify } = require("util");
const { category } = require("../../models");

exports.menuValidator = async (req, res, next) => {
  try {
    const errors = [];

    // Validator Empty CategoryId
    if (validator.isEmpty(req.body.categoryId, { ignore_whitespace: false })) {
      errors.push("Please enter the menu category");
    }
    let categoryId = req.body.categoryId;
    let findCategoryId = await category.findOne({
      where: { id: categoryId },
    });
    // Validator Invalid CategoryId
    if (!findCategoryId) {
      errors.push("CategoryId must be 1-11");
    }

    // Validator Food
    if (validator.isEmpty(req.body.food, { ignore_whitespace: false })) {
      errors.push("Please enter the food name");
    }

    // Validator Description
    if (validator.isEmpty(req.body.description, { ignore_whitespace: false })) {
      errors.push("Please enter the food description");
    }

    // Validator Price
    if (!req.body.price) {
      errors.push("Please insert menu price");
    }
    if (!validator.isInt(req.body.price)) {
      errors.push("Price must be number");
    }

    // Validator Special Price
    if (!validator.isInt(req.body.specialPrice)) {
      errors.push("Please enter menu special price");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    // Validator Image
    if (!(req.files && req.files.image)) {
      errors.push("Please insert menu image");
    } else if (req.files.image) {
      const file = req.files.image;
      // console.log("===>>>", file);

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

      const image = await cloudinary.uploader.upload(`./public/images/${file.name}`).then((result) => {
        return result.secure_url;
      });

      req.body.image = image;
    };

    next();
  } catch (error) {
    console.log("INI ERROR ===>>",error);
    res.status(500).json({ success: false, errors: ["Internal Server Error"] });
  }
};
