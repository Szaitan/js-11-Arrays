'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// .some() array method checks if any element in array pass the statment
// return true or false
console.log(
  movements.some(function (data) {
    return data > 3000;
  })
); // false

console.log(
  movements.some(function (data) {
    return data < 3000;
  })
); // true

// .any() array method checks if every element pass the statment
// return true or false

console.log(
  movements.every(function (data) {
    return data > -500;
  })
); // false
