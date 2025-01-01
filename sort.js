'use strict';

// Sort method alows to sort array
// It can sort strings from lower to higher
// IMPORTANT: It mutates exisiting array
const arr1 = ['mike', 'Adam'];
console.log(arr1.sort()); //[ "Adam", "mike" ]

// However for array with number we have to pass callback function

// Why it works?
// It works like this becasuse if a - b gives number less then 0
// then a should be infront of b, if a - b is positive b should be
// infront of a

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Ascending order
console.log(
  movements.sort(function (a, b) {
    return a - b;
  })
);

// Descending order
console.log(
  movements.sort(function (a, b) {
    return a + b;
  })
);
