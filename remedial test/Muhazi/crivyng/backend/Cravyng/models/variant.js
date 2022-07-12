"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class variants extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.variants.belongsTo(models.menu, { foreignKey: "menuId" });
      models.variants.hasMany(models.orderMenu, { foreignKey: "variantId" });
      models.variants.hasMany(models.variantOption, { foreignKey: "variantId" });
    }
  }
  variants.init(
    {
      menuId: DataTypes.INTEGER,
      label: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "variants",
    }
  );
  return variants;
};
