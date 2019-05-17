'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
        'productsmodels',
        'bookyear',
        {
          type: Sequelize.STRING
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn(
        'productsmodels',
        'bookyear',
        {
          type: Sequelize.INTEGER
        }
    )
  }
};
