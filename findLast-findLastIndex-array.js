'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Similar to find, last works from the back of the array to beggining
const value = movements.findLast(function (value) {
  return value < 0;
});
console.log(value); // -130

// Using arrow function
const value2 = movements.findLast(mov => mov < 0);
console.log(value2);

// Same with finding last Index
const ind = movements.findLastIndex(function (val) {
  return val > 0;
});
console.log(ind); // 7
