const palindromes = function (string) {
  let reversedString = string.split("").reverse().join("");
  console.log(reversedString);
  return reversedString === string ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
