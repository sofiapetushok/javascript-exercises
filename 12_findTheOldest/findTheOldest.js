const findTheOldest = function(people) {
  if (people.length === 0) {
    return null; // Return null for an empty array
  }

  return people.reduce((maxAgePerson, currentPerson) => {
    if (!maxAgePerson) {
        return currentPerson;
    }

    const maxAge = maxAgePerson.yearOfDeath
        ? maxAgePerson.yearOfDeath - maxAgePerson.yearOfBirth
        : new Date().getFullYear() - maxAgePerson.yearOfBirth;

    const currentAge = currentPerson.yearOfDeath
        ? currentPerson.yearOfDeath - currentPerson.yearOfBirth
        : new Date().getFullYear() - currentPerson.yearOfBirth;

        console.log(currentPerson);
        console.log(people);
    return currentAge > maxAge ? currentPerson : maxAgePerson;
}, null);
} 
 
// Do not edit below this line
module.exports = findTheOldest;
