const palindromes = function (string) {

  let reversedString = '';

  for (i = 0; i < string.length; i++) {
    reversedString += string.split("").reverse().join("");
  }

  return reversedString === string;

};

// Do not edit below this line
module.exports = palindromes;
