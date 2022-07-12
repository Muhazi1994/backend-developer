const { users } = require("../models");
// Import encrytion
const { encryptPwd } = require("../helpers/encryption");
const encryption = require("../helpers/encryption");
// Import jwt webson token
const { generateToken } = require("../helpers/jwt");

// Make class user
class UsersController {
  static async signUp(req, res, next) {
    let statusCode;
    const name = req.body.name;
    const email = req.body.email;
    const password = encryptPwd(req.body.password);
    const role = req.body.role;


    // const image = req.body.image;
    const dataUser = { name, email, password, role };

    users
      .create(dataUser)
      .then((users) => {
        if (users) {
          delete users.dataValues.password;
          let output = {
            id: users.dataValues.id,
            name: users.dataValues.name,
            email: users.dataValues.email,
            role: users.dataValues.role,
            statusCode: 201,
          };

          res.status(201).json({
            output,
            messages: "Congrats! You have successfully created an account.",
          });
        }
      })
      .catch((err) => {
        console.log("err", err);
        next(err);
      });
  }
  static async signIn(req, res, next) {
    try {
      // get the input of req.body
      const email = req.body.email;
      const password = req.body.password;

      //   Get user by email
      const data = await users.findOne({
        where: { email: email },
      });
      console.log(data);
      //   If user wrong input of email or password
      if (!data) {
        return res
          .status(400)
          .json({ statusCode: 401, message: "Email/password invalid" });
      }

      let isPwdValid = encryption.isPwdValid(password, data.password);

      if (!isPwdValid) {
        return res
          .status(400)
          .json({ statusCode: 401, message: "Email/password invalid" });
      }

      const { id, name } = data;

      const payload = {
        id,
        name,
        email,
      };

      const token = generateToken(payload);

      //   Send the token

      return res.status(200).json({ message: "login sukses", token });
    } catch (error) {
      next(error);
    }
  }

  static async updateAccount(req, res, next) {
    try {
      const updateData = await users.update(req.body, {
        where: { id: req.userData.id },
      });

      //   If no data updated

      if (updateData[0] === 0) {
        return res.status(404).json({ errors: ["account not found"] });
      }

      //   Find the updated data of task
      const data = await users.findOne({
        where: { id: req.userData.id },
      });

      //   send data of inserted data
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  }

  static async deleteAccount(req, res, next) {
    try {
      //   Delete data
      let data = await users.destroy({
        where: { id: req.params.id },
      });

      // If data deleted is null
      if (!data) {
        return res.status(404).json({ errors: ["account not found"] });
      }

      // If success
      res.status(200).json({ message: "Success delete account" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UsersController;
