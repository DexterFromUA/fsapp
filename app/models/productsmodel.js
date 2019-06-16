'use strict';
module.exports = (sequelize, DataTypes) => {
  const productsmodel = sequelize.define('productsmodel', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    bookyear: DataTypes.STRING,
    price: DataTypes.FLOAT,
    fileUrl: DataTypes.STRING
  }, {});
  productsmodel.associate = function(models) {
    //productsmodel.hasMany(models.ordersProducts, {foreignKey: 'productId', sourceKey: 'id'})
  };
  return productsmodel;
}