'use strict';
// We can createa array using typical convention
console.log([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8));

// However, if we use it to create array with one element
// we will receive array with empty spaces * by number

const x = new Array(7);
console.log(x); // [empty × 7]

// map function will nto work on this
// the function which can work on this is .fill
// which .fill all empty space with this value
// x.fill(1);
// console.log(x); // [1, 1, 1, 1, 1, 1, 1]

// if we will use .fill with (1, 3, 5)
// we will receive array which slice will containe 1

x.fill(1, 3, 5);
console.log(x); // [empty × 3, 1, 1, empty × 2]

// We can use array.from to create array
// by passing an objec with length and as second part callback function
const z = Array.from({ length: 7 }, function () {
  return 1;
});
console.log(z); // (7) [1, 1, 1, 1, 1, 1, 1]

// We can use this method to create array from objects for example:
// DOM elements
// console.log(
//   Array.from(document.querySelectorAll('.movements'), function (el) {
//     return Number(el.textContent.replace("$", ""));
//   })
// );

const arr = Array.from({ length: 100 }, function () {
  return Math.floor(Math.random() * 100);
});
console.log(arr);
