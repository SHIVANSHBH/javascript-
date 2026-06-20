// =============================================================
// reverseArray.js – Reverse all elements of an array
// =============================================================
// This script shows **two** ways to reverse an array in JavaScript:
//   1️⃣  Using the built‑in `Array.prototype.reverse()` method
//   2️⃣  Manual reversal with a `for` loop (great for learning how
//       the algorithm works under the hood)
// The code is written in a beginner‑friendly, “human‑like” style
// with plenty of comments and a dedicated explanation section.
//
// -------------------------------------------------------------
// Why reverse an array?
// -------------------------------------------------------------
// Imagine you have a list of items – maybe a to‑do list, a sequence
// of numbers, or names of friends. Sometimes you need to process the
// items in the opposite order. Reversing an array means creating a
// new order where the last element becomes the first, the second‑last
// becomes the second, and so on.
//
// -------------------------------------------------------------
// 1️⃣  Method A – Using the built‑in `reverse()` method
// -------------------------------------------------------------
// JavaScript already provides a method called `reverse()` that flips
// the order of an array **in place** (the original array is modified).
// It’s the quickest way and works for any array type.
//
// Example:
//   const nums = [1, 2, 3, 4];
//   nums.reverse();          // → [4, 3, 2, 1]
//
// Because it modifies the original array, if you need to keep the
// original order you should copy the array first (`[...nums].reverse()`).
//
// -------------------------------------------------------------
// 2️⃣  Method B – Manual reversal with a `for` loop
// -------------------------------------------------------------
// This approach builds a new reversed array step by step.
// It’s slower than the built‑in method for large arrays, but it
// teaches you how the algorithm works.
//
// Steps:
//   a) Create an empty array called `reversed` – this will hold the
//      result.
//   b) Loop over the original array from the **last index** down to
//      the **first index**.
//   c) On each iteration, push the current element onto `reversed`.
//   d) After the loop finishes, `reversed` contains the elements in
//      reverse order.
//
// Example code (inside the file):
//
//   const original = [10, 20, 30, 40];
//   const reversed = [];                     // 1️⃣ empty container
//   for (let i = original.length - 1; i >= 0; i--) { // 2️⃣ start at last index
//       reversed.push(original[i]);          // 3️⃣ add element to result
//   }
//
//   // `reversed` now holds [40, 30, 20, 10]
//
// -------------------------------------------------------------
// 🎯  Takeaway
// -------------------------------------------------------------
// • Use `array.reverse()` when you just need a quick reversal.
// • Use a manual loop when you want to understand or customize the
//   reversal process (e.g., reversing only part of an array).
//
// -------------------------------------------------------------

// ---------- Sample data ----------
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log('Original array:', fruits);

// ---------- Method A – built‑in reverse ----------
const reversedBuiltIn = [...fruits].reverse(); // spread to avoid mutating the original
console.log('Reversed (built‑in):', reversedBuiltIn);

// ---------- Method B – manual loop ----------
const reversedManual = [];
for (let i = fruits.length - 1; i >= 0; i--) {
    reversedManual.push(fruits[i]);
}
console.log('Reversed (manual loop):', reversedManual);