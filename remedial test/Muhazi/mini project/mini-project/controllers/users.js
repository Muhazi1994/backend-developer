const { users, event, comment, bookmarks } = require("../models");
// Import encrytion
const { encryptPwd } = require("../helpers/encryption");
const encryption = require("../helpers/encryption");
// Import jwt webson token
const { generateToken } = require("../helpers/jwt");

// Make class user
class UsersController {
  static async signUp(req, res, next) {
    let statusCode;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const password = encryptPwd(req.body.password);
    console.log(password);
    const image = req.body.image;
    console.log(image);
    const dataUser = { firstName, lastName, email, password, image };
    console.log(dataUser);

    users
      .create(dataUser)
      .then((users) => {
        if (users) {
          statusCode = 201;
          delete users.dataValues.password;
          let output = {
            statusCode,
            userCreated: users,
          };

          res.status(201).json(output);
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
      // console.log(user.id);
      // console.log(user.email);
      // console.log(user.firstName);
      // console.log(user.lastName);

      const { id, firstName, lastName } = data;

      const payload = {
        id,
        firstName,
        lastName,
        email,
      };

      const token = generateToken(payload);

      //   Send the token

      return res.status(200).json({ message: "login sukses", token });
    } catch (error) {
      next(error);
    }
  }
  // static async updateAccount(req, res, next) {
  //   try {
  //     const updateData = await users.update(req.body,
  //        {
  //       where: { id: req.params.id }
  //     });
  //     console.log(updateData)
  //     if (updateData[0] === 0) {
  //       return res.status(404).json({ errors: ["account not found"] });
  //     }
  //     const data = await users.findOne({
  //       where: { id: req.params.id },

  //       attributes: { exclude: ["userId"] },
  //       include: [
  //         {
  //           model: comment,
  //         },
  //         {
  //           model: bookmarks,
  //           include: [
  //             {
  //               model: event,
  //             },
  //           ],
  //         },
  //       ],
  //     });
  //     res.status(201).json({ data });
  //   } catch (error) {
  //     next(error);
  //   }
  // }
  static async updateAccount(req, res, next) {
    try {
      //   Update data task

      const updateData = await users.update(req.body, {
        where: { id: req.params.id, 
        },
      });

      //   If no data updated

      if (updateData[0] === 0) {
        return res.status(404).json({ errors: ["account not found"] });
      }

      //   Find the updated data of task
      const data = await users.findOne({
        where: { id: req.userData.id,
         },
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
        where: { id: req.userData.id },
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

  // static async getAll(req, res) {
  // //   let token = req.headers.token;
  // //   let userData = getUserData(token)
  // //   // kita filter get usernya berdasarkan company id yg lagi login
  // //   // let userCompanyId = userData.companyId;
  //   const users = await User.findAll({
  // //   //   where: {
  // //   //     companyId: userCompanyId
  // //   //   },
  // //   //   include: Company
  // //   // });
  // //   res.status(200).json(users)
  // // }
}
module.exports = UsersController;


// https://gitlab.com/binarxglints_batch15/miniproject/team-a/backendteam_a/-/tree/development
// https://timcevent.herokuapp.com