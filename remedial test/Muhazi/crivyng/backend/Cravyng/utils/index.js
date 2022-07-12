const { generateToken, decodeToken } = require("../helpers/jwt");
const { encodePin, compare } = require("./bcrypt");

module.exports = {
  compare,
  encodePin,
  generateToken,
  decodeToken,
};
