// Simple Greeting Program
// This program asks for a person's first and last name
// and then greets them with a friendly message.

// Method 1: Using prompt (works in browser console)
// Uncomment the lines below if you want to use prompt-based input:

// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");

// console.log(`Hello ${firstName} ${lastName}! Welcome to our platform.`);

// Method 2: Using function with parameters (recommended for learning)
// This version takes firstName and lastName as arguments and returns a greeting.

function greetPerson(firstName, lastName) {
    // Basic validation - check if names are provided
    if (!firstName || !lastName) {
        return "Please provide both first and last name!";
    }
    
    // Create a full greeting message
    const fullName = `${firstName} ${lastName}`;
    return `Hello ${fullName}! Welcome to our platform.`;
}

// Example usage:
// const greeting = greetPerson("Shivansh", "Bhardwaj");
// console.log(greeting); // Output: Hello Shivansh Bhardwaj! Welcome to our platform.

// Method 3: Interactive version using prompt (uncomment to use)
// const firstName = prompt("Enter your first name:");
// const lastName = prompt("Enter your last name:");
// if (firstName && lastName) {
//     alert(`Hello ${firstName} ${lastName}! Welcome!`);
// } else {
//     alert("Please enter both names!");
// }

// Export the function if this is a module (for Node.js or modern JS)
// module.exports = { greetPerson };