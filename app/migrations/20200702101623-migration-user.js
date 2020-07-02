'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) =>
      Promise.all([
        queryInterface.addColumn('Users', 'stock', Sequelize.INTEGER),
        queryInterface.addColumn('Users', 'parent', Sequelize.STRING),
      ]),

  down: async (queryInterface, Sequelize) =>
      Promise.all([
        queryInterface.removeColumn('Users', 'stock'),
        queryInterface.removeColumn('Users', 'parent'),
      ])
};
