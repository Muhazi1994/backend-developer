"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class topping extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.topping.hasMany(models.order, { foreignKey: "toppingId" });
      models.topping.belongsTo(models.menu, { foreignKey: "menuId" });
    }
  }
  topping.init(
    {
      name: DataTypes.STRING,
      menuId: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "topping",
    }
  );
  return topping;
};
