// Code your solutions in this file
function writeCards(names, event){
    let card = [];
    for (let i = 0; i < names.length; i++){
        card.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return card
}


function countDown( num ) {
    while ( num > 0 ) {
      console.log( num );
      num -= 1;
    }
    console.log( num );
  }