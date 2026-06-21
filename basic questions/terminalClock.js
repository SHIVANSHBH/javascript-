// =============================================================
// terminalClock.js – Simple terminal clock (HH:MM:SS)
// =============================================================
// This script shows a real‑time clock in the console that updates
// every second. The time is displayed in a clean HH:MM:SS format.
//
// How to run:
//   • Save this file as `terminalClock.js`
//   • In a terminal, run: `node terminalClock.js`
//   • Press Ctrl+C to stop the clock
//
// -------------------------------------------------------------
// What is a terminal clock?
// -------------------------------------------------------------
// A terminal clock is a simple program that displays the current
// time (hours, minutes, seconds) and refreshes it automatically.
// This is useful for:
//   • Checking the current time quickly
//   • Timing small tasks
//   • Demonstrating how `setInterval` works in JavaScript
//
// -------------------------------------------------------------
// How the clock works
// -------------------------------------------------------------
// 1️⃣  Get the current date and time using `new Date()`.
// 2️⃣  Extract the hours, minutes, and seconds.
// 3️⃣  Format them as two‑digit numbers (e.g., "09" instead of "9").
// 4️⃣  Build the string "HH:MM:SS" and print it.
// 5️⃣  Use `setInterval` to run the update function every 1000
//     milliseconds (1 second).
//
// -------------------------------------------------------------
// Important notes
// -------------------------------------------------------------
// • The clock runs forever until you stop it (Ctrl+C).
// • `setInterval` returns an ID you can use with `clearInterval` to stop it.
// • To keep the clock running on a single line, we use `\r` (carriage return).
//   This moves the cursor back to the start of the line instead of printing a new line.
//
// -------------------------------------------------------------

// Helper function to get two‑digit time component (e.g., 9 → "09")
function pad(num) {
    return num.toString().padStart(2, '0');
}

// Function to get current time as "HH:MM:SS"
function getTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// 1️⃣  Print the clock and start the interval
console.log('Terminal Clock (HH:MM:SS) – Press Ctrl+C to stop');

// Update the clock every 1000 milliseconds (1 second)
const intervalId = setInterval(() => {
    const time = getTime();
    // \r moves the cursor back to the start of the line
    process.stdout.write(`\r${time}   `);
}, 1000);