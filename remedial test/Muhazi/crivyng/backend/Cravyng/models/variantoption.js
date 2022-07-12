'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class variantOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.variantOption.belongsTo(models.variants, { foreignKey: "variantId" });
      models.variantOption.hasMany(models.orderMenu, { foreignKey: "variantOptionId" });
    }
  };
  variantOption.init(
    {
      variantId: DataTypes.INTEGER,
      label: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "variantOption",
    }
  );
  return variantOption;
};