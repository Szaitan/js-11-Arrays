'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Typical for of loop
for (const move of movements) {
  if (move > 0) {
    console.log(`You deposited ${move}`);
  } else {
    console.log(`You withdraw ${move}`);
  }
}

console.log('--------------------- Break ----------------------');
// forEach loop
// For each element of array a callback functions is called
movements.forEach(function (move) {
  if (move > 0) {
    console.log(`You deposited ${move}`);
  } else {
    console.log(`You withdraw ${move}`);
  }
});

// we can get element, index and array with forEach
// in for of with entries first val is index but here is element
// We can;t break out of for each loop
movements.forEach(function (move, i, arr) {
  if (move > 0) {
    console.log(`You deposited ${move}, with index ${i} of array ${arr}`);
  } else {
    console.log(`You withdraw ${move}, with index ${i} of array ${arr}`);
  }
  // You deposited 200, with index 0 of array 200,450,-400,3000,-650,-130,70,1300
});

// For each can be sued also for maps and sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // USD: United States dollar
});

// Set
// With set key and value is the same
const newSet = new Set(['GDP', 'EUR', 'USD', 'USD']);
console.log(newSet);
newSet.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`); // "GDP: GDP"
});
