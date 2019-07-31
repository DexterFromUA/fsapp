'use strict';
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    bookyear: DataTypes.STRING,
    price: DataTypes.FLOAT,
    fileUrl: DataTypes.STRING
  }, {});
  products.associate = function(models) {
    // associations can be defined here
  };
  return products;
};