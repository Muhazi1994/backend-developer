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
      models.menu.belongsTo(models.users, { foreignKey: "userId" });
      models.menu.belongsTo(models.categories, { foreignKey: "categoryId" });
      models.menu.hasMany(models.orderMenu, { foreignKey: "menuId" });
      models.menu.hasMany(models.variants, { foreignKey: "menuId" });
    }
  }
  menu.init(
    {
      userId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      food: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      specialPrice: DataTypes.FLOAT,
      description: DataTypes.STRING,
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
