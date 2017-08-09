require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words =  split(' ');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = filter(match(/q/i));


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function (x, y) { return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = reduce(_keepHighest, -Infinity);


// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = _.curry((start, end, array) => array.slice(start, end))


// Bonus 2:
// ============
// Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b']
var take = _.curry((count, array) => array.slice(0, count))


module.exports = {
  words: words,
  sentences: sentences,
  filterQs: filterQs,
  max: max,
  slice: slice,
  take: take
};
