

// const testingArray = [ 'assimilate', 'a', 'party', 'game' ]; // CHECKS OUT
// const testingArray = [ '{}', 'to', 'party', 'game' ]; // CHECKS OUT
// const testingArray = [ '{}', '3', 'VS', 'game' ]; // CHECKS OUT


const testingArray = [ '', '3', 'VS', 'game' ]; // CHECKS OUT
// const testingArray = [ undefined, '3', 'VS', 'game' ]; CHECKS OUT

const mapped = testingArray.map(word => {
    if (word) {
        return word[0].toUpperCase() + word.slice(1);
    }
    return;
})
    .join(' ');

console.log(mapped);


// const mapped = testingArray.map(word => {
//     if (!word[0]) {
//         return;
//     }
//      return word[0].toUpperCase() + word.slice(1);
// })
//     .join(' ');

// console.log(mapped);
