// =============================================================
// evenNumbers.js – Print all even numbers from an array
// =============================================================
// This script demonstrates two simple ways to extract and
// display only the even numbers from a given array.
// • Method 1 – Classic `for` loop (easy to read)
// • Method 2 – Using `filter` + `forEach` (modern, concise)
// =============================================================

// ---------- Sample data ----------
const numbers = [7, 2, 9, 4, 11, 6, 3, 8, 10, 1]; // you can replace this with any array

// ---------- Method 1: Classic for loop ----------
console.log('Even numbers (Method 1 – for loop):');
for (let i = 0; i < numbers.length; i++) {
    // Check if the current number is divisible by 2
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]); // Print the even number
    }
}

// ---------- Method 2: Using filter + forEach ----------
console.log('\nEven numbers (Method 2 – filter + forEach):');
numbers
    .filter(num => num % 2 === 0)   // keep only numbers where remainder is 0
    .forEach(even => console.log(even)); // print each even number