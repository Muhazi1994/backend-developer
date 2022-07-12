"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payment.belongsTo(models.order, {
        foreignKey: "orderId",
      });
    }
  }
  Payment.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      orderId: DataTypes.UUID,
      payment_status: DataTypes.ENUM(["success", "pending", "expired"]),
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
