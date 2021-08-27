const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
// const { seedGameTables } = require('./seeder-functions');

const linkTraverser = (gameLink, gameImage) => {

    axios.get(gameLink)
        .then(res => {
            const $ = cheerio.load(res.data);
            // const gameNameRaw = $('.gamepage-title-wrapper').find('h1').text()
            // const gameName = gameNameRaw.slice(0, gameNameRaw.length - 4);
            // const gameGenre = $('.gamepage-tabs p > a').first().text();
            const gameBio = $('.gamepage-tabs div > div')
                .get(0)
                .children[0]
                .data
// class="compwnent-tabs "

            console.log(gameBio);
            // seedGameTables(gameName, gameImage, gameGenre)
        })
        .catch(err => {
            console.log(err);
        });
}

linkTraverser(`https://www.igdb.com/games/instant-sports-paradise`);
