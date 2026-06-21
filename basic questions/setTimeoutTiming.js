// =============================================================
// setTimeoutTiming.js – Measure the time between setTimeout call and execution
// =============================================================
// This script demonstrates how to record the start time and
// compare it with the end time when the callback actually runs.
// The difference shows how long the timer took to fire.
//
// How to run:
//   • Save this file as `setTimeoutTiming.js`
//   • In a terminal, run: `node setTimeoutTiming.js`
//
// -------------------------------------------------------------
// What is setTimeout?
// -------------------------------------------------------------
// `setTimeout(callback, delay)` schedules a function to run after
// a specified number of milliseconds. The delay is an estimate,
// not a guarantee – the browser (or Node) might delay a bit longer
// depending on what else is happening.
//
// -------------------------------------------------------------
// How to measure the timing
// -------------------------------------------------------------
// 1️⃣  Record the start time before calling `setTimeout`.
// 2️⃣  Start the timer.
// 3️⃣  When the callback runs, record the end time.
// 4️⃣  Subtract start from end to get the elapsed time.
//
// In JavaScript we use `Date.now()` which returns the current time
// in milliseconds since January 1, 1970.
//
// -------------------------------------------------------------
// What you’ll see
// -------------------------------------------------------------
// The console will show:
//   - The start time
//   - A message after the timer fires
//   - The end time
//   - The time difference (how long the timer took)
//
// -------------------------------------------------------------

// 1️⃣  Record the start time
const startTime = Date.now();

console.log('Start time:', startTime);

// 2️⃣  Schedule a function to run after 2000 milliseconds (2 seconds)
setTimeout(() => {
    // 3️⃣  Record the end time when the callback runs
    const endTime = Date.now();

    console.log('End time:', endTime);

    // 4️⃣  Calculate the elapsed time
    const elapsed = endTime - startTime;

    console.log('Time difference:', elapsed, 'milliseconds');
    console.log('Time difference:', (elapsed / 1000).toFixed(2), 'seconds');
}, 2000);