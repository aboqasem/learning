import { profile } from "../utils/profile";

/**
 * Count the unique values in a sorted array.
 * O(n) solution with multiple pointers.
 */
 function countUniqueValues(arr: number[]) {
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

profile(countUniqueValues, [[-1, 0, 1, 1, 2, 3, 4, 9]]);
