'use strict';

// Map method return new array after callback
// of function on each element of array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map(function (ele) {
  return ele * 1.1;
});
console.log(movementsUSD);

// Callback function can also take value, index and array
// PS. Nice way to minimalize your code
const movementsDescription = movements.map(function (value, i) {
  return `Movement ${i + 1}: You ${value > 0 ? 'deposite.' : 'withdraw.'}`;
});
console.log(movementsDescription);
