require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });
// const cloudinary = require("cloudinary").v2;

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
  test: {

    username: "postgres",
    password: "123456",
    database: "finalproject",
    host: "127.0.0.1",
    dialect: "postgres",

  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      // ssl: {
      //   rejectUnauthorized: false,
      // },
    },
  },
};

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEYCLOUD,
//   api_secret: process.env.API_SECRET,
// });