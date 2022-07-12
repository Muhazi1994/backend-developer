'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.order.belongsTo(models.users, { foreignKey: "userId" });
      models.order.belongsTo(models.discount, { foreignKey: "discountId" });
      models.order.hasMany(models.orderMenu, { foreignKey: "orderId" });
      models.order.hasMany(models.paymentTransaction, {foreignKey: "orderId" });
    }
  };
  order.init(
    {
      userId: DataTypes.INTEGER,
      discountId: DataTypes.INTEGER,
      voucherCode: DataTypes.STRING,
      priceTotal: DataTypes.FLOAT,
      priceTotalAftDiscount: DataTypes.FLOAT,
      status: DataTypes.ENUM("paid", "unpaid"),
      rating: DataTypes.INTEGER,
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