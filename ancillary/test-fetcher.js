const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
const { seedGameTables } = require('./seeder-functions');


const linkTraverser = (gameLink) => {

    axios.get(gameLink)
    .then(res => {
        const $ = cheerio.load(res.data);
        const gameName = $('.gamepage-title-wrapper').find('h1').text();
        const gameGenre = $('.gamepage-tabs p > a').first().text();
//a[data-reactid=42]
// console.log(gameName);
// console.log(gameImage);
console.log(gameGenre);

        // seedGameTables(gameName, gameImage, gameGenre)
    })
    .catch(err => {
        console.log(err);
    });
}

linkTraverser('https://www.igdb.com/games/half-dead-3')
