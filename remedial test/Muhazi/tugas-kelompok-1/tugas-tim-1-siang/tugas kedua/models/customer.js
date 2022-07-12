'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.customer.hasMany(models.transaction, {
        foreignKey: "id_customer"});
      // define association here
    }
  };
  customer.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      // get: getImage,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "customer",
    }
  );
  return customer;
};