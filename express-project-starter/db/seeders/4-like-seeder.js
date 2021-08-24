'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      { like: false, user_id: 1, review_id: 1, createdAt: new Date(), updatedAt: new Date() },
      { like: true, user_id: 2, review_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { like: false, user_id: 3, review_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { like: true, user_id: 4, review_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { like: false, user_id: 5, review_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { like: true, user_id: 6, review_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { like: false, user_id: 7, review_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { like: true, user_id: 8, review_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { like: false, user_id: 9, review_id: 9, createdAt: new Date(), updatedAt: new Date() }
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
    return queryInterface.bulkDelete('Likes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
