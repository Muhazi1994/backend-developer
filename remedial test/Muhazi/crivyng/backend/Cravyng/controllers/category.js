const {category} = require("../models");

class Category {
  static async getAllCategory(req, res, next) {
    try {
      const data = await category.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Category not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Category;