// =============================================================
// biggestNumber.js – Print the largest number in an array
// =============================================================
// This script shows two simple ways to find the maximum value
// inside an array of numbers.
// • Method 1 – Manual comparison using a `for` loop (easy to read)
// • Method 2 – Using the built‑in `Math.max` with spread syntax (concise)
// =============================================================

// ---------- Sample data ----------
const numbers = [12, 7, 19, 3, 45, 8, 22, 5]; // replace with any numbers you like

// ---------- Method 1: Manual comparison ----------
console.log('Finding the biggest number (Method 1 – manual loop):');
let max = numbers[0]; // start with the first element

for (let i = 1; i < numbers.length; i++) {
    // If we find a number larger than our current max, update max
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log('The biggest number is:', max);

// ---------- Method 2: Using Math.max and spread ----------
console.log('\nFinding the biggest number (Method 2 – Math.max):');
const maxUsingMath = Math.max(...numbers); // spread operator passes each element as a separate argument
console.log('The biggest number is:', maxUsingMath);