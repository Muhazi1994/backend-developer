"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.menu.belongsTo(models.users, { foreignKey: "userId" });
      models.menu.belongsTo(models.categories, { foreignKey: "categoryId" });
      models.menu.hasMany(models.cart, { foreignKey: "menuId" });
      models.menu.hasMany(models.orders_menu, { foreignKey: "menuId" });
    }
  }
  menu.init(
    {
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      food: DataTypes.STRING,
      price: DataTypes.FLOAT,
      specialprice: DataTypes.FLOAT,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "menu",
    }
  );
  return menu;
};
