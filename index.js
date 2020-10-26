// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {
//     [loop body]
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts);

// ✓ returns an array of thank you messages for each name provided to the function
function writeCards(array, event) {
    let thankYouCards = []
    for (let i = 0; i < array.length; i++) {
        thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
    } 
    return thankYouCards;
}


//logs each number when counting down, starting from the number provided

function countDown(integer) {
    let i = 0;
    console.log(integer)
    while (i < integer) {
        console.log(integer -= 1);
    }
}
