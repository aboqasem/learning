/*
 * Partial Sum (Σ - Sigma): Sum of Part of a Sequence.
 * https://www.mathsisfun.com/algebra/partial-sums.html
 * https://www.youtube.com/watch?v=80QRqWvCkiU
 */

import { profile } from "../utils/profile";

/**
 * Partial sum of natural numbers until n.
 * O(n) solution with loops.
 */
function partialSumLoop(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum += i;
  }
  return sum;
}

/**
 * Partial sum of natural numbers until n.
 * O(1) solution with math.
 */
function partialSumMath(n: number) {
  return ((1 + n) / 2) * n;
}

profile(partialSumLoop, [100000000]);
profile(partialSumMath, [100000000]);
