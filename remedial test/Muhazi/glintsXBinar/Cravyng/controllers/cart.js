const { users, cart, menu } = require("../models");

class Cart {
  async showCart(req, res, next) {
    try {
      const idUser = req.userData.id;
      const { idMenu } = req.params;
      const checkUser = await users.findOne({
        where: { id: idUser },
      });

      if (checkUser.id !== idUser) {
        return res.status(401).json({
          success: false,
          errors: ["You must have permission to Add it."],
        });
      }

      const data = await cart.findAll({
        where: { userId: +idUser },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        include: [
          {
            model: menu,
            attributes: ["food"],
          },
          {
            model: menu,
            attributes: ["price"],
          },
        ],
      });
      if (data.length == 0) {
        return res
          .status(404)
          .json({ success: false, errors: ["Cart is Empty"] });
      }

      res.status(200).json({ success: true, data: data });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, errors: ["Internal Server Error"] });
    }
  }

  async addCart(req, res, next) {
    try {
      const idUser = req.userData.id;
      const { idMenu } = req.params;
      const checkUser = await users.findOne({
        where: { id: idUser },
      });

      if (checkUser.id !== idUser) {
        return res.status(401).json({
          success: false,
          errors: ["You must have permission to delete it."],
        });
      }

      await cart.create({
        userId: +idUser,
        menuId: +idMenu,
      });

      res.status(200).json({ success: true, message: ["Success add to cart"] });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, errors: ["Internal Server Error"] });
    }
  }

  async deleteCart(req, res, next) {
    try {
      const idUser = req.userData.id;
      const { idMenu } = req.params;
      const checkUser = await users.findOne({
        where: { id: idUser },
      });

      if (checkUser.id !== idUser) {
        return res.status(401).json({
          success: false,
          errors: ["You must have permission uncheck it."],
        });
      }
      const deletedData = await cart.destroy({
        where: {
          id: +idMenu,
        },
        force: true,
      });

      res
        .status(200)
        .json({ success: true, message: ["Success deleting data"] });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Cart();
