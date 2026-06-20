// ====================================================================
//  JAVASCRIPT CHEAT SHEET (Full Revision Notes)
//  Written for revision - keep it simple, keep it real.
// ====================================================================


// --------------------------------------------------------------------
// 1. VARIABLES - where you store your data
// --------------------------------------------------------------------
// Three ways to declare. Pick based on whether the value changes.

var oldSchool = "avoid this";     // function-scoped, can be redeclared - messy, don't use
let canChange = "update me";      // block-scoped, can be updated
const fixed = "never changes";    // block-scoped, can't be reassigned

// Quick rule: use const by default. Switch to let only when you
// actually need to reassign. Forget var exists.

canChange = "now I'm different";  // fine
// fixed = "nope";               // TypeError - const is locked


// --------------------------------------------------------------------
// 2. DATA TYPES - what kind of data you're holding
// --------------------------------------------------------------------
// Primitives (passed by value)
const str   = "hello";            // string
const num   = 42;                 // number (no separate int/float in JS)
const big   = 9007199254740991n;  // BigInt - for huge numbers
const flag  = true;               // boolean
const empty = null;               // intentional "no value"
const nada  = undefined;          // declared but no value assigned
const id    = Symbol("id");       // unique identifier

// Reference types (passed by reference)
const list = [1, 2, 3];           // array
const obj  = { name: "Shiv" };    // object

// typeof quirks worth remembering:
typeof null;        // "object"   (yes, it's a famous bug - just memorise it)
typeof [];          // "object"   (so use Array.isArray() instead)
typeof NaN;         // "number"   (weird but true)
typeof function(){};// "function"


// --------------------------------------------------------------------
// 3. STRINGS - text handling
// --------------------------------------------------------------------
const first = "Shiv";
const last  = "Bhardwaj";

// Prefer template literals over + concatenation - cleaner
const full = `${first} ${last}`;   // "Shiv Bhardwaj"

// The methods you'll use 90% of the time:
first.length;            // 4
first.toUpperCase();     // "SHIV"
first.toLowerCase();     // "shiv"
first.includes("hi");    // true
first.startsWith("Sh");  // true
first.endsWith("iv");    // true
first.indexOf("i");      // 1 (first match), -1 if not found
first.slice(1, 3);       // "hi" (start, end) - doesn't change original
first.replace("S", "L"); // "Lhiv"
"  pad  ".trim();        // "pad" (also trimStart/trimEnd)
"a,b,c".split(",");      // ["a","b","c"]
first.repeat(2);         // "ShivShiv"
first.padStart(6, "0");  // "00Shiv" (pad to length 6)
first.at(-1);            // "v" (negative index - from end, modern way)


// --------------------------------------------------------------------
// 4. NUMBERS & MATH
// --------------------------------------------------------------------
let x = 10, y = 3;
x + y;   // 13
x - y;   // 7
x * y;   // 30
x / y;   // 3.333...
x % y;   // 1   (remainder)
x ** y;  // 1000 (power - 10^3)
x++;     // increment by 1
x += 5;  // x = x + 5 (works with -, *, / too)

// Gotchas:
0.1 + 0.2;          // 0.30000000000000004 (floating point - always has been)
10 / 0;             // Infinity
"abc" * 2;          // NaN
NaN === NaN;        // false (!) - use isNaN() instead

// Useful conversions & methods:
Number("42");       // 42
parseInt("42.9");   // 42
parseFloat("42.9"); // 42.9
(123).toString();   // "123"
(3.14159).toFixed(2); // "3.14"
Number.isInteger(5);   // true

// Math object
Math.round(4.7);    // 5
Math.floor(4.9);    // 4
Math.ceil(4.1);     // 5
Math.abs(-7);       // 7
Math.max(3, 9, 1);  // 9
Math.min(3, 9, 1);  // 1
Math.sqrt(25);      // 5
Math.pow(2, 10);    // 1024
Math.random();      // 0 to <1
// Random integer between 1 and 10:
Math.floor(Math.random() * 10) + 1;


