const axios = require('axios');
const cheerio = require('cheerio');
const pretty = require('pretty');

const apiUrl = 'https://www.igdb.com/advanced_search'
// .data-reactroot .marg-lg-top .fix-heights
// .col-md-6
// .media .media-left .img-responsive thumb
// find('img[class="img-responsive"]')
// div:nth-child(3)
// 'div.col-md-6 > div.media > div.media-left > img.img-responsive'

axios.get(apiUrl)
    .then(res => {
        let $ = cheerio.load(res.data);

        // 'div.media-left'
        $('body').each((idx, ele) => {
            // let targetData = $(ele)
            //     .find('img.img-responsive')
            //     .attr('src');
            // console.log(targetData);


            // > div.container > div.row > div.col-md-9 > div
            const footer = $(ele)
                .find('#footer-small a')
            console.log(footer.attr('href'));
            // console.log(footer.text());
        });


    })
    .catch(err => {
        console.log(err);
    });














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
