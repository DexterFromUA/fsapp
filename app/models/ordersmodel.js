'use strict';
module.exports = (sequelize, DataTypes) => {
  const ordersmodel = sequelize.define('ordersmodel', {
    userid: DataTypes.INTEGER,
    productid: DataTypes.INTEGER
  }, {});
  ordersmodel.associate = function(models) {
    // associations can be defined here
  };
  return ordersmodel;
};