// --------------------------------------------------------------------
// 5. OPERATORS & COMPARISONS
// --------------------------------------------------------------------
// Loose vs strict equality - ALWAYS use ===
5 == "5";    // true  (coerces type - dangerous)
5 === "5";   // false (strict - what you want)
5 !== "5";   // true

// Logical operators
true && false;  // false (AND)
true || false;  // true  (OR)
!true;          // false (NOT)

// Short-circuit tricks (handy in real code)
const name = userInput || "Guest";        // fallback if falsy
const city = data?.address?.city;         // optional chaining
const count = value ?? 0;                 // nullish coalescing - only null/undefined

// Falsy values (everything else is truthy):
// false, 0, "", null, undefined, NaN, -0, 0n

// ?? vs || - the difference matters:
0 || 10;   // 10  (0 is falsy, so picks 10)
0 ?? 10;   // 0   (0 is NOT null/undefined, keeps 0)


// --------------------------------------------------------------------
// 6. CONDITIONS
// --------------------------------------------------------------------
const age = 20;

if (age < 13) {
  console.log("kid");
} else if (age < 18) {
  console.log("teen");
} else {
  console.log("adult");
}

// Ternary - one-liner if/else (use for simple stuff only)
const status = age >= 18 ? "can vote" : "too young";

// Switch - good for many fixed values
switch (new Date().getDay()) {
  case 0: console.log("Sunday"); break;
  case 6: console.log("Saturday"); break;
  default: console.log("Weekday");
}


// --------------------------------------------------------------------
// 7. LOOPS
// --------------------------------------------------------------------
// Classic for
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while - when you don't know the count
let n = 0;
while (n < 3) { n++; }

// do-while - runs at least once
let m = 0;
do { m++; } while (m < 3);

// for...of - iterate VALUES of arrays/strings (use this for arrays)
for (const item of [10, 20, 30]) {
  console.log(item);
}

// for...in - iterate KEYS (use for objects, NOT arrays)
const person = { name: "Shiv", age: 20 };
for (const key in person) {
  console.log(key, person[key]);
}

// break (exit loop) vs continue (skip iteration)
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;  // skip 3
  if (i === 7) break;     // stop at 7
  console.log(i);         // 0,1,2,4,5,6
}


// --------------------------------------------------------------------
// 8. FUNCTIONS
// --------------------------------------------------------------------
// Declaration - hoisted (can call before definition)
function add(a, b) {
  return a + b;
}

// Expression - not hoisted
const sub = function (a, b) {
  return a - b;
};

// Arrow function - modern, concise. No own `this`.
const mul = (a, b) => a * b;

// Arrow with body (when you need multiple lines)
const calc = (a, b) => {
  const sum = a + b;
  return sum * 2;
};

// Default params
function greet(name = "Guest") {
  return `Hi ${name}`;
}

