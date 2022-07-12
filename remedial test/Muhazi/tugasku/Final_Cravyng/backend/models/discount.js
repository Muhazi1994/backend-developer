'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.discount.hasMany(models.order, { foreignKey: "discountId" });
      // define association here
    }
  };
  discount.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      disc: DataTypes.FLOAT,
      minOrderPrice: DataTypes.FLOAT,
      code: DataTypes.STRING,
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