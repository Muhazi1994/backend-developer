const { menu, category } = require("../models");
const { Op } = require("sequelize");

class Menu {
  static async getAllMenu(req, res, next) {
    try {
        const data = await menu.findAll({
            attributes: { exclude: ["userId", "categoryId",]},
            include: [{
                model: category,
                attributes: ['name']
            }],
    });
    if (data.length === 0) {
        return res.status(404).json({ errors: ["Menu not found"] });
    }

    res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Get Menu By Filter Recomende & Most Favorite
  static async getMenuByFilter(req, res, next) {
    try {
      let {
          page = 1,
          limit = 4,
          cat = 1,
          startPr =10000,
          endPr=50000,
          orders = "food",
          sort = "ASC"
      } = req.query

      const data = await menu.findAll({
          where: {
              food: {[Op.between]: [startPr,endPr]}
          },
        attributes: { exclude: ["userId, categoryId"] },
        include: [{ 
            model: category,
            attributes:['name'],
        }],
        limit: +limit,
        offset: ( +page - 1 ) * parseInt(limit)
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
      const categories = req.query.category;
      const findOptions = {
        include: [],
      };

      if (categories && categories != "") {
        findOptions.include.push({
          model: category,
          where: {
            name: {
              [Op.like]: `%${categories}%`,
            },
          },
        });
      }

      const menus = await menu.findAll(findOptions);

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Category menu not found"] });
      }

      res.status(200).json({ menus });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Get Detail Menu
  static async getDetailMenu(req, res, next) {
    try {
      const data = await menu.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["userId"] },
      });

      if (data.length === 0) {
        return res.status(404).json({ errors: ["Detail menu not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Create Menu
  static async createMenu(req, res, next) {
    try {
      const { name, image, price, specialPrice, description, categoryId } =
        req.body;

      const insertMenu = await menu.create({
        food,
        image,
        price,
        specialPrice,
        description,
        categoryId,
        userId: req.loginUser.id,
      });

      const data = await menu.findOne({
        where: { id: insertMenu.id },
      });

      res.status(201).json({ data, message: ["Succes create menu"] });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Update Menu
  static async updateMenu(req, res, next) {
    try {
      const { name, image, price, specialPrice, description, categoryId } =
        req.body;

      const updatedMenu = await menu.update(
        {
          name,
          image,
          price,
          specialPrice,
          description,
          categoryId,
        },
        { where: { id: req.params.id } }
      );

      const data = await menu.findOne({
        where: { id: req.params.id },
      });

      res.status(201).json({ data, message: ["Menu has been updated"] });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Delete Menu
  static async deleteMenu(req, res, next) {
    try {
      const menuUser = await menu.findOne({
        where: { id: req.params.id },
      });

      if (!menuUser) {
        return res.status(400).json({ message: ["Menu not found for delete"] });
      }

      if (!menuUser.userId !== req.loginUser.id) {
        return res.status(401).json({ errors: ["Access denied"] });
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