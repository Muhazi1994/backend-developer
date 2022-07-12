// Import User
const { user } = require("../models");
// Import encrytion
const { encryptPwd } = require("../helpers/encryption");

// Make class user
class UsersController {
  static async signUp(req, res, next) {
    let statusCode;
    const name = req.body.name;
    const email = req.body.email;
    const password = encryptPwd(req.body.password);

    const dataUser = { name, email, password };

    user
      .create(dataUser)
      .then((user) => {
        if (user) {
          statusCode = 201;
          delete user.dataValues.password;
          let output = {
            statusCode,
            userCreated: user,
          };

          res.status(201).json(output);
        }
      })
      .catch((err) => {
        console.log("err", err);
        next(err);
      });
  }
}

module.exports = UsersController;
