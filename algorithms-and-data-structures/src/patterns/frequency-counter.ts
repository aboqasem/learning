/*
 * Frequency Counter Pattern
 * https://medium.com/@seanoughton/problem-solving-patterns-frequency-counter-c7b26b3f31f
 */

import { profile } from '../utils/profile';

/**
 * Find if an array has every number of another array squared.
 * O(n^2) solution with nested loops.
 */
function hasSquaredNestedLoops(arr1: number[], arr2: number[]) {
  // O(n)
  const arr1Clone = [...arr1];
  if (arr1.length !== arr2.length) return false;
  // O(n)
  for (const e of arr2) {
    // O(n)
    const index = arr1Clone.indexOf(e ** 2);
    if (index === -1) return false;
    // O(n)
    arr1Clone.splice(index, 1);
  }
  return true;
}

/**
 * Find if an array has every number of another array squared.
 * O(n) solution with frequency counter pattern.
 */
function hasSquaredFrequencyCounter(arr1: number[], arr2: number[]) {
  const freq1: Record<number, number> = {};
  const freq2: Record<number, number> = {};
  // O(n)
  for (const e of arr1) {
    freq1[e] = ++freq1[e] || 1;
  }
  // O(n)
  for (const e of arr2) {
    freq2[e] = ++freq2[e] || 1;
  }
  // O(n)
  for (const k in freq2) {
    const numK = +k;
    if (!freq1[numK ** 2] || !(freq1[numK ** 2] === freq2[numK])) return false;
  }
  return true;
}

/**
 * Find if digit frequency of two positive numbers are the same.
 * O(n) solution with frequency counter pattern.
 */
function sameFrequency(num1: number, num2: number) {
  if (num1 === num2) return true;
  let digits1 = Math.floor(Math.log10(num1)) + 1;
  let digits2 = Math.floor(Math.log10(num2)) + 1;
  if (digits1 !== digits2) return false;

  const freq1: Record<number, number> = {};
  // O(n)
  while (num1 > 0) {
    const digit = num1 % 10;
    freq1[digit] = ++freq1[digit] || 1;
    num1 = Math.floor(num1 / 10);
  }
  while (num2 > 0) {
    const digit = num2 % 10;
    if (!freq1[digit]) return false;
    freq1[digit]--;
    num2 = Math.floor(num2 / 10);
  }
  return true;
}

/**
 * Find if there are duplicate arguments.
 * O(n) solution with frequency counter pattern.
 */
function areThereDuplicates(...args: any[]) {
  if (args.length <= 1) return false;

  const freq1: Record<any, number> = {};
  // O(n)
  for (let i = 0; i < args.length; ++i) {
    if (!freq1[args[i]]) {
      freq1[args[i]] = 1;
    } else return true;
  }
  return false;
}

const arr1 = [];
const arr2 = [];
for (let i = 0; i < 10000; ++i) {
  arr1.push(i ** 2);
  arr2.push(i);
}
profile(hasSquaredNestedLoops, [arr1, arr2]);
profile(hasSquaredFrequencyCounter, [arr1, arr2]);

profile(sameFrequency, [121, 211]);

profile(areThereDuplicates, [0, 1, 2, 3, 0]);
