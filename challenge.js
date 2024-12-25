'use strict';

// Challenge 1
function checkDogs(dogsJulia, dogsKatie) {
  const correctDogsJulia = dogsJulia.slice(1, dogsJulia.length - 2);
  console.log(dogsJulia);

  const combineDogsData = correctDogsJulia.concat(dogsKatie);
  console.log(combineDogsData);

  combineDogsData.forEach(function (age, i) {
    age > 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  });

  for (let [i, age] of combineDogsData.entries()) {
    age > 3
      ? console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`)
      : console.log(`Dog number ${i + 1} is still a puppy`);
  }
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Challenge 2
function calcAverageHumanAge(arr) {
  const dogsAgeintohumansAge = arr.map(function (value) {
    return value <= 2 ? value * 2 : 16 + value * 4;
  });
  console.log(dogsAgeintohumansAge);

  const dogsAbove18 = dogsAgeintohumansAge.filter(function (value) {
    if (value >= 18) return value;
  });
  console.log(dogsAbove18);

  const averageAge =
    dogsAbove18.reduce(function (current, val) {
      return current + val;
    }, 0) / dogsAbove18.length;
  console.log(averageAge);
}

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
