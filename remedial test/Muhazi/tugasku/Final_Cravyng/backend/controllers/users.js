const { users, order } = require("../models");
// Import encrytion
const { encryptPwd } = require("../helpers/encryption");
const encryption = require("../helpers/encryption");
// Import jwt webson token
const { generateToken, decodeToken } = require("../helpers/jwt");

// Make class user
class UsersController {
  // Endpoint Get All User
  static async getAllUser(req, res, next) {
    try {
      const data = await users.findAll({
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["User not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
  //Endpoint Get Detail User
  static async getDetailUser(req, res, next) {
    try {
      res.setHeader("Access-Control-Allow-Headers", "*");
      const hash = req.headers.token;
      const userData = decodeToken(hash);
      
      const data = await users.findOne({
        where: { id: userData.id },
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
        include: [
          {
            model: order,
            attributes: {include: "rating"}
          }
        ]
      });

      if (!data) {
        return res.status(404).json({ errors: ["Detail user not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
  // Endpoint SignUp
  static async signUp(req, res, next) {
    try {
      
      const {
        name,
        email,
        role,
        password,
        image = "https://res.cloudinary.com/cravyng/image/upload/v1638628389/exmf0il6mb1vrawk6wuz.png",
      } = req.body;
      const hashPassword = encryptPwd(password);
      

      const findEmail = await users.findOne({
        where: {email},
      })

      if (findEmail) {
        return res.status(400).json({
          status: 400,
          message: "Email already registered!",
        });
      }

      const newUser = await users.create({
        name,
        email,
        password: hashPassword,
        role,
        image,
      })

      const data = await users.findOne({
        where: {id: newUser.id},
        attributes: {exclude: ["password","createdAt", "updatedAt", "deletedAt"]},
      })

      const payload = newUser;
      const token = generateToken({payload});

      const createdOrder = await order.create({
        userId: payload.id,
      });

      const Order = await order.findOne({
        where: { id: createdOrder.id },
        attributes: ["id", "userId"],
      });

      return res.status(201).json({ data,token,Order, message: ["Your account has been created"]});
    } catch (error) {
      // console.log(error);
      next(error)
    }
  }
  // Endpoint SignIn
  static async signIn(req, res, next) {
    try {
      // get the input of req.body
      const email = req.body.email;
      const password = req.body.password;

      //   Get user by email
      const dataUser = await users.findOne({
        where: { email: email },
      });

      //   If user wrong input of email or password
      if (!dataUser) {
        return res
          .status(401)
          .json({ statusCode: 401, message: "Please Sign Up First" });
      }

      const hashPassword = dataUser.password;
      let isPwdValid = encryption.isPwdValid(password, hashPassword);

      if (dataUser.email && !isPwdValid) {
        return res
          .status(400)
          .json({ statusCode: 400, message: "Email/password invalid" });
      }

      const payload = dataUser.dataValues;
      const token = generateToken(payload);
      const role = dataUser.dataValues.role;

      const createdOrder = await order.create({
        userId: payload.id,
      });

      const Order = await order.findOne({
        where: {id: createdOrder.id},
        attributes: ["id", "userId"],
      })

      // Send the token
      return res.status(200).json({ message: "Succes login", token, role, Order });
    } catch (error) {
      next(error);
    }
  }
  // Endpoint Update Account
  static async updateUser(req, res, next) {
    try {
      const {image} = req.body;

      const updatedMenu = await users.update(
        {
          image
        },
        {
          where: { id: req.userData.id },
        }
      );
    
      if (updatedMenu[0] === 0) {
        return res.status(404).json({ errors: ["Detail user not found"] });
      }

      const data = await users.findOne({
        where: { id: req.userData.id },
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      });

      if (req.userData.id != data.dataValues.id) {
        return res.status(403).json({ message: "Access denied again" });
      }

      res.status(201).json({ data, message: ["User has been updated"] });
    } catch (error) {
      next(error);
    }
  }
  // Endpoint Delete Account
  static async deleteUser(req, res, next) {
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
