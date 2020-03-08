// Code your solutions in this file
function writeCards(stringsArray, eventName) {
    let thankYou = []
    for(let i = 0; i < stringsArray.length; i ++) {
        thankYou.push(`Thank you, ${stringsArray[i]}, for the wonderful ${eventName} gift!`);
    }
        return thankYou;
}

function countDown(integer) {
    while(integer > 0) {
        console.log(integer);
        integer -= 1;
    }
    console.log(integer);
}

