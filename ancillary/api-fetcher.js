const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
const { seedGamesTables } = require('./seeder-functions');

const apiUrl = 'https://www.igdb.com/games/recently_released';

const fetcher = () => {
    axios.get(apiUrl)
        .then(res => {
            let $ = cheerio.load(res.data);
            // console.log(pretty($.html()));

            $('.col-md-1').each((idx, ele) => {

                const gameLinks = $(ele).find('a').attr('href');

                const gameTitles = gameLinks
                    .split('/')[2]
                    .split('-')
                    .map(word => {
                        if (word) {
                            if ((word.slice(0,2) === 'ii') || (word.slice(0,2) === 'vs')) {
                                return word[0].toUpperCase() + word[1].toUpperCase() + word.slice(2);
                            }
                            return word[0].toUpperCase() + word.slice(1);
                        } else if (!word) {
                            return;
                        }
                    })
                    .join(' ');

                const gameSources = $(ele).find('img').attr('src');
                // https://images.igdb.com/igdb/image/upload/t_cover_small/co3gmz.jpg
                // https://images.igdb.com/igdb/image/upload/t_cover_small/co3dli.jpg
                // console.log(gameLinks);
                // console.log(gameTitles);
                // console.log(targSources);

                seedGamesTables(gameTitles, gameSources, gameLinks)
            })
        })
        .catch(err => {
            console.log(err);
        });
}

fetcher();
