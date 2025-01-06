const add = function(augend, addend) {
  return augend + addend;
};

const subtract = function(minuend, subtrahend) {
  return minuend - subtrahend;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum + current, 0);
};

const multiply = function(array) {
	return array.reduce((product, current) => sum * current);
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(number) {
  let product = 1;
  if (number === 0) return product;
  for (i = 1; i <= number; i++) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
