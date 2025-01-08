const findTheOldest = function(people) {
  let oldestPerson = {};
  let oldestAge = '0';
  for (i = 0; i < people.length; i++) {
    let person = people[i];
    console.log(typeof person);
    let age = person.yearOfDeath - person.yearOfBirth;
    if (age > oldestAge) {
      oldestAge = age;
      oldestPerson = person;
    }
  }
  console.log(oldestPerson);
  console.log(`${oldestPerson}: ${oldestAge}`);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
