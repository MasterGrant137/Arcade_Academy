const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
const { seedGamesTables } = require('./seeder-functions');





const linkTraverser = (gameLink) => {

    axios.get(gameLink)
        .then(res => {
            const $ = cheerio.load(res.data);

           console.log($('.img-responsive'))

        })
        .catch(err => {
            console.log(err);
        });
}







//! play with this, fully operational and variable in map
// const linkTraverser = (gameLink) => {

//     axios.get(gameLink)
//         .then(res => {
//             const $ = cheerio.load(res.data);
//             $('.gamepage-cover').each((idx, ele) => {
//                 const gameImage = $(ele).children()
//                 gameImage.map((idx, innerEle) => {
//                     const searchDeeper = ($(innerEle)[0]);
//                     console.log(searchDeeper);
//                 })
//                 // console.log(gameImage);
//             })
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
//img-responsive loading-animated cover_big cover_big-loading













//! this gets good data
// linkTraverser('https://www.igdb.com/games/rents-due-the-game')
// const linkTraverser = (gameLink) => {

//     axios.get(gameLink)
//         .then(res => {
//             const $ = cheerio.load(res.data);
//             $('.gamepage-cover').each((idx, ele) => {
//                 const gameImage = $(ele).children()
//                 gameImage.map((idx, innerEle) => {
//                     console.log($(innerEle)[0]);
//                 })
//                 // console.log(gameImage);
//             })
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
//img-responsive loading-animated cover_big cover_big-loading




linkTraverser('https://www.igdb.com/games/rents-due-the-game')
