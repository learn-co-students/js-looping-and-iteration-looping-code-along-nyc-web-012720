// Code your solutions in this file
const name = ["Lisa", "Kaitlin", "Jan"];
let newArr = []
function writeCards(){
    // 1) returns an array of thank you messages for each name provided to the function
    for (let i = 0; i < name.length; i++) {
        newArr.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
      }
      return newArr
}
function countDown(arg){
    // 2) invokes console.log once for each number, counting down from the number provided to zero
    // 3) logs each number when counting down, starting from the number provided
    let counter = 0 ;
    while (counter <= arg ) {
        console.log(arg-counter)
      counter += 1
    }
}
      



