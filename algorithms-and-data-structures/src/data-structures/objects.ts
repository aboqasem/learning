/*
 * Objects in JavaScript
 */

// an object
const person = {
  name: "Mohammad Al Zouabi",
  gender: "Male",
  nationality: "Syrian",
  birthPlace: "Daraa",
};
console.table(person);

// access: O(1)
console.table([person["name"], person.gender]);

// insertion: O(1)
(person as any)["height"] = 192;
console.table(person);

// removal: O(1)
delete (person as any)["height"];
console.table(person);

// Keys and entries: O(n)
console.table(Object.keys(person));
console.table(Object.entries(person));
