'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserOtp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      UserOtp.hasOne(models.otpAttempt, {
        foreignKey: 'otp_id',
        as: 'attempts'
      })
    }
  };
  UserOtp.init({
    code: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserOtp',
  });
  return UserOtp;
};