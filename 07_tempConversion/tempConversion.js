const convertToCelsius = function( temperature ) {
  // Formula is (F − 32) × 5/9 ⁠
  celsiusTemp = ( temperature - 32 ) * 5/9;

  // round to 1 decimal
  return Math.round( celsiusTemp * 10 ) / 10;
};

const convertToFahrenheit = function( temperature ) {
  // Formula is (C * 9/5) + 32
  fahrenTemp = ( temperature * 9/5 ) + 32;

  return Math.round( fahrenTemp * 10 ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
