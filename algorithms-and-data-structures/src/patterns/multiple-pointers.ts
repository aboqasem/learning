/*
 * Multiple Pointers Pattern
 * https://medium.com/@seanoughton/problem-solving-patterns-multiple-pointers-2dae827d154d
 */

import { profile } from '../utils/profile';

/**
 * Find the first pair where its sum is zero in a sorted array.
 * O(n^2) solution with nested loops.
 */
function sumZeroPairNestedLoops(arr: number[]) {
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
function sumZeroPairMultiplePointers(arr: number[]) {
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

const arr = [-11, -10, -2, -1, 2, 12, 30];
profile(sumZeroPairNestedLoops, [arr]);
profile(sumZeroPairMultiplePointers, [arr]);
