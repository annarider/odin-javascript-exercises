const palindromes = function (string) {
  let standardizedString = string.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~() ]/g, "");
  let reversedString = standardizedString.split("").reverse().join("");
  return reversedString === standardizedString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
