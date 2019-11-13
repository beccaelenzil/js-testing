const letters = "abcdefghijklmnopqrstuvwxyz"

const isPangram = function isPangram(text) {
  // turn strings into arrays
  const lettersArray = letters.split('');
  const textArray = text.split('');

  //loop through all the letters in the alphabet
  for (let i in lettersArray){

    // look for each letter in the text
    let found = textArray.find(function(letter) {
      return letter === lettersArray[i];
    });

    // return false if you didn't find it
    if (found === undefined){
      return false;
    }
  }

  //otherwise return true
  return true;
};

module.exports = isPangram;