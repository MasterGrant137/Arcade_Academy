'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { fullName: 'User1', email: 'user1@email.com', hashedPassword: '$aB1', screenName: 'PugLife1', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User2', email: 'user2@email.com', hashedPassword: '$aB2', screenName: 'PugLife2', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User3', email: 'user3@email.com', hashedPassword: '$aB3', screenName: 'PugLife3', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User4', email: 'user4@email.com', hashedPassword: '$aB4', screenName: 'PugLife4', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User5', email: 'user5@email.com', hashedPassword: '$aB5', screenName: 'PugLife5', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User6', email: 'user6@email.com', hashedPassword: '$aB6', screenName: 'PugLife6', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User7', email: 'user7@email.com', hashedPassword: '$aB7', screenName: 'PugLife7', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User8', email: 'user8@email.com', hashedPassword: '$aB8', screenName: 'PugLife8', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User9', email: 'user9@email.com', hashedPassword: '$aB9', screenName: 'PugLife9', createdAt: new Date(), updatedAt: new Date() }
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
    return queryInterface.bulkDelete('Users', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
