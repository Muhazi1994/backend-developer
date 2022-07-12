"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderMenu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.orderMenu.belongsTo(models.menu, { foreignKey: "menuId" });
      models.orderMenu.belongsTo(models.order, { foreignKey: "orderId" });
    }
  }
  orderMenu.init(
    {
      orderId: DataTypes.INTEGER,
      menuId: DataTypes.INTEGER,
      toppingId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      subTotalPrice: DataTypes.FLOAT,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "orderMenu",
    }
  );
  return orderMenu;
};
