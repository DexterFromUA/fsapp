'use strict';
module.exports = (sequelize, DataTypes) => {
  const productsmodel = sequelize.define('productsmodel', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    bookyear: DataTypes.STRING
  }, {});
  productsmodel.associate = function(models) {
    // associations can be defined here
  };
  return productsmodel;
}