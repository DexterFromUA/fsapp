'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersmodel = sequelize.define('ordersmodel', {
    userid: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  ordersmodel.associate = function(models) {
    ordersmodel.belongsTo(models.usersModel, {foreignKey: 'userid'});
    ordersmodel.hasMany(models.ordersProducts, {foreignKey: 'orderId'})
  };
  return ordersmodel;
};