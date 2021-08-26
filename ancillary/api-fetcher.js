const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');

// const apiUrl = 'https://www.igdb.com/advanced_search'
const apiUrl = 'https://www.igdb.com/games/recently_released';
// console.log('still working');
axios.get(apiUrl)
    .then(res => {
        let $ = cheerio.load(res.data);
        // console.log(pretty($.html()));

        // when in doubt: return word[0].toUpperCase() + word.slice(1); with no conditions works
        $('.col-md-1').each((idx, ele) => {
            const gameLinks = $(ele).find('a').attr('href');

            const gameTitles = gameLinks
                .split('/')[2]
                .split('-')
                .map(word => {
                    if (word) {
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


//! superfluous security
    // else if (word[0] === '/[A-Z]' || word[0] !== '/[a-z]') {
    //     return word[0] + word.slice(1);
    // }


//! worked at one point
// if (word[0] !== '/[a-z]|[A-Z]') {
                    //     return word;
                    // }

                    // if (word[0] === '/[a-z]|[A-Z]') {
                    //      word[0].toUpperCase() + word.slice(1)
                    // }

                    // word[0].toUpperCase() + word.slice(1)
















//! THIS WORKS
    // axios.get(apiUrl)
    // .then(res => {
    //     let $ = cheerio.load(res.data);
    //     // console.log(pretty($.html()));

    //     $('img.img-responsive').each((idx, ele) => {
    //         const targSources = $(ele).attr('src');
    //         const targLinks = $(ele).find('')

    //         // console.log(targSources);
    //         console.log(targLinks);
    //     })
    // })
    // .catch(err => {
    //     console.log(err);
    // });











// .data-reactroot .marg-lg-top .fix-heights
// .col-md-6
// .media .media-left .img-responsive thumb
// find('img[class="img-responsive"]')
// div:nth-child(3)
// 'div.col-md-6 > div.media > div.media-left > img.img-responsive'

// targetParent[0].querySelector('mar-lg-bottom > div.media > div.media-left > img.img-responsive')
// Array.from(document.querySelectorAll('img.img-responsive'))
// Array.from(document.querySelectorAll(".media-left"))
// targetParent.children[0].querySelector('img.img-responsive')
// let targetParent = Array.from(document.querySelectorAll(".media-left"))
// targetParent.forEach(div => {
//     div.children[0].querySelector('img.img-responsive').src
// })

// axios.get(apiUrl)
//     .then(res => {
//         let $ = cheerio.load(res.data);
//         console.log(pretty($.html()));

        // .mar-lg-top .fix-heights col-md-6 or .mar-lg-bottom
        // .media .media-left > img.img-responsive
        // $('.fix-heights').each((idx, ele) => {
        //     let targetData = $(ele)
                // .find('mar-lg-bottom');
                // console.log(targetData);
                // console.log(targetData.children());
                // console.log($(ele).attr('href'));
        // });

        // $('#footer-small a').each((idx, ele) => {
            //? prints the innerText of the footer links
            // console.log($(ele).text());
            //? prints the hrefs of the footer links
            // console.log($(ele).attr('href'));
        // })
    // })
    // .catch(err => {
    //     console.log(err);
    // });














// axios.get(apiUrl)
//     .then(res => {
//         let $ = cheerio.load(res.data);
//         // console.log(pretty($.html()))
//         $('.fix-heights > div:nth-child(3) > img').each((idx, ele) => {
//             let targetData = $(ele).attr('src');
//             console.log(targetData);
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     });



// axios.get(apiUrl)
//     .then(res => {
//         let $ = cheerio.load(res.data);

//         $('.row').each((idx, ele) => {
//             let targetData = $(ele).children()
//             console.log(targetData.find('div').text());
//         });
//     })
//     .catch(err => {
//         console.log(err);
//     });


















// const dataFetcher = async(url) => {
//     const { fetched } = await axios.get(url);
//     return cheerio.load(fetched);
// }

// const $ = await dataFetcher('https://www.igdb.com/advanced_search');

// console.log(`ALL HTML: ${$.html()}`)
// console.log(`ALL SRC DATA: ${$('h1').text()}`)




// async function dataFetcher(url) {
//     const { data } = await axios.get(url);
//     return cheerio.load(data);
// }

// const $ = await dataFetcher('https://www.igdb.com/advanced_search');

// console.log(`ALL SRC DATA: ${$('h1').text()}`)









// request('https://www.igdb.com/advanced_search', (error, response, html) => {
//     if (!error && response.statusCode==200) {
//         const
//     }
// })

// const apiFetcher = async() => {
//     const fetched = await fetch('https://www.igdb.com/advanced_search')

//     const fetchedData = await fetched.json();

//     return fetchedData.text();
// }

// console.log(apiFetcher());

// const apiFetcher = () => {
//     const fetched = fetch('https://www.igdb.com/advanced_search', {
//         method: "GET",
//         })
//         .then(res => console.log(res.body))
//         .then(res => res.text())


//     return fetched;
// }

// apiFetcher();


// const bodyParser = async(response) => {
//     const body = await response.text();

//     try {
//         return JSON.parse(body);
//     } catch (err) {
//         console.log('HEY, THIS IS WHAT HAPPENED:', err);
//         console.log('THIS IS THE RESPONSE BODY:', body);
//         return (response, err.message, 500);
//     }
// }

// const json = await = fetch('https://www.igdb.com/advanced_search').then(bodyParser);

// const bodyParser = async(response) => {
//     const body = await response.text();

//     try {
//         // return JSON.parse(body);
//         return JSON.parse(body);
//     } catch (err) {
//         console.error('HEY, THIS IS WHAT HAPPENED:', err);
//         console.error('THIS IS THE RESPONSE BODY:', body);
//         return (response, err.message, 500);
//     }
// }

// const json = await = fetch('https://www.igdb.com/advanced_search').then(bodyParser);
