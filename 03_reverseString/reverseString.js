const reverseString = function(phrase) {
  let result = [];

  for ( let i = 0; i < phrase.length; i++ ) {
    result.unshift( charAt(i) );
  }
  
  return result.join('');
};

// Do not edit below this line
module.exports = reverseString;
