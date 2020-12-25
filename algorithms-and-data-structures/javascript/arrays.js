/*
 * Arrays in JavaScript
 */

// an array
const items = ["Laptop", "Keyboard", "Trackpad"];
console.table(items);

// access: O(1)
console.table([items[0], items[2]]);

// insertion (at the end): O(1)
items.push("Notebook");
console.table(items);
// insertion (at the start): O(n)
items.unshift("Food");
console.table(items);

// removal (from the end): O(1)
items.pop();
console.table(items);
// removal (from the start): O(1)
items.shift();
console.table(items);

// Concatenating, slicing, splicing, and traversal functions like forEach, map, etc.: O(n)
console.table(items.concat(["Mobile Phone", "Charger"]));
console.table(items.slice(2));
items.splice(2);
console.table(items);
