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

// { 'Rogue SpiritEdit', https://images.igdb.com/igdb/image/upload/t_cover_small/co3a3d.jpg, '', createdAt: new Date(), updatedAt: new Date() },

/*------------Helper Functions----------------*/

const linkTraverser = (gameLink, gameImage) => {

    axios.get(gameLink)
        .then(res => {
            const $ = cheerio.load(res.data);
            const gameName = $('.gamepage-title-wrapper').find('h1').text();
            const gameGenre = $('a[data-reactid=42]').text();

// console.log(gameName);
// console.log(gameImage);
// console.log(gameGenre);

            seedGameTables(gameName, gameImage, gameGenre)
        })
        .catch(err => {
            console.log(err);
        });
}

// linkTraverser('https://www.igdb.com/games/rents-due-the-game')

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
