"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.transaction.belongsTo(models.customer, {
        foreignKey: "id_customer",
      });
      models.transaction.belongsTo(models.good, { foreignKey: "id_good" });
      models.transaction.belongsTo(models.service, {
        foreignKey: "id_service",
      });
    }
  }
  transaction.init(
    {
      id_good: DataTypes.INTEGER,
      id_customer: DataTypes.INTEGER,
      id_service: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
    },
    {
      sequelize,
      paranoid: true, // Enable soft delete (deletedAt)
      timestamps: true, // Enable createdAt and updatedAt
      modelName: "transaction",
    }
  );
  return transaction;
};
