"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class room_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.room_type.hasMany(models.rooms, { foreignKey: "type_id" });
    }
  }
  room_type.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      // id_: DataTypes.INTEGER,
      max_book_time: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true, // Enable soft delete (deletedAt)
      timestamps: true, // Enable createdAt and updatedAt
      modelName: "room_type",
    }
  );
  return room_type;
};
