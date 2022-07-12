const validator = require("validator");
const path = require("path");
const crypto = require("crypto");
const { promisify } = require("util");

exports.createServiceValidator = async (req, res, next) => {
  try {
    const errors = [];

    if (validator.isEmpty(req.body.name)) {
      errors.push(`Name Service not valid!`);
    }

    if (req.files.image) {
      const file = req.files.image;

      if (!file.mimetype.startsWith("image")) {
        errors.push("File must be an image");
      }

      if (file.size > 1000000) {
        errors.push("Image must be less than 1MB");
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }

      let fileName = crypto.randomBytes(16).toString("hex");

      file.name = `${fileName}${path.parse(file.name).ext}`;

      const move = promisify(file.mv);

      await move(`./public/images/${file.name}`);

      req.body.image = file.name;
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ errors: ["Bad Request"] });
  }
};
