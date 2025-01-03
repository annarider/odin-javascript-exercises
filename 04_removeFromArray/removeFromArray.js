const removeFromArray = function(array, ...theStrings) {
  const removeStrings = Array.from(theStrings);

  for (let i = 0; i < removeStrings.length; i++) {

    const index = array.indexOf(i);
    if (index > -1) { // only splice array when item is found
      array.splice(index);
  } 

  return array; 
}
  
};

// Do not edit below this line
module.exports = removeFromArray;
