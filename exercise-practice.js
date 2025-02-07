'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// exercise 1
// total of movments
let totalMove = 0;

accounts.forEach(function (ele) {
  totalMove += ele.movements.reduce(function (prev, now) {
    return prev + now;
  });
});
console.log(totalMove);

// exercise 2
const test2 = accounts
  .flatMap(function (acc) {
    return acc.movements;
  })
  .filter(function (ele) {
    return ele > 0;
  })
  .reduce(function (prev, now) {
    return prev + now;
  });
console.log(test2);

// exercise 3
let num = accounts
  .flatMap(function (acc) {
    return acc.movements;
  })
  .filter(function (ele) {
    return ele > 1000;
  }).length;
console.log(num);

// other way for exercise 3
let num1 = accounts
  .flatMap(function (acc) {
    return acc.movements;
  })
  .filter(function (ele) {
    return ele > 1000;
  })
  .reduce(function (previous) {
    return previous + 1;
  }, 0);
console.log(num1);
