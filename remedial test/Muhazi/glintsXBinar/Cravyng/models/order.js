"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.order.belongsTo(models.user, { foreignKey: "userId" });
      models.order.hasMany(models.orderMenu, { foreignKey: "orderId" });
      models.order.hasMany(models.paymentTransaction, {
        foreignKey: "orderId",
      });
    }
  }
  order.init(
    {
      userId: DataTypes.INTEGER,
      voucherCode: DataTypes.STRING,
      priceTotal: DataTypes.FLOAT,
      priceTotalAftDiscount: DataTypes.FLOAT,
      rating: DataTypes.INTEGER,
      status: DataTypes.ENUM("paid", "unpaid"),
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "order",
    }
  );
  return order;
};
