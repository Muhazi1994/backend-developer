const { order, orderMenu, users, menu } = require("../models");
const sequelize = require("sequelize");

class Summary {
  async salesSummary(req, res, next) {
    try {
      let dataOne = await orderMenu.findAll({
        attributes: [
          [sequelize.fn("sum", sequelize.col("subTotalPrice")), "gross Sales"],
          [sequelize.fn("sum", sequelize.col("subTotalPrice")), "net Sales"],
          [
            sequelize.fn("AVG", sequelize.col("subTotalPrice")),
            "Average Sales Per Transaction",
          ],
        ],
        raw: true,
        include: [
          {
            //join table menu
            model: menu,
            where: { userId: req.userData.id },
            attributes: ["userId"],
            include: [
              {
                //join table user
                model: users,
                attributes: ["name"],
              },
            ],
          },
        ],
      });

      let paidTransactions = await order.findAll({
        where: { status: "paid" },
        attributes: [
          [
            sequelize.fn("sum", sequelize.col("priceTotal")),
            "paid Transactions",
          ],
        ],
        raw: true,
      });

      let unPaidTransactions = await order.findAll({
        where: { status: "unpaid" },
        attributes: [
          [
            sequelize.fn("sum", sequelize.col("priceTotal")),
            "unpaid Transactions",
          ],
        ],
        raw: true,
      });

      let data = await orderMenu.findAll({
        //show only the orderId
        attributes: [
          "orderId",
          [sequelize.fn("sum", sequelize.col("subTotalPrice")), "totalOrder"],
        ],
        group: ["orderMenu.orderId"],
        raw: true,

        include: [
          {
            //join table menu
            model: menu,
            where: { userId: req.userData.id },
            attributes: ["userId"],
            include: [
              {
                //join table user
                model: users,
                attributes: ["name"],
              },
            ],
          },
          {
            //join table order
            model: order,
            attributes: ["createdAt", "status"],
          },
        ],
      });

      if (dataOne.length === 0 && data.length === 0) {
        return res.status(404).json({ errors: ["No Orders Found"] });
      }

      res.status(200).json({
        dataOne,
        paidTransactions,
        unPaidTransactions,
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: ["Internal Server Error"] });
    }
  }
}

module.exports = new Summary();
