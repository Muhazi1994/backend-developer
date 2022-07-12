const path = require("path");
const crypto = require("crypto");
const validator = require("validator");
const { promisify } = require("util");

exports.createCustomerValidator = async (req, res, next) => {
  try {
    const errors = [];

    // Check name is a validation
    if (!validator.isValid(req.body.name)) {
      errors.push("name must be validation");
    }

    // If error
    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    // If image was uploaded
    if (req.files.image) {
      // req.files.image is come from key (file) in postman
      const file = req.files.image;

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
    res.status(500).json({ errors: ["Internal Server Error"] });
  }
};