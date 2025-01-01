'use strict';
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  class: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  class: 'base',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  class: 'superior',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  class: 'premium',
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Groupby allows us to group elements by our statment
// the cosntruction is diffrent, with usage of Object
//What we get is object with subgroups

const positveNegative = Object.groupBy(movements, function (move) {
  return move > 0 ? 'Positive' : 'Negative';
});
console.log(positveNegative); // Object { Positive: (5) […], Negative: (3) […] }

// Groupby on objects with creating suubgroup
const numMovements = Object.groupBy(accounts, function (acc) {
  const accMoveN = acc.movements.length;
  if (accMoveN > 6) {
    return 'Very Active';
  } else if (accMoveN <= 5) {
    return 'Active';
  }
});
console.log(numMovements); // Object { "Very Active": (3) […], Active: (1) […] }

// Groupby on objects with using object property
const accountsClass = Object.groupBy(accounts, function (acc) {
  return acc.class;
});
console.log(accountsClass); // Object { premium: (2) […], base: (1) […], superior: (1) […] }
