const path = require("path");
const crypto = require("crypto");
// const cloudinary = require("cloudinary").v2;
const validator = require("validator");
const { promisify } = require("util");

exports.menuValidator = async (req, res, next) => {
  try {
    const errors = [];

    if (validator.isEmpty(req.body.categoryId, { ignore_whitespace: false })) {
      errors.push("Please enter the menu category");
    }
    if (validator.isEmpty(req.body.food, { ignore_whitespace: false })) {
      errors.push("Please enter the food title");
    }
    if (
      validator.isEmpty(req.body.description, { ignore_whitespace: false })
    ) {
      errors.push("Please enter the description");
    }
    if (!validator.isDate(req.body.price)) {
      errors.push("Please enter menu price");
    }
    if (!validator.isDate(req.body.specialPrice)) {
      errors.push("Please enter menu special price");
    }

    if (!req.body.price) {
      errors.push("Please insert price");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

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

    //   const image = await cloudinary.uploader
    //     .upload(`./public/images/${file.name}`)
    //     .then((result) => {
    //       return result.secure_url;
    //     });

      req.body.image = image;
    }

    if (req.body.image == null) {
      errors.push("Please insert event image");
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, errors: ["Internal Server Error"] });
  }
};