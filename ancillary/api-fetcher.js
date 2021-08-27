const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
const { seedGamesTables } = require('./seeder-functions');

const apiUrl = 'https://www.igdb.com/games/recently_released';


const linkFetcher = () => {
    axios.get(apiUrl)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each(ele => {
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;

                // linkTraverser(gameLink);
            })
        })
        .catch(err => {
            console.log(err);
        });
}

linkFetcher();



/*------------Helper Functions----------------*/

const linkTraverser = (gameLink) => {

    axios.get(gameLink)
        .then(res => {
            const $ = cheerio.load(res.data);
// console.log(pretty($.html()));
            const gameName = $('.gamepage-title-wrapper').find('h1').text();
            // const gameImage = `https:${$('img.cover_big')}`;
            const gameImage = 
            const gameGenre = $('a[data-reactid=42]').text();
// .img-responsive .attr('src')
// console.log(gameName);
console.log(gameImage);
// console.log(gameGenre);

            // seedGameTables(gameName, gameImage, gameGenre)
        })
        .catch(err => {
            console.log(err);
        });
}

linkTraverser('https://www.igdb.com/games/rents-due-the-game')

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
