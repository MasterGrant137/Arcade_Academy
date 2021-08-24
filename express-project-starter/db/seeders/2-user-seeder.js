'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { fullName: 'User1', email: 'user1@email.com', hashedPassword: '$2a$10$zhRWQln.gydiAsLKohgy9.4hvGrL6YqzCAwkavhmH4nmOb2gvx97u', screenName: 'PugLife1', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User2', email: 'user2@email.com', hashedPassword: '$2a$10$uicIrdm6kPkx9V0KlsOCaOwyI3rtRgfUOLoenlrCvybnRFsXIL3y2', screenName: 'PugLife2', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User3', email: 'user3@email.com', hashedPassword: '$2a$10$4djZc4JS/Ggfu.PdI4HUlOY9GvD7jgcIx066PPtwctpIvNmhS8JDa', screenName: 'PugLife3', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User4', email: 'user4@email.com', hashedPassword: '$2a$10$4XBf533Un44X9TSc4PCy1Ow/zgFckLkx/ZVBjFfoV8gwGJQKFMCFG', screenName: 'PugLife4', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User5', email: 'user5@email.com', hashedPassword: '$2a$10$2EeO2P26agHrzjMrtakkTeg5ss3hVVAEhWmn/mV8setZt8vFz8cEy', screenName: 'PugLife5', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User6', email: 'user6@email.com', hashedPassword: '$2a$10$E.PJVozhCE2ewzyV9t7zS.2WqQjFLAJhyRlJtBN8of5xKdl8LmD.2', screenName: 'PugLife6', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User7', email: 'user7@email.com', hashedPassword: '$2a$10$Vmp/XUxB.TEz.cfgGHqP4uCGZgXl7cqr8RYA54PkC8eKEC8T3/a7O', screenName: 'PugLife7', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User8', email: 'user8@email.com', hashedPassword: '$2a$10$Q2MfvU8ajRlg9C7o./I2SOzB16NN/SF.rths90icE8Eh2n5OejAzS', screenName: 'PugLife8', createdAt: new Date(), updatedAt: new Date() },
      { fullName: 'User9', email: 'user9@email.com', hashedPassword: '$2a$10$LhmJ/7jzfqoqpsrEGgSG1ecQCdPnNayZX.6Uc8kVx9D/fOUVHE/aC', screenName: 'PugLife9', createdAt: new Date(), updatedAt: new Date() },
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
