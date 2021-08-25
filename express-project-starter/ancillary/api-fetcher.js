// const apiFetcher = async() => {
//     const fetched = await fetch('https://www.igdb.com/advanced_search', {
//         method: "GET",
//         })

//     const fetchedData = await fetched.json();
//     // console.log(fetched);
//     return fetchedData;
// }

// apiFetcher();

// const apiFetcher = () => {
//     const fetched = fetch('https://www.igdb.com/advanced_search', {
//         method: "GET",
//         })
//         .then(res => res.json())


//     return fetched;
// }

// apiFetcher();

const apiFetcher = () => {
    fetch('https://www.igdb.com/advanced_search')
        .then(res => res.json())

    return fetched;
}

apiFetcher();
