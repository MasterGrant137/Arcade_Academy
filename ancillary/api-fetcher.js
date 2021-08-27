const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
const { seedGameTables } = require('./seeder-functions');

const apiUrl = 'https://www.igdb.com/games/recently_released';


const linkFetcher = () => {
    axios.get(apiUrl)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`

                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });
}
linkFetcher();

/*------------Helper Functions----------------*/

const linkTraverser = (gameLink, gameImage) => {

    axios.get(gameLink)
        .then(res => {
            const $ = cheerio.load(res.data);
            const gameNameRaw = $('.gamepage-title-wrapper').find('h1').text()
            const gameName = gameNameRaw.slice(0, gameNameRaw.length - 4);
            const gameGenre = $('.gamepage-tabs p > a').first().text();
            const gameBio = $('.gamepage-tabs div > div')
                .get(0)
                .children[0]
                .data

            seedGameTables(gameName, gameImage, gameGenre)
        })
        .catch(err => {
            console.log(err);
        });
}

//? This is capable of parsing and formatting titles from links
// titleParser = (gameLink) => {
//     const gameName = gameLink
//         .split('/')[5]
//         .split('-')
//         .map(word => {
//             if (word) {
//                 let regex = /^(i{2,3}|iv|vi{1,3}|v[sr]|ix|x)$/
//                 if (word.match(regex)) return word.toUpperCase()
//                 else return word[0].toUpperCase() + word.slice(1);
//             } else if (!word) return;
//         })
//         .join(' ');

//         return gameName;
// }
