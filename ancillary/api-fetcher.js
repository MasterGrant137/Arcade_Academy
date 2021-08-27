const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
const { seedGamesTables } = require('./seeder-functions');

const apiUrl = 'https://www.igdb.com/games/recently_released';







const regexNonMatcher = (word, regex) => {

    word.find((subStr, idx) => {
        // if (!subStr.match(regex)) {
        //     return "idx";
        // }
        console.log("SUBSTRING")
    })
}


const fetcher = () => {
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
                            let regex = /^(i{2,3}|iv|vi{1,3}|v[sr])/
                            // console.log("WORD 11111111" + word)
                            if (word.match(regex)) {
                                // console.log("WOOOOOOORRD" + word)
                                // + `REGEX !INDEX${regexNonMatcher(word, regex)}`
                                // word[0].toUpperCase() + word.slice(1);
                                return word.toUpperCase()
                            } else {
                              return word[0].toUpperCase() + word.slice(1);
                            }
                        } else if (!word) {
                            return;
                        }
                    })
                    .join(' ');
//
                const gameSources = `https:${$(ele).find('img').attr('src')}`;

                // console.log(gameLinks);
                console.log(gameTitles);
                // console.log(gameSources);

                // seedGamesTables(gameTitles, gameSources, gameLinks)
            })
        })
        .catch(err => {
            console.log(err);
        });
}

fetcher();
