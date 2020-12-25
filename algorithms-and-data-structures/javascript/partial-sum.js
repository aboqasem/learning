/*
 * Partial Sum (Σ - Sigma): Sum of Part of a Sequence.
 * https://www.mathsisfun.com/algebra/partial-sums.html
 * https://www.youtube.com/watch?v=80QRqWvCkiU
 */

const measure = require("./measure");

/**
 * Partial sum of natural numbers until n.
 * O(n) solution with loops.
 */
function partialSumLoop(n) {
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
function partialSumMath(n) {
  return ((1 + n) / 2) * n;
}

measure(partialSumLoop, [100000000]);
measure(partialSumMath, [100000000]);
