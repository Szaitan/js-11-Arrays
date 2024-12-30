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

// Challenge 3
function calcAverageHumanAge2(arr) {
  const avgFinal = arr
    .map(value => (value <= 2 ? value * 2 : 16 + value * 4))
    .filter(value => value >= 18)
    .reduce((current, value, i, data) => current + value / data.length, 0);
  return avgFinal;
}
console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

// Challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// part 1
for (const dog of dogs) {
  dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28);
  console.log(dog.recommendedFood);
}

// part 2
const sarahDog = dogs.find(function (dog) {
  return dog.owners.includes('Sarah');
});
const sarahPerc10DogsFood = sarahDog.recommendedFood * 0.1;

console.log(
  `Sarah dog eats ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'to much' : 'to little'
  }`
);

// part 3
const ownersEatTooMuch = dogs
  .filter(function (dog) {
    return dog.recommendedFood < dog.curFood;
  })
  .map(function (dog) {
    return dog.owners;
  })
  .flat();

const ownersEatTooLittle = dogs
  .filter(function (dog) {
    return dog.recommendedFood > dog.curFood;
  })
  .map(function (dog) {
    return dog.owners;
  })
  .flat();

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// part 4
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// part 5
console.log(
  dogs.some(function (dog) {
    dog.curFood === dog.recommendedFood;
  })
);

// part 6
dogs.forEach(function (dog) {
  console.log(
    dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  );
});

// part 7
const theTrueDog = dogs.filter(function (dog) {
  return (
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
  );
});
console.log(theTrueDog);

// part 8
