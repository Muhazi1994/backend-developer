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
      // define association here
      models.order.belongsTo(models.user, { foreignKey: "userId" });
      models.order.belongsTo(models.discount, { foreignKey: "discountId" });
      models.order.hasMany(models.orders_menu, { foreignKey: "orderId" });
    }
  }
  order.init(
    {
      userId: DataTypes.INTEGER,
      discountId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      invoice: DataTypes.STRING,
      totalPrice: DataTypes.FLOAT,
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
