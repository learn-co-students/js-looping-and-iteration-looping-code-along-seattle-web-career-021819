function printBadges(array){
  for(let i = 0; i < array.length; i++){
    console.log(`Welcome ${array[i]}! You are employee #${i+1}.`)
  }
  return array
}


function tailsNeverFails() {
  function maybeTrue(){
    return
  }
  let counter = 0;
  while(maybeTrue()){
    counter++
  }
  return `You got ${counter} tails in a row!`
}
// Code your solutions in this file
