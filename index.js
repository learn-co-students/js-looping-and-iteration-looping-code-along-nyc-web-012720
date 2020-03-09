// Code your solutions in this file
function writeCards(list, messages){
    let result = []
    for(let i = 0; i < list.length; i++ ) {
        result.push(`Thank you, ${list[i]}, for the wonderful ${messages} gift!`)
        
    }
    return result
}

function countDown(spy) {
    while(spy > 0) {
    console.log(spy)
    spy --
    }
    console.log(spy)
}