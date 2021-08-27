const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
const { seedGamesTables } = require('./seeder-functions');

const apiUrl = 'https://www.igdb.com/games/recently_released';


const linkTraverser = (gameLinks, gameTitles, gameSources) => {




    seedGamesTables(gameTitles, gameSources, genres)
}


const linkFetcher = () => {
    axios.get(apiUrl)
        .then(res => {
            let $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                const gameLinks = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;

                const gameTitles = gameLinks
                    .split('/')[5]
                    .split('-')
                    .map(word => {
                        if (word) {
                            let regex = /^(i{2,3}|iv|vi{1,3}|v[sr]|ix|x)$/
                            if (word.match(regex)) return word.toUpperCase()
                            else return word[0].toUpperCase() + word.slice(1);
                        } else if (!word) return;
                    })
                    .join(' ');

                const gameSources = `https:${$(ele).find('img').attr('src')}`;

                linkTraverser(gameLinks, gameTitles, gameSources);
            })
        })
        .catch(err => {
            console.log(err);
        });
}

linkFetcher();
