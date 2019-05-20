'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'productsmodels',
        'price',
        Sequelize.FLOAT
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'productsmodels',
        'price'
    )
  }
};
