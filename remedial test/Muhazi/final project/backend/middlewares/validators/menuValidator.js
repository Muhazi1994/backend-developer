const path = require("path");
const crypto = require("crypto");
const cloudinary = require("cloudinary").v2;
const validator = require("validator");
const { promisify } = require("util");
const { category, menu } = require("../../models");
const fs = require("fs");

exports.createMenuValidator = async (req, res, next) => {
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
    if (req.body.specialPrice) {
      const specialPrice = req.body.specialPrice;

      if (!validator.isInt(specialPrice)) {
        errors.push("Special price must be a number");
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    // Validator Image
    if (!(req.files && req.files.find)) {
      errors.push("Please insert menu image");
    } else if (req.files.find) {
      const file = req.files.find((file) => file.fieldname == "image");
      // console.log("===>>>", file);

      if (!file.mimetype.startsWith("image")) {
        errors.push("File must be an image");
      }

      if (file.size > 2000000) {
        errors.push("Image must be less than 2MB");
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }

      let fileName = crypto.randomBytes(16).toString("hex");
      console.log(file.originalname);

      file.originalname = `${fileName}${path.parse(file.originalname).ext}`;

      // const move = promisify(file.mv);

      // await move(`./public/images/${file.name}`);
      // console.log(req.files);
      // console.log("====>", req.files[0].buffer);
      fs.writeFileSync(`./public/images/${file.name}`, req.files[0].buffer);

      const image = await cloudinary.uploader
        .upload(`./public/images/${file.name}`)
        .then((result) => {
          return result.secure_url;
        });

      req.body.image = image;
    }

    next();
  } catch (error) {
    // console.log("INI ERROR ===>>", error);
    res.status(500).json({ success: false, errors: ["Bad Request"] });
  }
};

exports.updateMenuValidator = async (req, res, next) => {
  try {
    const errors = [];
    const updateFood = await menu.findOne({
      where: { id: req.params.id },
    });

    // Validator Update Food Name
    if (updateFood.dataValues.food == req.body.food) {
      errors.push("Please enter new menu name");
    }

    // // Validator Update Category Menu
    if (updateFood.dataValues.categoryId == req.body.categoryId) {
      errors.push("Please enter new category menu");
    }

    if (updateFood.dataValues.price == req.body.price) {
      errors.push("Please enter new price menu");
    }

    if (req.body.specialPrice) {
      const file = req.body.specialPrice;

      if (updateFood.dataValues.specialPrice == file) {
        errors.push("Please enter new specialPrice menu");
      }
    }

    if (updateFood.dataValues.description == req.body.description) {
      errors.push("Please enter new description menu");
    }

    // // Validator Update Image Menu
    if (req.files.image) {
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
    // console.log(error);
    res.status(400).json({ errors: ["Bad request"] });
  }
};
