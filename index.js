// Code your solutions in this file
function writeCards(nameArray, event){
    let card = [];
    for(let i = 0; i <  nameArray.length; i++){
        card.push (`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`)
    }
    return card
}

function countDown(startNum){
    while (startNum > 0){
        console.log(startNum);
        startNum -= 1;
    }
    console.log(startNum) 
}