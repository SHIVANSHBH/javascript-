// =============================================================
// count0to1000.js – Simple program that counts from 0 to 1000
// =============================================================
// This program demonstrates a **for loop** – a control structure that
// repeats a block of code a specific number of times.
// Here we loop 1,000 times (from 0 up to, but not including, 1000)
// and print each number to the console.
//
// How to run:
//   • Save this file as `count0to1000.js`
//   • In a terminal, run: `node count0to1000.js`
//   • You will see the numbers 0, 1, 2, …, 999 printed one per line.
//
// -------------------------------------------------------------
// What is a `for` loop?
// -------------------------------------------------------------
// The syntax is:
//
//   for (initialisation; condition; increment) {
//       // code to execute each iteration
//   }
//
// • **initialisation** – runs once before the loop starts (usually to set a counter)
// • **condition** – evaluated before each iteration; if `false`, the loop stops
// • **increment** – runs after each iteration (often to update the counter)
// -------------------------------------------------------------

// 1️⃣  Set up the loop
for (let i = 0; i < 1000; i++) {
    // `i` starts at 0, increases by 1 each time, and stops before reaching 1000
    console.log(i); // Print the current value of `i`
}

// -------------------------------------------------------------
// What you’ll see in the console
// -------------------------------------------------------------
// 0
// 1
// 2
// 3
// …
// 998
// 999
//
// The loop runs exactly 1,000 times, giving you every integer
// from 0 up to 999. This is a classic “counting” pattern used in
// many programs for iterating over a known range.
//
// -------------------------------------------------------------
// Variations you might try
// -------------------------------------------------------------
// • Count only even numbers: `for (let i = 0; i < 1000; i += 2) { … }`
// • Count down from 1000 to 0: `for (let i = 1000; i >= 0; i--) { … }`
// • Print a custom message every 100 numbers:
//       if (i % 100 === 0) console.log(`Reached ${i}`);
// -------------------------------------------------------------