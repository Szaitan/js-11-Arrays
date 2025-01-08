'use strict';

// .toReversed
// to not affect exisitng array we can use new method
const numData = [1, 2, 3, 4];
// const newNumData = numData.reverse();
console.log(numData); // [4, 3, 2, 1]
// console.log(newNumData); // [4, 3, 2, 1]

const goodNumData = numData.toReversed();
console.log(goodNumData); // [4, 3, 2, 1]
console.log(numData); // [1, 2, 3, 4]

// Same situation with:
// toSorted() (sorted) and toSpliced() (spliced)

// There is new method for changing the value in array
// without muttaing original one
const newMoves = numData.with(1, 2000);
console.log(newMoves); // [1, 2000, 3, 4]
