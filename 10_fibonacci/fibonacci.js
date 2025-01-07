const fibonacci = function(n) {
  let number = Number(n);
  if (number < 0 ) return 'OOPS';
  // Handle exception of fibonacci number of 0
  if (number === 0) return 0;
  const fibonacciSequence = [1, 1];
  for (i = 2; i < number; i++) {
    // formula: (i-1) + (i-2)
    fibonacciSequence.push(
      fibonacciSequence[i - 1] + fibonacciSequence[i - 2]
    )  
  }
  return fibonacciSequence[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
