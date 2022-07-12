const validator = require("validator");
const { orderMenu } = require("../../models");
const sequelize = require("sequelize");

exports.createOrderValidator = async (req, res, next) => {
  try {
    const errors = [];

    req.body.userId = req.userData.id;

    if (!validator.isInt(req.body.rating)) {
      errors.push("rating must be a number");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errorrs: errors });
    }

    next();
  } catch (error) {
    return res.status(400).json({ errors: ["Bad Request"] });
  }
};

exports.updateOrderValidator = async (req, res, next) => {
  try {
    const errors = [];

    const findOrderMenu = await orderMenu.findAll({
      where: { orderId: req.params.id },
      attributes: [
        "orderId",
        [sequelize.fn("sum", sequelize.col("subTotalPrice")), "total"],
      ],
      group: ["orderMenu.orderId"],
      raw: true,
    });

    if (!findOrderMenu) {
      errors.push("Order Not Found");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    req.body.totalPrice = findOrderMenu[0].total;

    next();
  } catch (error) {
    return res.status(400).json({ errors: ["Bad Request"] });
  }
};
