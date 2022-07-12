const { menu, category } = require("../models");
const { Op, SequelizeScopeError } = require("sequelize");

const pagination = (page, size) => {
  const limit = size ? +size : 8;
  const offset = ((page - 1) * limit) | 0;

  return { limit, offset };
};

const paging = (data, page, limit) => {
  const { count: totalItems, rows: menus } = data;
  const currentPage = page ? +page : 1;
  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, menus, totalPages, currentPage };
};

class Menu {
  // Endpoint Get All Menu
  static async getAllMenu(req, res, next) {
    try {
      const data = await menu.findAll({

        // attributes: { exclude: ["userId"] },
        // include: [
        //   {
        //     model: categories,
        //     attributes: ["name"],
        //   },
        // ],

        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },

      });
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Menu not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Get Menu By Filter Recomended & Most Favorite
  static async getMenuByFilter(req, res, next) {
    try {
      let {
        page = 1,
        limit = 4,
        cat = 1,
        startPr = 10000,
        endPr = 50000,
        orders = "price",
        sort = "ASC",
      } = req.query;

      const data = await menu.findAll({
        where: {
          // categoryId = +cat,
          food: { [Op.between]: [startPr, endPr] },
        },
        attributes: { exclude: ["userId, categoryId"] },
        include: [
          {
            model: category,
            attributes: ["name"],
          },
        ],
        order: [[orders || "price", sort || "ASC"]],
        limit: +limit,
        offset: (+page - 1) * parseInt(limit),
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Menu not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Get Menu By Category
  static async getMenuByCategory(req, res, next) {
    try {
      let { categoryId } = req.params;

      const data = await menu.findAll({
        where: { categoryId },
        include: [{ model: category, attributes: ["name"] }],
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Category menu not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Get Detail Menu
  static async getDetailMenu(req, res, next) {
    try {
      const data = await menu.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt",] },
      });

      if (!data) {
        return res.status(404).json({ errors: ["Detail menu not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Create Menu
  static async createMenu(req, res, next) {
    if (req.userData.role != "merchant") {
      return res
        .status(403)
        .json({ message: "You must signup as a merchant for create menu" });
    }

    try {
      const { food, image, price, specialPrice, description, categoryId } =
        req.body;

      const insertMenu = await menu.create({
        food,
        image,
        price,
        specialPrice,
        description,
        categoryId,
        userId: req.userData.id,
      });

      const data = await menu.findOne({
        where: { id: insertMenu.id },
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      });

      res.status(201).json({ data, message: ["Succes create menu"] });
    } catch (error) {
      // console.log("ini errornya ===>>>", error);
      next(error);
    }
  }

  // Endpoint Update Menu
  static async updateMenu(req, res, next) {
    if (req.userData.role != "merchant") {
      return res
        .status(403)
        .json({ message: "You must signup as a merchant for update menu" });
    }

    try {
      const { food, image, price, specialPrice, description, categoryId } = req.body;
      // console.log("===>>>",req.body.image);

      const updatedMenu = await menu.update(
        {
          food,
          image,
          price,
          specialPrice,
          description,
          categoryId,
        },
        { where: { id: req.params.id } }
      );

      if (updatedMenu[0] === 0) {
        return res.status(404).json({ errors: ["Detail menu not found"] });
      }

      const data = await menu.findOne({
        where: { id: req.params.id },
      });

      if (req.userData.id != data.dataValues.userId) {
        return res.status(403).json({ message: "Access denied" });
      }

      res.status(201).json({ data, message: ["Menu has been updated"] });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Delete Menu
  static async deleteMenu(req, res, next) {
    if (req.userData.role != "merchant") {
      return res
        .status(403)
        .json({ message: "You must signup for delete menu" });
    }
    try {
      const menuUser = await menu.findOne({
        where: { id: req.params.id },
      });

      if (!menuUser) {
        return res.status(400).json({ message: ["Menu not found for delete"] });
      }

      if (req.userData.id != menuUser.dataValues.userId) {
        return res.status(403).json({ message: "Access denied" });
      }

      const data = await menu.destroy({
        where: { id: req.params.id },
      });

      res.status(200).json({ message: "Menu has been deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Menu;
