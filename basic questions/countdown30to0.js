// =============================================================
// countdown30to0.js – Simple countdown from 30 to 0
// =============================================================
// This script uses a `for` loop to count down from 30 down to 0.
// After each number is printed, a small pause is added so you can
// see the countdown in action.
//
// How to run:
//   • Save this file as `countdown30to0.js`
//   • In a terminal, run: `node countdown30to0.js`
//
// -------------------------------------------------------------
// What is a countdown?
// -------------------------------------------------------------
// A countdown is a simple counting process that goes in reverse:
//   30, 29, 28, …, 2, 1, 0
// It’s commonly used for timing, animations, or simply to show
// a sequence in the opposite order.
//
// -------------------------------------------------------------
// How the loop works here
// -------------------------------------------------------------
// The `for` loop has three parts:
//   1️⃣  `let i = 30`   – start at 30
//   2️⃣  `i >= 0`       – keep going while i is greater than or equal to 0
//   3️⃣  `i--`          – decrease i by 1 after each iteration
//
// Inside the loop we:
//   • Print the current value of `i`
//   • Pause briefly using `setTimeout` (1000 milliseconds = 1 second)
//   • After the pause, the loop continues to the next number
//
// -------------------------------------------------------------

// 1️⃣  Start the countdown
for (let i = 30; i >= 0; i--) {
    // Print the current number
    console.log(i);

    // Pause for 1 second so you can see each number
    // 1000 milliseconds = 1 second
    if (i > 0) {          // no pause after 0
        setTimeout(() => {}, 1000);
    }
}