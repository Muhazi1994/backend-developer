'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.paymentMethod.hasMany(models.paymentTransaction, {foreignKey: "paymentMethodId"});
    }
  };
  paymentMethod.init(
    {
      type: DataTypes.STRING,
      accNumber: DataTypes.STRING,
      accName: DataTypes.STRING,
      accBank: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "paymentMethod",
    }
  );
  return paymentMethod;
};