// Rest params - gather args into an array
function sumAll(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sumAll(1, 2, 3, 4);  // 10

// Returning an object from arrow - wrap in parens
const makeUser = (name) => ({ name, active: true });


// --------------------------------------------------------------------
// 9. ARRAYS - the workhorse of JS
// --------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];

// Add / remove
arr.push(6);        // add to end
arr.pop();          // remove from end
arr.unshift(0);     // add to start
arr.shift();        // remove from start

// Find stuff
arr.indexOf(3);           // 2
arr.includes(3);          // true
arr.find(n => n > 2);     // 3 (first match)
arr.findIndex(n => n > 2);// 2

// The big three - map, filter, reduce (know these cold)
const doubled = arr.map(n => n * 2);          // [2,4,6,8,10]
const evens   = arr.filter(n => n % 2 === 0); // [2,4]
const total   = arr.reduce((sum, n) => sum + n, 0); // 15

// forEach - just loops, returns nothing
arr.forEach(n => console.log(n));

// Check conditions on whole array
arr.every(n => n > 0);   // true (all must pass)
arr.some(n => n > 4);    // true (at least one)

// Sort - mutates! And sorts as STRINGS by default, so use compare fn
[3, 1, 10, 2].sort();              // [1,10,2,3] - wrong for numbers!
[3, 1, 10, 2].sort((a, b) => a - b); // [1,2,3,10] - correct
[3, 1, 10, 2].sort((a, b) => b - a); // [10,3,2,1] - descending

// slice vs splice - the classic confusion
// slice(start, end) - returns copy, ORIGINAL UNCHANGED
arr.slice(1, 3);  // [2,3]

// splice(start, deleteCount, ...items) - CHANGES ORIGINAL
arr.splice(1, 2);       // removes 2 items from index 1
arr.splice(1, 0, 99);   // inserts 99 at index 1

// Combine & spread
const merged = [...[1, 2], ...[3, 4]]; // [1,2,3,4]
const flat = [1, [2, 3], [4]].flat();  // [1,2,3,4]

// Destructuring
const [first1, second, ...rest] = [10, 20, 30, 40];
// first1=10, second=20, rest=[30,40]

// Swap variables (no temp needed)
let a = 1, b = 2;
[a, b] = [b, a];  // a=2, b=1


// --------------------------------------------------------------------
// 10. OBJECTS
// --------------------------------------------------------------------
const user = {
  name: "Shiv",
  age: 20,
  "favorite color": "blue",  // key with space - use bracket notation
  greet() {                  // shorthand method
    return `Hi, I'm ${this.name}`;
  }
};

// Access
user.name;                // "Shiv" - dot notation
user["favorite color"];   // "blue" - bracket (for special keys)

// Add / update / delete
user.email = "shiv@mail.com";
user.age = 21;
delete user.email;

// Check & iterate
"name" in user;                  // true
Object.keys(user);               // ["name","age",...]
Object.values(user);             // ["Shiv",21,...]
Object.entries(user);            // [["name","Shiv"],["age",21],...]

// Shorthand when key = variable name
const name = "Shiv", age = 20;
const me = { name, age };  // { name: "Shiv", age: 20 }

// Spread & merge
const copy = { ...user };
const updated = { ...user, age: 25, city: "Delhi" };

// Destructuring (rename + default)
const { name: fullName, phone = "N/A" } = user;

// Optional chaining - safe nested access
const city = user?.address?.city;  // undefined instead of error


// --------------------------------------------------------------------
// 11. CLASSES & OOP (ES6)
// --------------------------------------------------------------------
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);          // call parent constructor
    this.breed = breed;
  }
  speak() {
    return `${this.name} barks!`;  // override
  }
  static info() {
    return "Dogs are loyal";
  }
}

const buddy = new Dog("Buddy", "Lab");
buddy.speak();     // "Buddy barks!"
Dog.info();        // "Dogs are loyal" (static - call on class)


// --------------------------------------------------------------------
// 12. ASYNC JAVASCRIPT - the important part
// --------------------------------------------------------------------
// JS is single-threaded. Async stuff is handled by the event loop.

// (a) Callbacks - old way, leads to "callback hell"
setTimeout(() => console.log("1 sec later"), 1000);

// (b) Promises - 3 states: pending, fulfilled, rejected
const promise = new Promise((resolve, reject) => {
  const success = true;
  success ? resolve("done") : reject("failed");
});

promise
  .then(result => console.log(result))
  .catch(err => console.log(err))
  .finally(() => console.log("runs no matter what"));

// (c) async/await - cleanest, reads like sync code
async function getData() {
  try {
    const res = await fetch("https://api.example.com");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Something broke:", err);
  }
}

// Run promises in parallel (faster than await one by one)
const [users, posts] = await Promise.all([
  fetch("/users").then(r => r.json()),
  fetch("/posts").then(r => r.json())
]);


