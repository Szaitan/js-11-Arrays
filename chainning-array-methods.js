'use strict';
// We can use array methos in chaining order
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const totalDeposit = movements
  .filter(function (value) {
    return value > 0;
  })
  .map(function (value) {
    return value * 1.1;
  })
  .reduce(function (current, value) {
    return current + value;
  }, 0);

console.log(totalDeposit);
