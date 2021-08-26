const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');

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

                const targSources = $(ele).find('img').attr('src');

                // console.log(gameLinks);
                console.log(gameTitles);
                // console.log(targSources);
            })
        })
        .catch(err => {
            console.log(err);
        });
}

fetcher();
