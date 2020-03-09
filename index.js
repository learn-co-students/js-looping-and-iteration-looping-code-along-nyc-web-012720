// Code your solutions in this file
function writeCards(names, gift_type){
    let result = []
    console.log(names + ` ` + gift_type)
    for (let i = 0; i < names.length; i++) {
        result.push(`Thank you, ` + names[i] + `, for the wonderful `+ gift_type +` gift!`);
      }   
      return result
}

function countDown(number){
    for (let i = 0; i <= number; i++) {
        console.log(number - i);
      }    
}