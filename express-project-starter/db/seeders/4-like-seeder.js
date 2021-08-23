'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Likes', [
      { like: true, user_id: 1, review_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { like: true, user_id: 1, review_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { like: false, user_id: 1, review_id: 3, createdAt: new Date(), updatedAt: new Date()},
      { like: true, user_id: 2, review_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { like: true, user_id: 2, review_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { like: false, user_id: 2, review_id: 3, createdAt: new Date(), updatedAt: new Date()}
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
