const sumAll = function(startInt, endInt) {
  let total = 0;

  // Test for integer
  if( parseInt(startInt) !== startInt || parseInt(endInt) !== endInt ||
      // test for positive 
      startInt < 0 || endInt < 0 ||
      // test for numbers
      isNaN(startInt) || isNaN(endInt)) {

    return 'ERROR';
  } else if (startInt < endInt) {
    
    while (startInt <= endInt) {
      total += startInt;
      startInt++;
    }
        
  } else if (startInt > endInt) {
        
    while (startInt >= endInt) {
      total += startInt;
      startInt--;
      
    }
      }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
