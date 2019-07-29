const Sequelize = require("sequelize");

require("dotenv").config();

module.exports = () => {
  const db = new Sequelize(
    process.env.DATABASE,
    process.env.USERNAME,
    process.env.PASSWORD,
    {}
  );

  const products = db.define('product', {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    bookyear: Sequelize.STRING,
    price: Sequelize.FLOAT,
    fileUrl: Sequelize.STRING
  });

  const users = db.define('user', {
    name: Sequelize.STRING,
    lastName: Sequelize.STRING,
    mail: Sequelize.STRING,
    password: Sequelize.STRING,
    role: Sequelize.STRING
  });

  const orders = db.define('order', {
    userid: Sequelize.INTEGER,
    status: Sequelize.STRING
  });

  return { products, users, orders };
};
