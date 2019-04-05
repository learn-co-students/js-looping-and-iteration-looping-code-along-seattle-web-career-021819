// Code your solutions in this file

function printBadges(array){
const arrayLen = array.length
  for(let i = 0; i < arrayLen; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}

function tailsNeverFails(){
  let tails = 0
  while (Math.random() <= 0.5){
    tails++;
  }
  return  `You got ${tails} tails in a row!`
}
