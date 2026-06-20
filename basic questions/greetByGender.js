// =============================================================
// greetByGender.js – Simple program to greet based on gender
// =============================================================
// This program:
// 1. Asks for the person's first name
// 2. Asks for their gender (male / female / other)
// 3. Uses an if‑else statement to build a greeting that matches the gender
// 4. Prints the greeting to the console
//
// How to run:
//   • In a browser console: just copy the code and run it.
//   • In Node.js: save as greetByGender.js and run `node greetByGender.js`
//
// -------------------------------------------------------------

// 1️⃣  Get input from the user
// In Node.js we use the built‑in `readline` module.
// In a browser you could replace these prompts with `prompt()` calls.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Helper function to ask a question and return the answer
function ask(question) {
    return new Promise(resolve => readline.question(question, answer => resolve(answer)));
}

// 2️⃣  Main logic – build the greeting based on gender
async function main() {
    const firstName = await ask('Enter your first name: ');

    // Normalise the gender input so we accept many variations
    const genderInput = (await ask('Enter your gender (male, female, other): ')).trim().toLowerCase();

    // Determine the appropriate greeting prefix using if‑else
    let greetingPrefix;
    if (genderInput === 'male' || genderInput === 'boy' || genderInput === 'man') {
        greetingPrefix = 'Mr.';
    } else if (genderInput === 'female' || genderInput === 'girl' || genderInput === 'woman') {
        greetingPrefix = 'Ms.';
    } else {
        greetingPrefix = ''; // No title for "other" or unknown values
    }

    // Build the final greeting message
    const greeting = `Hello ${greetingPrefix} ${firstName}! Nice to meet you.`;

    console.log(greeting);
}

// 3️⃣  Run the program
main()
    .then(() => {
        readline.close(); // Clean up the readline interface
    })
    .catch(err => {
        console.error('Oops! Something went wrong:', err);
        readline.close();
    });