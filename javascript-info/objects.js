// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

// Write the function isEmpty(obj) which returns true 
// if the object has no properties, false otherwise.

Solution: 
// function isEmpty(obj) {
//   for (key in obj) {
//     return false; // if the loop has started, there is a property
//   }
//   return true;
// }

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

// We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the 
// variable sum. Should be 390 in the example above.
// If salaries is empty, then the result must be 0.

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let pay in salaries) {
  sum += salaries[pay];
}