const { discount } = require("../models");

class Discount {
  // Endpoint Get All Discount
  static async getAllDiscount(req, res, next) {
    try {
      const data = await discount.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      });
      console.log(data);
      if (data.length === 0) {
        return res.status(404).json({ errors: ["Discount not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Get Detail Discount
  static async getDetailDiscount(req, res, next) {
    try {
      const data = await discount.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      });

      if (!data) {
        return res.status(404).json({ errors: ["Detail discount not found"] });
      }

      res.status(200).json({ data });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Create Discount
  static async createDiscount(req, res, next) {
    if (req.userData.role != "merchant") {
      return res
        .status(403)
        .json({ message: "You must signup as a merchant to create discount" });
    }

    try {
      const { title, description, disc, minOrderPrice, code } = req.body;

      const data = await discount.create({
        title,
        description,
        disc,
        minOrderPrice,
        code,
      });
      res.status(201).json({ data, message: ["Success create discount"] });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Update Discount
  static async updateDiscount(req, res, next) {
    if (req.userData.role != "merchant") {
      return res
        .status(403)
        .json({ message: "You must signup as a merchant to update discount" });
    }

    try {
      const { title, description, disc, minOrderPrice, code } = req.body;

      const updatedDiscount = await discount.update(
        {
          title,
          description,
          disc,
          minOrderPrice,
          code,
        },
        { where: { id: req.params.id } }
      );

      if (updatedDiscount[0] === 0) {
        return res.status(404).json({ errors: ["Detail discount not found"] });
      }

      const data = await discount.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
      });

      res.status(201).json({ data, message: ["Discount has been updated"] });
    } catch (error) {
      next(error);
    }
  }

  // Endpoint Delete Menu
  static async deleteDiscount(req, res, next) {
    if (req.userData.role != "merchant") {
      return res
        .status(403)
        .json({ message: "You must signup to delete Discount" });
    }
    try {
      const voucherDiscount = await discount.findOne({
        where: { id: req.params.id },
      });

      if (!voucherDiscount) {
        return res
          .status(400)
          .json({ message: ["Discount not found for delete"] });
      }

      const data = await discount.destroy({
        where: { id: req.params.id },
      });

      res.status(200).json({ message: "Discount has been deleted" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Discount;
