const validator = require("validator");
const { orderMenu, discount } = require("../../models");
const sequelize = require("sequelize");

exports.createOrderValidator = async (req, res, next) => {
  try {
    const errors = [];

    req.body.userId = req.userData.id;

    if (req.body.rating) {
      if (!validator.isInt(req.body.rating)) {
        errors.push("rating must be a number");
      }

      if (errors.length > 0) {
        return res.status(400).json({ errorrs: errors });
      }
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

    if (findOrderMenu.length === 0) {
      errors.push("Order Not Found");
    }

    if (errors.length > 0) {
      return res.status(400).json({ errors: errors });
    }

    req.body.priceTotal = findOrderMenu[0].total;

    if (req.body.voucherCode) {
      let data = await discount.findOne({
        where: { code: req.body.voucherCode },
      });

      if (!data) {
        errors.push("you input the wrong code, or the code is not available");
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }

      const { minOrderPrice, disc } = data;

      let check = parseFloat(req.body.priceTotal) < parseFloat(minOrderPrice);

      if (check) {
        errors.push("you have not reached the minimum order value");
      } else {
        let specialOffer = parseFloat(req.body.priceTotal) * parseFloat(disc);
        let result = parseFloat(specialOffer) / 100;

        req.body.priceTotalAftDiscount =
          parseFloat(req.body.priceTotal) - parseFloat(result);
      }

      if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
      }
    }

    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ errors: ["Bad Request"] });
  }
};
