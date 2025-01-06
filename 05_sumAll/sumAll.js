const sumAll = function(startInt, endInt) {
  let total = 0;

  while (startInt <= endInt) {
    total += startInt;
    startInt++;
    console.log(total);
  }

  return total;
};

// Do not edit below this line
module.exports = sumAll;
