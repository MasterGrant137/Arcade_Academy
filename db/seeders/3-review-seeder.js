'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { content: 'Its My Favorite!', user_id: 1, game_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { content: 'This game was absolutely excellent!', user_id: 2, game_id: 2, createdAt: new Date(), updatedAt: new Date() },
      { content: 'This game was absolutely excellent!', user_id: 3, game_id: 3, createdAt: new Date(), updatedAt: new Date() },
      { content: 'I had some fun playing it.', user_id: 4, game_id: 4, createdAt: new Date(), updatedAt: new Date() },
      { content: 'This game was absolutely excellent!', user_id: 5, game_id: 5, createdAt: new Date(), updatedAt: new Date() },
      { content: 'I had some fun playing it.', user_id: 6, game_id: 6, createdAt: new Date(), updatedAt: new Date() },
      { content: 'This game was absolutely excellent!', user_id: 7, game_id: 7, createdAt: new Date(), updatedAt: new Date() },
      { content: 'I had some fun playing it.', user_id: 8, game_id: 8, createdAt: new Date(), updatedAt: new Date() },
      { content: 'It was okay...', user_id: 9, game_id: 9, createdAt: new Date(), updatedAt: new Date() }
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
    return queryInterface.bulkDelete('Reviews', null, {
      truncate: true,
      cascade: true,
      restartIdentity: true
    });
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
