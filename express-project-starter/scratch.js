/*
* Considerations:
! 1) When seeding tables that require GAMES (e.g. 'Reviews`) make sure there are sufficient games seeded.
! 2) When seeding tables that require USERS (e.g. 'Likes'), make sure there are sufficent users seeded.
! 3) When seeding tables that require REVIEWS (e.g. 'Likes') make sure there are sufficent reviews seeded.
*/

const seedUsersTables = () => {
    for (let i = 1; i < 10; i++) {
        console.log(`{ fullName: 'User${i}', email: 'user${i}@email.com', hashedPassword: '$aB${i}', screenName: 'PugLife${i}', createdAt: new Date(), updatedAt: new Date() },`);
    }
}
// seedUsersTables();

const seedGamesTables = () => {
    for (let i = 1; i < 10; i++) {
        if (isPrimeHelper(i)) {
            console.log(`{ name: 'Game${i}', genre: 'Type${i}', createdAt: new Date(), updatedAt: new Date() },`);
        } else if ( i % 2 === 0) {
            console.log(`{ name: 'Game${i}', genre: 'Type0', createdAt: new Date(), updatedAt: new Date() },`);
        } else if (i % 2 !== 0) {
            console.log(`{ name: 'Game${i}', genre: 'Type1', createdAt: new Date(), updatedAt: new Date() },`);
        }
    }
}
// seedGamesTables();

const seedReviewsTables = () => {
    for (let i = 1; i < 10; i++) {
        if (isPrimeHelper(i)) {
            console.log(`{ content: 'This game was absolutely excellent!', user_id: ${i}, game_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        } else if ( i % 2 === 0) {
            console.log(`{ content: 'I had some fun playing it.', user_id: ${i}, game_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        } else if (i % 2 !== 0) {
            console.log(`{ content: 'It was okay...', user_id: ${i}, game_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        }
    }
}
// seedReviewsTables();

const seedLikesTables = () => {
    for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
            console.log(`{ like: true, user_id: ${i}, review_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        } else {
            console.log(`{ like: false, user_id: ${i}, review_id: ${i}, createdAt: new Date(), updatedAt: new Date() },`);
        }
    }
}
// seedLikesTables();



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
