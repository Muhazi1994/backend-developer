// Import validator
const validator = require("validator");

exports.createOrUpdateTaskValidator = async (req, res, next) => {
  try {
    // Variabel to save errors
    const errors = [];

    //   Check input from user
    if ((validator.isEmpty(req.body.task), { ignore_whitespace: false })) {
      errors.push("Please input the task");
    }

    next();
  } catch (error) {}
};
