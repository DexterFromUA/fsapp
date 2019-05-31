'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'productsmodels',
        'fileUrl',
        Sequelize.STRING
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'productsmodels',
        'fileUrl'
    )
  }
};