// --------------------------------------------------------------------
// 13. JSON - data format for APIs
// --------------------------------------------------------------------
const obj2 = { name: "Shiv", age: 20 };

// Object -> JSON string (for sending)
const jsonStr = JSON.stringify(obj2);  // '{"name":"Shiv","age":20}'
const pretty = JSON.stringify(obj2, null, 2);  // indented

// JSON string -> Object (for receiving)
const parsed = JSON.parse(jsonStr);   // { name: "Shiv", age: 20 }


// --------------------------------------------------------------------
// 14. ERROR HANDLING
// --------------------------------------------------------------------
try {
  // risky code here
  const data = JSON.parse("not json");
} catch (err) {
  console.log("Caught:", err.message);
} finally {
  console.log("always runs");
}

// Throw your own
function divide(a, b) {
  if (b === 0) throw new Error("Can't divide by zero");
  return a / b;
}


// --------------------------------------------------------------------
// 15. DATES
// --------------------------------------------------------------------
const now = new Date();
now.getFullYear();   // 2026
now.getMonth();      // 0-11 (January = 0, annoying but remember it)
now.getDate();       // 1-31
now.getDay();        // 0-6 (Sunday = 0)
now.getHours();      // 0-23
now.toISOString();   // "2026-06-20T..."
now.toLocaleDateString(); // local format


// --------------------------------------------------------------------
// 16. MODULES (ES Modules)
// --------------------------------------------------------------------
// In file math.js:
//   export const add = (a, b) => a + b;
//   export default function multiply(a, b) { return a * b; }

// In another file:
//   import multiply, { add } from "./math.js";
//   import * as math from "./math.js";   // import everything


// --------------------------------------------------------------------
// 17. DOM BASICS (browser side)
// --------------------------------------------------------------------
const btn = document.querySelector("#myButton");
const items = document.querySelectorAll(".item");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked", e.target);
});

// Manipulate
const title = document.querySelector("h1");
title.textContent = "New Title";
title.classList.add("highlight");
title.classList.toggle("active");
title.style.color = "red";

// Create & insert
const div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);


// --------------------------------------------------------------------
// 18. STORAGE (browser)
// --------------------------------------------------------------------
localStorage.setItem("user", "Shiv");
localStorage.getItem("user");     // "Shiv"
localStorage.removeItem("user");
localStorage.clear();

// sessionStorage - same API, cleared when tab closes

// Store objects (must stringify)
localStorage.setItem("prefs", JSON.stringify({ theme: "dark" }));
const prefs = JSON.parse(localStorage.getItem("prefs"));


// --------------------------------------------------------------------
// 19. TIMERS
// --------------------------------------------------------------------
// setTimeout - run once after delay
const timeoutId = setTimeout(() => console.log("hi"), 2000);
clearTimeout(timeoutId);  // cancel

// setInterval - repeat every delay
const intervalId = setInterval(() => console.log("tick"), 1000);
clearInterval(intervalId);  // stop it


// --------------------------------------------------------------------
// 20. USEFUL MODERN TRICKS
// --------------------------------------------------------------------
// Spread to remove duplicates
const unique = [...new Set([1, 2, 2, 3, 3])]; // [1,2,3]

// Convert NodeList to array
[...document.querySelectorAll("div")];

// Object.fromEntries
Object.fromEntries([["a", 1], ["b", 2]]); // { a:1, b:2 }

// Optional chaining with method calls
const result = user?.getName?.();

// Nullish assignment
user.name ??= "Anonymous";  // only set if null/undefined

// Numeric separators (readability)
const billion = 1_000_000_000;

// String matching
"hello".match(/l/g);  // ["l","l"]  (regex)


// ====================================================================
//  THAT'S THE CORE. Revise this, build small projects, repeat.
//  The more you type it out yourself, the more it sticks.
// ====================================================================
