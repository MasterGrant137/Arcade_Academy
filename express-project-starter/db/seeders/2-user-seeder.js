'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { fullName: 'User0', email: 'user0@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey0', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User1', email: 'user1@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey1', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User2', email: 'user2@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey2', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User3', email: 'user3@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey3', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User4', email: 'user4@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey4', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User5', email: 'user5@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey5', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User6', email: 'user6@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey6', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User7', email: 'user7@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey7', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User8', email: 'user8@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey8', createdAt: new Date(), updatedAt: new Date()},
      { fullName: 'User9', email: 'user9@email.com', hashedPassword: 'xx00', screenName: 'MrDonkey9', createdAt: new Date(), updatedAt: new Date()}
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
