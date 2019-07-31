require("dotenv").config();

module.exports = env => {
  if (env === "test") {
    return {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.DB_PORT,
      dialect: "postgres"
    };
  }

  if (env === "production") {
    return {
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.DB_PORT,
      dialect: "postgres"
    };
  }

  return {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    dialect: "postgres"
  };
};
