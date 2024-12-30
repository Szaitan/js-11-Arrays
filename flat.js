'use strict';

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

// flat method allows us to unpack nested arrays into one
const testData = [[1, 2, 3], [5, 6, 7], 8, 9];
console.log(testData.flat());
[1, 2, 3, 5, 6, 7, 8, 9];

// in case of more nested one we need to set the deeps of flattening
const testData2 = [[1, [2, 3]], [5, 6, 7], 8, 9];
// this would not work
// console.log(testData2.flat()); //[ 1, (2) […], 5, 6, 7, 8, 9 ]
// this works
console.log(testData2.flat(2)); // [ 1, 2, 3, 5, 6, 7, 8, 9 ]

//Ther is also combined version with map but it has only 1 depth
console.log(
  accounts.flatMap(function (data) {
    return data.movements;
  })
); //[ 200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, … ]
