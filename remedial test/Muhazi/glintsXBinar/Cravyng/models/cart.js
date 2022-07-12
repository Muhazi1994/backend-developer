// "use strict";
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class cart extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
// <<<<<<< HEAD:Cravyng/models/cart.js
//       // define association here
//       models.cart.belongsTo(models.users, {
//         foreignKey: "userId",
//       });
//       models.cart.belongsTo(models.menu, {
//         foreignKey: "menuId",
//       });
// =======
//       models.user.hasMany(models.menu, { foreignKey: "userId" });
//       models.user.hasMany(models.order, { foreignKey: "userId" });
// >>>>>>> 176d3e69b293f153b2fd7de99fb8effa0f554c68:Cravyng/models/user.js
//     }
//   }
//   cart.init(
//     {
// <<<<<<< HEAD:Cravyng/models/cart.js

//       userId: DataTypes.INTEGER,
//       menuId: DataTypes.INTEGER,

// =======
//       name: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.STRING,
//       role: DataTypes.ENUM("customer", "merchant"),
//       image: DataTypes.STRING,
// >>>>>>> 176d3e69b293f153b2fd7de99fb8effa0f554c68:Cravyng/models/user.js
//     },
//     {
//       sequelize,
//       paranoid: true,
//       timestamps: true,
//       modelName: "cart",
//     }
//   );
//   return cart;
// };
