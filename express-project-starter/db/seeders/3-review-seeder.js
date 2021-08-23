'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { content: 'This is a pretty good game.', user_id: 1, game_id: 1, createdAt: new Date(), updatedAt: new Date()},
      { content: 'I\'m less than enthused.', user_id: 2, game_id: 2, createdAt: new Date(), updatedAt: new Date()},
      { content: 'What site am I on?', user_id: 3, game_id: 3, createdAt: new Date(), updatedAt: new Date()}
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
    return queryInterface.bulkDelete('Reviews', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
