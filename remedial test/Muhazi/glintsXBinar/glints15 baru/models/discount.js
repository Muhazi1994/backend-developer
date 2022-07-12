"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.discount.hasMany(models.order, { forerignKey: "discountId" });
    }
  }
  discount.init(
    {
      voucher: DataTypes.DECIMAL,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "discount",
    }
  );
  return discount;
};
