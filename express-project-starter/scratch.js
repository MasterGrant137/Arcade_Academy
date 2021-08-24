/*
* Considerations:
    ! 1) When seeding tables that require USERS (like 'Likes'), make sure there are sufficent users seeded.
    ! 2) When seeding tables that require REVIEWS (like 'Likes') make sure there are sufficent (at least 2) reviews seeded.
*/

const isPrimeHelper = 

const seedUsersTables = () => {
    for (let i = 0; i < 10; i++) {
        console.log(`{ fullName: 'User${i}', email: 'user${i}@email.com', hashedPassword: '$aB${i}', screenName: 'PugLife${i}' }`);
    }
}
//$ seedUsersTables();



const seedLikesTables = () => {
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            console.log(`{ like: true, user_id: ${i}, review_id: 1 }`);
        } else {
            console.log(`{ like: false, user_id: ${i}, review_id: 2 }`);
        }
    }
}
//$ seedLikesTables();



const seedReviewsTables = () => {
    for (let i = 0; i < 10; i++) {
        if (i !== 0 && i !== 1 && ) {

        }
    }
}
seedReviewsTables();
//$ ReviewsSeeder
// { content: 'This is a pretty good game.', user_id: 1, game_id: 1}
// { content: 'I\'m less than enthused.', user_id: 2, game_id: 2}
// { content: 'What site am I on?', user_id: 3, game_id: 3}






const seedGamesTables = () => {
    for (let i = 0; i < 10; i++) {
        console.log(`{ fullName: User${i}, email: user${i}@email.com, hashedPassword: xx00, screenName: MrDonkey${i} }`);
    }
}
seedGamesTables();
//$ GamesSeeder { name: 'Game${i}', genre: 'Type${i % 2}' }
// { name: 'Game0', genre: 'Type0' },
// { name: 'Game1', genre: 'Type1' },
// { name: 'Game2', genre: 'Type0' },
// { name: 'Game3', genre: 'Type1' },
// { name: 'Game4', genre: 'Type0' },
// { name: 'Game5', genre: 'Type1' },
// { name: 'Game6', genre: 'Type0' },
// { name: 'Game7', genre: 'Type1' },
// { name: 'Game8', genre: 'Type0' },
// { name: 'Game9', genre: 'Type1' }
