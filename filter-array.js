'use strict';

// Filter return us new array which containes valye which pass the if statment
// (without if word)
// Callback function can also take value, index and array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter(function (value) {
  return value > 0;
});
console.log(deposit);

// Using arrow function
const withdraw = movements.filter(value => value < 0);
console.log(withdraw);
