'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersProducts = sequelize.define('ordersProducts', {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {});
  ordersProducts.associate = function(models) {
    ordersProducts.belongsTo(models.ordersmodel, {foreignKey: 'id'});
    //ordersProducts.belongsTo(models.productsmodel, {foreignKey: 'id'})
  };

  return ordersProducts;
};