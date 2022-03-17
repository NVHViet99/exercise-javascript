//challenge #1
const checkDogs = function (dogsJulia, dogsKate) {
  dogsJulia
    .splice(1, 3)
    .concat(dogsKate)
    .forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
};
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 1]);

// challenge #2
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
  const adults = humanAges.filter(age => age > 18);
  const average = adults.reduce((acc, cur) => (acc + cur) / adults.length, 0);
  console.log(humanAges);
  console.log(average);
};

// challenge #3: convert challenge#2 to arrow function
const calcAverageHumanAgeArrow = ages => {
  ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(age => age > 18)
    .reduce((acc, cur, i, arr) => (acc + cur) / arr.length, 0);
};
