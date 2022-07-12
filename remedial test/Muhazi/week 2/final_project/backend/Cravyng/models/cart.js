"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.cart.belongsTo(models.user, { foreignKey: "userId" });
      models.cart.belongsTo(models.menu, { foreignKey: "menuId" });
    }
  }
  cart.init(
    {
      userId: DataTypes.INTEGER,
      menuId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "cart",
    }
  );
  return cart;
};
