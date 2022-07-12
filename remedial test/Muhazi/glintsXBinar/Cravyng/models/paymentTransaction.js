"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class paymentTransaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.paymentTransaction.belongsTo(models.paymentMethod, {
      //   foreignKey: "paymentMethodId",
      // });
      models.paymentTransaction.belongsTo(models.order, {
        foreignKey: "orderId",
      });
    }
  }
  paymentTransaction.init(
    {
      orderId: DataTypes.INTEGER,
      // paymentMethodId: DataTypes.INTEGER,
      status: DataTypes.ENUM(["paid", "unpaid"]),
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "paymentTransaction",
    }
  );
  return paymentTransaction;
};
