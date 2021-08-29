'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { fullName: "Tim Botthouser", email: "BigTimmyB@appacademy.com", hashedPassword: "$2a$10$HDRItgNxGgSSJTUIErX9o.AiIyFHCmIwFK.FnAkJosIqkfi.JcyT6", screenName: "PugLife1", profileImage: "/images/tom.jpg", createdAt: new Date(), updatedAt: new Date() },
      { fullName: "User2", email: "user2@email.com", hashedPassword: "$2a$10$WyTmU.H6tby2J8U3WX38zOiURBGKDlIZKoY7RfscPpXPhVAac8Gku", screenName: "PugLife2", profileImage: "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Halo-Master-Chief-Helmet-Face.jpg", createdAt: new Date(), updatedAt: new Date() },
      { fullName: "User3", email: "user3@email.com", hashedPassword: "$2a$10$P0Sa4q2BA430Jiu8qC8G6.93UPa6uNayXTUBw59GXmbTotJUxNjhK", screenName: "PugLife3", profileImage: "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Halo-Master-Chief-Helmet-Face.jpg", createdAt: new Date(), updatedAt: new Date() },
      { fullName: "User4", email: "user4@email.com", hashedPassword: "$2a$10$M.I2hIaqLcxUcDK5ElZQ2O0zUApDLx.7fkE2HJn/S3GduwAtTw3t6", screenName: "PugLife4", profileImage: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg", createdAt: new Date(), updatedAt: new Date() },
      { fullName: "User5", email: "user5@email.com", hashedPassword: "$2a$10$hjXwIF0z6KKGM7giAnpc8.hI0xSM8gMLRCDECBFxhTC.5RoxNlb3C", screenName: "PugLife5", profileImage: "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Halo-Master-Chief-Helmet-Face.jpg", createdAt: new Date(), updatedAt: new Date() },
      { fullName: "User6", email: "user6@email.com", hashedPassword: "$2a$10$EtJnW0FUx.PROTT9kRuJjuW0wxzho6J43zQ/Fu3HGK7FMfYLKtdw2", screenName: "PugLife6", profileImage: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg", createdAt: new Date(), updatedAt: new Date() },
      { fullName: "User7", email: "user7@email.com", hashedPassword: "$2a$10$25j9oL8Yn2whsgp.Q.94K.BmAT4h6hDcMVNdTK.4CxRMZ012vaRY2", screenName: "PugLife7", profileImage: "https://static3.srcdn.com/wordpress/wp-content/uploads/2021/03/Halo-Master-Chief-Helmet-Face.jpg", createdAt: new Date(), updatedAt: new Date() },
      { fullName: "User8", email: "user8@email.com", hashedPassword: "$2a$10$BRUpmybz3A5loNzFRzxz4.ZriBcg4pklZYWPmmimbUaaLgJYL5wla", screenName: "PugLife8", profileImage: "https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg", createdAt: new Date(), updatedAt: new Date() },
      { fullName: "User9", email: "user9@email.com", hashedPassword: "$2a$10$FUt5lChr2JfiQBkV2lEkhep7OKIquzMQX4wg4xNC46M1H2KjKZ7ZC", screenName: "PugLife9", profileImage: "https://i.ytimg.com/vi/ZljYst0sesk/maxresdefault.jpg", createdAt: new Date(), updatedAt: new Date() },
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
    return queryInterface.bulkDelete('Users', null, {
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
