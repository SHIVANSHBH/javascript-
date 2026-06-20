// =============================================================
// maleFirstNames.js – Print first names of all male people
// =============================================================
// This script demonstrates how to work with a **complex object** 
// (an array of person objects) and extract the first names of 
// only those people whose gender is "male".  The approach uses
// simple iteration and a conditional check – perfect for beginners
// who are learning how to navigate nested data structures.
//
// -------------------------------------------------------------
// Sample data structure
// -------------------------------------------------------------
// We store a list of people in an array called `people`.
// Each person is an object with several properties:
//   - firstName : string
//   - lastName  : string
//   - gender    : string   (e.g., "male", "female", "other")
//   - age       : number
//   - city      : string
//
// The array can contain as many people as you need – the code
// works for any size.
// =============================================================

// ---------- 1️⃣  The complex data (array of person objects) ----------
const people = [
    {
        firstName: "Shivansh",
        lastName: "Bhardwaj",
        gender: "male",
        age: 28,
        city: "Delhi"
    },
    {
        firstName: "Priya",
        lastName: "Kapoor",
        gender: "female",
        age: 24,
        city: "Mumbai"
    },
    {
        firstName: "Rohit",
        lastName: "Sharma",
        gender: "male",
        age: 35,
        city: "Bangalore"
    },
    {
        firstName: "Ananya",
        lastName: "Patel",
        gender: "female",
        age: 22,
        city: "Pune"
    },
    {
        firstName: "Amit",
        lastName: "Singh",
        gender: "male",
        age: 40,
        city: "Hyderabad"
    }
    // 👉 You can add more person objects here if you wish
);

// ---------- 2️⃣  Extract and print first names of all males ----------
console.log("First names of all male people:");
people.forEach(person => {
    // Check if the current person's gender is "male"
    if (person.gender.toLowerCase() === "male") {
        // Print only the first name
        console.log(person.firstName);
    }
});