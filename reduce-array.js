'use strict';

// Reduce method allows us to reduce array to single value
// The sctructure is a little bit diffrent

// As callback function we have functio with first element that containes
// previous value, and at the end of body we set the start value of it
// in our case its 0
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const total = movements.reduce(function (current, value, i, array) {
  return current + value;
}, 0);
console.log(total);

// Here with the use of arrow function
const total2 = movements.reduce((current, value) => current + value, 0);
console.log(total2);

// Finding the highest number
const higestNum = movements.reduce(function (current, val) {
  return val > current ? (current = val) : current;
}, 0);
console.log(higestNum);
