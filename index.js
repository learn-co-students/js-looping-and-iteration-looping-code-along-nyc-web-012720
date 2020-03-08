// Code your solutions in this file


function writeCards(arr, event) {
    const thanksArray = [];
    for(let i = 0; i < arr.length; i++) {
        thanksArray.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`);
    }
    return thanksArray
}

function countDown(positiveInteger) {
    while (positiveInteger >= 0){
        console.log(positiveInteger--)
    }
}