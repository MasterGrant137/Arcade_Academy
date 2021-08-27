const bcrypt = require('bcryptjs');

/*
* Considerations:
! Note that the seeder password scheme (before hashing) is $aB<non-zero-num> (e.g. $aB1, $aB2, $aB3, etc.).
! When seeding tables that require GAMES (e.g. 'Reviews`) make sure there are sufficient games seeded.
! When seeding tables that require USERS (e.g. 'Likes'), make sure there are sufficent users seeded.
! When seeding tables that require REVIEWS (e.g. 'Likes') make sure there are sufficent reviews seeded.
*/

const seedUserTables = async() => {
    for (let i = 1; i < 10; i++) {
        const hashedPassword = await bcrypt.hash(`$aB${i}`, 10);
        console.log(`{ fullName: "User${i}", email: "user${i}@email.com", hashedPassword: "${hashedPassword}", screenName: "PugLife${i}", createdAt: new Date(), updatedAt: new Date() },`);
    }
}
// seedUserTables();

const seedGameTables = (name, gameImage, genre) => {
    // for (let i = 1; i < 10; i++) {
        console.log(`{ name: "${name}", gameImage: "${gameImage}", genre: "${genre}", createdAt: new Date(), updatedAt: new Date() },`);
    // }
}
// seedGameTables();

const seedReviewTables = () => {
    for (let i = 1; i < 10; i++) {
        if (isPrimeHelper(i)) {
            console.log(`{ content: "This game was absolutely excellent!", user_id: ${i}, game_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        } else if ( i % 2 === 0) {
            console.log(`{ content: "I had some fun playing it.", user_id: ${i}, game_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        } else if (i % 2 !== 0) {
            console.log(`{ content: "It was okay...", user_id: ${i}, game_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        }
    }
}
// seedReviewTables();

const seedLikeTables = () => {
    for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
            console.log(`{ like: true, user_id: ${i}, review_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        } else {
            console.log(`{ like: false, user_id: ${i}, review_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        }
    }
}
// seedLikeTables();



/* HELPER FUNCTIONS */

function isPrimeHelper(index) {
    if (index === 0 || index === 1) {
        return false;
    }

    for (let i = 2; i < index; i++) {
        if (index % i === 0) {
            return false;
        }
    }

    return true;
}

module.exports = { seedGameTables };
