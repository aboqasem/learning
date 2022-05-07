import { profile } from "../utils/profile";

/**
 * Find if two strings are anagram (https://en.wikipedia.org/wiki/Anagram).
 * O(n) solution with frequency counter pattern.
 */
 function isAnagram(str1: string, str2: string) {
  if (!(str1.length === str2.length)) return false;
  if (str1 === '') return true;
  const freq1: Record<string, number> = {};
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

const str1 = "Listen";
const str2 = "Silent";
profile(isAnagram, [str1, str2]);
