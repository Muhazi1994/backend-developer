const validator = require("validator");
const { menu } = require("../../models");

exports.createOrderMenuValidator = async (req, res, next) => {
  try {
    const errors = [];

    if (!validator.isInt(req.body.menuId)) {
      errors.push("menuId must be a number");
    }

    if (!validator.isInt(req.body.orderId)) {
      errors.push("orderId must be a number");
    }

    if (req.body.variantId) {
      if (!validator.isInt(req.body.variantId)) {
        errors.push("variantId must be a number");
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }
    }

    if (req.body.variantOptionId) {
      if (!validator.isInt(req.body.variantOptionId)) {
        errors.push("variantOptionId must be a number");
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }
    }

    if (!validator.isInt(req.body.quantity)) {
      errors.push("rating must be a number");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    const findMenu = await menu.findOne({ where: { id: req.body.menuId } });
    if (!findMenu) {
      errors.push("Menu does not exist");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    const { price, specialPrice } = findMenu;

    if (specialPrice !== null) {
      req.body.subTotalPrice =
        parseFloat(req.body.quantity) * parseFloat(specialPrice);
    } else {
      req.body.subTotalPrice =
        parseFloat(req.body.quantity) * parseFloat(price);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: ["Bad Request"] });
  }
};
