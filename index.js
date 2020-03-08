function writeCards(names, eventName) {
    let thankYouArray = [];
    for (let i = 0; i < names.length; i++) {
        thankYouArray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    };
    return thankYouArray
}

function countDown(n) {
    let i = n
    while (i >= 0 ) {
        console.log(i);
        i--
    };
}