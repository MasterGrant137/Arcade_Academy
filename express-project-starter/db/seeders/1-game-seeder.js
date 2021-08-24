'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Games",
      [
        {
          name: "Game1",
          genre: "Type1",
          gameImage:
            "https://www.denofgeek.com/wp-content/uploads/2020/07/halo-infinite-box-art.png?w=805",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game2",
          genre: "Type2",
          gameImage:
            "https://images.goodgam.es/cJCxvKfId2g/enlarge:1/plain/covers/1968-call-of-duty-warzone-cover.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game3",
          genre: "Type3",
          gameImage:
            "https://static.wikia.nocookie.net/assassinscreed/images/6/65/AC_Valhalla_cover.jpg/revision/latest?cb=20200430195147",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game4",
          genre: "Type0",
          gameImage:
            "https://preview.redd.it/mbqpovgg3vg71.jpg?width=565&format=pjpg&auto=webp&s=e74ee20a4b74adeaaebb5b696dff11d2540c2f1f",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game5",
          genre: "Type5",
          gameImage:
            "https://i.insider.com/5d8ce91d2e22af059034d015?width=750&format=jpeg&auto=webp",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game6",
          genre: "Type0",
          gameImage:
            "https://images.gog-statics.com/f2f7906e9f14d1e804fa23b2e431cdf582879b79e72dc462e7edf95444215400_product_card_v2_mobile_slider_639.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game7",
          genre: "Type7",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/e/ec/Battlefield_2042_cover_art.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game8",
          genre: "Type0",
          gameImage:
            "https://upload.wikimedia.org/wikipedia/en/a/aa/Outlast_cover.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Game9",
          genre: "Type1",
          gameImage:
            "https://www.mobygames.com/images/covers/l/548925-super-smash-bros-ultimate-nintendo-switch-front-cover.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
