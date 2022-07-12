'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Job, {
        foreignKey: 'job',
        as: 'jobDetail'
      });
      User.belongsTo(models.Company, {
        foreignKey: 'company_id',
        as: 'company'
      });
    }
  };
  User.init({
    firstname: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    },
    lastname: DataTypes.STRING,
    dob: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    job: DataTypes.INTEGER,
    is_verified: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    company_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};