const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');
const { seedGameTables } = require('./seeder-functions');

const url = 'https://www.igdb.com/games/recently_released';
const fltr = '?pfilter='
const pform = {
    'PC (Microsoft Windows)': 6,
    'Xbox Series X|S': 169,
    'PlayStation 5': 167,
    'Nintendo Switch': 130,
    'PlayStation 4': 48,
    'iOS': 39,
    'Android': 34,
    'Linux': 3,
    'Mac': 14
}


const gameSet = new Set();

/* *****************Considerations*****************
! Scraping a page twice will produce duplicates which can result in a vaidation error in Sequelize if you don't fully overwrite the content in your seeder file when you paste
! For diversity of data with the assurance of uniqueness, I've equipped this web scraper to run multiple scrapes while being checked by a Set object
? This web scraper runs a DFS on every url provided in the linkFetcher function
? More explicitly, the linkFetcher func will scour every game's href from each of those pages (alongside its src)
? it will then pass the collected href (and src for later data compilation) to the linkTraverser helper func
? ...which will follow each href to each game's profile page and collect data (title, genre, bio),
? it will then pass all of that (alongside the src which it was given)
? ...to a seeder function which formats it and prints it to console
*/

const linkFetcher = () => {
    const fetchLimiter = 80;

    axios.get(url)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`${url}${fltr}${pform['PC (Microsoft Windows)']}`)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`${url}${fltr}${pform['Xbox Series X|S']}`)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`${url}${fltr}${pform['PlayStation 5']}`)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`${url}${fltr}${pform['Nintendo Switch']}`)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`${url}${fltr}${pform['iOS']}`)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`${url}${fltr}${pform['Android']}`)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`${url}${fltr}${pform['Linux']}`)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
                linkTraverser(gameLink, gameImage);
            })
        })
        .catch(err => {
            console.log(err);
        });

    axios.get(`${url}${fltr}${pform['Mac']}`)
        .then(res => {
            const $ = cheerio.load(res.data);

            $('.col-md-1').each((idx, ele) => {
                if (!$(ele)) return false;
                const gameLink = `https://www.igdb.com/${$(ele).find('a').attr('href')}`;
                const gameImage = `https:${$(ele).find('img').attr('src')}`
                if (idx === fetchLimiter) return false;
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

            if (!$('.gamepage-tabs div > div').get(0).children[0]) return false;
            const gameBio = $('.gamepage-tabs div > div')
            .get(0)
            .children[0]
            .data

            if (!gameSet.has(gameLink)) seedGameTables(gameName, gameImage, gameGenre, gameBio)
            gameSet.add(gameLink);
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
