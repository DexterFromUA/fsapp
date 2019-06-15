'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'ordersmodels',
        'count'
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'ordersmodels',
        'count',
        Sequelize.INTEGER
    )
  }
};
