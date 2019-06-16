'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
        'ordersmodels',
        'status',
        {
          type: Sequelize.STRING,
          defaultValue: 'Pending',
          allowNull: false
        }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
        'ordersmodels',
        'status'
    )
  }
};
