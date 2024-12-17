'use strict';
let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice Method
// Just like for string, its return new array sliced
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']

// Splice
// Mutates the original arrays bu returning poped elements
console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']

// Reverse Method
// Well it mutates our list
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
console.log(arr2.reverse()); // ['e', 'd', 'c', 'b', 'a']
console.log(arr2); // ['e', 'd', 'c', 'b', 'a']

// Concat Method
// It returns combined two arrays
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'e', 'd', 'c', 'b', 'a']
console.log(arr);

// Join Method
// return string of elements of arrays with input symbol
console.log(letters.join('-')); // a-b-c-d-e-e-d-c-b-a
