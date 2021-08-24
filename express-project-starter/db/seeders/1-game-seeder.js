'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [
      { name: 'Game1', genre: 'Type1', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game2', genre: 'Type2', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game3', genre: 'Type3', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game4', genre: 'Type0', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game5', genre: 'Type5', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game6', genre: 'Type0', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game7', genre: 'Type7', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game8', genre: 'Type0', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Game9', genre: 'Type1', createdAt: new Date(), updatedAt: new Date() }
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
