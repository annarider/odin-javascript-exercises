const calculateAge = (person) => {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth;
  } else {
    return new Date().getFullYear() - person.yearOfBirth;
  }
};

const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    let oldestAge = calculateAge(oldestPerson);
    let currentAge = calculateAge(currentPerson);
    return currentAge > oldestAge ? currentPerson : oldestPerson;
  }, people[0]); // set initial person as oldest
};

// Do not edit below this line
module.exports = findTheOldest;
