'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersmodel = sequelize.define('ordersmodel', {
    userid: DataTypes.INTEGER,
    productid: DataTypes.INTEGER
  }, {});
  ordersmodel.associate = function(models) {
    // ordersmodel.belongsTo(models.usersModel);
    // ordersmodel.hasMany(models.productsmodel);
  };
  return ordersmodel;
};