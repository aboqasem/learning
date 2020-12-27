/*
 * Multiple Pointers Pattern
 * https://medium.com/@seanoughton/problem-solving-patterns-multiple-pointers-2dae827d154d
 */

const profile = require("./profile");

/**
 * Find the first pair where its sum is zero in a sorted array.
 * O(n^2) solution with nested loops.
 */
function sumZeroPairNestedLoops(arr) {
  if (!(arr.length >= 2)) return [];

  // O(n)
  for (let i = 0; i < arr.length - 1; ++i) {
    // O(n)
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

/**
 * Find the first pair where its sum is zero in a sorted array.
 * O(n) solution with multiple pointers.
 */
function sumZeroPairMultiplePointers(arr) {
  if (!(arr.length >= 2)) return [];

  // O(n)
  for (let l = 0, r = arr.length - 1; l < r; ) {
    const sum = arr[l] + arr[r];
    if (sum === 0) {
      return [arr[l], arr[r]];
    } else if (sum > 0) {
      r--;
    } else {
      l++;
    }
  }
  return [];
}

/**
 * Count the unique values in a sorted array.
 * O(n) solution with multiple pointers.
 */
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let unique = 1;
  for (let i = 0, j = 1; j < arr.length; ) {
    if (arr[i] !== arr[j]) {
      unique++;
      i = j;
    }
    j++;
  }
  return unique;
}

// Uncomment to test
// const arr = [-11, -10, -2, -1, 2, 12, 30];
// profile(sumZeroPairNestedLoops, [arr]);
// profile(sumZeroPairMultiplePointers, [arr]);

profile(countUniqueValues, [[-1, 0, 1, 1, 2, 3, 4, 9]]);
