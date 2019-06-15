'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'ordersmodels',
        'productid'
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'ordersmodels',
        'productid',
        {
          type: Sequelize.INTEGER
        }
    )
  }
};
