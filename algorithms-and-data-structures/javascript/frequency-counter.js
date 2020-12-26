/*
 * Frequency Counter Pattern
 * https://medium.com/@seanoughton/problem-solving-patterns-frequency-counter-c7b26b3f31f
 */

const measure = require("./measure");

/**
 * Find if two strings are anagram (https://en.wikipedia.org/wiki/Anagram).
 * O(n) solution with frequency counter pattern.
 */
function isAnagram(str1, str2) {
  if (!(str1.length === str2.length)) return false;
  if (str1 === "") return true;
  const freq1 = {};
  // O(n)
  for (let i = 0; i < str1.length; ++i) {
    const char = str1[i].toLowerCase();
    freq1[char] = ++freq1[char] || 1;
  }
  // O(n)
  for (let i = 0; i < str2.length; ++i) {
    const char = str2[i].toLowerCase();
    if (!freq1[char]) return false;
    else freq1[char]--;
  }
  return true;
}

/**
 * Find if an array has every number of another array squared.
 * O(n^2) solution with nested loops.
 */
function hasSquaredNestedLoops(arr1, arr2) {
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
function hasSquaredFrequencyCounter(arr1, arr2) {
  const freq1 = {};
  const freq2 = {};
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
    if (!freq1[k ** 2] || !(freq1[k ** 2] === freq2[k])) return false;
  }
  return true;
}

const str1 = "Listen";
const str2 = "Silent";
measure(isAnagram, [str1, str2]);

const arr1 = [];
const arr2 = [];
for (let i = 0; i < 10000; ++i) {
  arr1.push(i ** 2);
  arr2.push(i);
}
measure(hasSquaredNestedLoops, [arr1, arr2]);
measure(hasSquaredFrequencyCounter, [arr1, arr2]);
