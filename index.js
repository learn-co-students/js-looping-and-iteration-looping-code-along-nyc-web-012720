
function writeCards(names, event) {
    const thankYouArray = [];
    for (let i = 0; i < names.length; i++) {
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouArray;
}

function countDown(number) {
    let countDown = number;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}