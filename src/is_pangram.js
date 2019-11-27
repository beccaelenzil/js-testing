const letters = 'abcdefghijklmnopqrstuvwxyz';
const lettersArray = letters.split('');


/*
// using a forEach 
lettersArray.forEach(letter=>lettersObj[letter] = false)
*/

const isPangram = function isPangram(text) {
  //-- Using a Hash
  const lettersObj = {};
  for (let i in lettersArray){
    lettersObj[lettersArray[i]] = false;
  }

  const textArray = text.split('');
  
  //turn letter objects to true if they're in text
  for (let i in textArray){
    lettersObj[textArray[i]] = true
  }
  console.log(lettersObj)

  //check if every value is true
  const result = Object.values(lettersObj).every(value => value === true)

  return result

  //--Brute Force--
  // // turn strings into arrays
  // const lettersArray = letters.split('');
  // const textArray = text.split('');

  // //loop through all the letters in the alphabet
  // for (let i in lettersArray){

  //   // look for each letter in the text
  //   let found = textArray.find(function(letter) {
  //     return letter === lettersArray[i];
  //   });

  //   // return false if you didn't find it
  //   if (found === undefined){
  //     return false;
  //   }
  // }

  // //otherwise return true
  // return true;
};

module.exports = isPangram;