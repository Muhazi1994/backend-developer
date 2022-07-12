'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Bookmark.belongsTo(models.event, {
        foreignKey: "eventId",
      });
      // define association here
    }
  };
  Bookmark.init(
    {
      id_user: DataTypes.STRING,
      id_event: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      timestamps: true,
      modelName: "Bookmark",
    }
  );
  return Bookmark;
};