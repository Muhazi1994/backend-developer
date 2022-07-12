'use strict'

const { Model } = require ('sequelize');
const { sequelize } = require('.');
const users = require('./users');
module.exports = (squelize,DataType) => {
    class Users extends Model {


        static associate(model) {
            model.users.hasMany(model.menu, {
                foreingKey: "userId"
            });
            model.users.hasMany(model.order, {
                foreingKey: "userId"
            });
        }
    };
    Users.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    },
    {
      sequelize,
      paranoid: true,
      timestamp: true,
      modelName: "users"
    }
    );
    return Users
}