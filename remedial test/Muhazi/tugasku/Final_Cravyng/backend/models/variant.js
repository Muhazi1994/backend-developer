'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class variant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.variant.belongsTo(models.menu, { foreignKey: "menuId" });
      models.variant.hasMany(models.orderMenu, { foreignKey: "variantId" });
      models.variant.hasMany(models.variantOption, { foreignKey: "variantId" });
    }
  };
  variant.init(
    {
      menuId: DataTypes.INTEGER,
      label: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "variant",
    }
  );
  return variant;
};