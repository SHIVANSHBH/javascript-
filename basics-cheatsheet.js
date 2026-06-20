// ========== JAVASCRIPT BASICS CHEAT SHEET ==========

// ----- VARIABLES -----
// var - old way, don't use much now
var oldWay = "I can be redeclared";
// let - can be updated but not redeclared
let name = "Shivansh";
name = "Shiv"; // allowed
// const - cannot be updated or redeclared
const pi = 3.14;
// pi = 3.15; // will give error

// ----- DATA TYPES -----
// primitive types
let stringType = "Hello World";
let numberType = 42;
let booleanType = true;
let nullType = null; // intentional empty value
let undefinedType; // declared but not assigned
let bigIntType = 12345678901234567890n;
let symbolType = Symbol("id");

// reference types
let arrayType = [1, 2, 3, 4, 5];
let objectType = { name: "Shivansh", age: 20 };

// typeof operator tells you the type
console.log(typeof "hello"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof null); // object (this is a known JS bug)
console.log(typeof undefined); // undefined

// ----- STRINGS -----
let firstName = "Shivansh";
let lastName = "Bhardwaj";

// concatenation - old way
let fullName1 = firstName + " " + lastName;

// template literals - new way (use this)
let fullName2 = `${firstName} ${lastName}`;

// common string methods
console.log(firstName.length); // 8 - total characters
console.log(firstName.toUpperCase()); // SHIVANSH
console.log(firstName.toLowerCase()); // shivansh
console.log(firstName[0]); // S - first character
console.log(firstName.charAt(0)); // S - same thing
console.log(firstName.indexOf("h")); // 1 - position of first 'h'
console.log(firstName.lastIndexOf("h")); // 6 - position of last 'h'
console.log(firstName.includes("van")); // true
console.log(firstName.slice(0, 5)); // Shiva - from index 0 to 4
console.log(firstName.substring(0, 5)); // Shiva - similar to slice
console.log(firstName.replace("Shiv", "Shubh")); // Shubhansh
console.log("   hello   ".trim()); // "hello" - removes spaces
console.log(firstName.split("")); // ['S','h','i','v','a','n','s','h']
console.log(firstName.repeat(2)); // ShivanshShivansh

// ----- NUMBERS -----
let a = 10;
let b = 3;

// arithmetic operators
console.log(a + b); // 13 - addition
console.log(a - b); // 7 - subtraction
console.log(a * b); // 30 - multiplication
console.log(a / b); // 3.33 - division
console.log(a % b); // 1 - remainder (modulus)
console.log(a ** b); // 1000 - exponent (10^3)

// special values
console.log(10 / 0); // Infinity
console.log(-10 / 0); // -Infinity
console.log("abc" * 2); // NaN (Not a Number)

// number methods
let num = 123.456;
console.log(num.toFixed(2)); // 123.46 - rounds to 2 decimal places
console.log(num.toPrecision(4)); // 123.5 - total digits
console.log(Number("42")); // 42 - string to number
console.log(parseInt("42.7")); // 42 - string to integer
console.log(parseFloat("42.7")); // 42.7 - string to float
console.log(isNaN("hello")); // true - not a number
console.log(isFinite(10 / 0)); // false - infinity check

// ----- CONDITIONS (if-else) -----
let age = 18;

if (age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 18) {
  console.log("Teenager");
} else if (age >= 18 && age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// ternary operator - shortcut for simple if-else
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes

// switch statement - when you have multiple specific values
let dayNumber = 3;
let dayName;
switch (dayNumber) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); // Wednesday

// logical operators
console.log(true && true); // true - AND (both must be true)
console.log(true || false); // true - OR (at least one true)
console.log(!true); // false - NOT (reverses)

// ----- LOOPS -----
// for loop - when you know how many times to run
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
  // i++ means i = i + 1
}

// while loop - runs while condition is true
let count = 0;
while (count < 5) {
  console.log(count); // 0, 1, 2, 3, 4
  count++;
}

// do-while loop - runs at least once even if condition is false
let x = 0;
do {
  console.log(x); // 0, 1, 2, 3, 4
  x++;
} while (x < 5);

// for...of loop - iterates over array values
let fruits = ["Apple", "Mango", "Banana", "Orange"];
for (let fruit of fruits) {
  console.log(fruit); // Apple, Mango, Banana, Orange
}

// for...in loop - iterates over object keys or array indexes
let person = { name: "Shivansh", age: 20, city: "Delhi" };
for (let key in person) {
  console.log(`${key}: ${person[key]}`); // name: Shivansh, age: 20, city: Delhi
}

// break vs continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // skip 3, continue to next iteration
  if (i === 7) break; // stop loop completely at 7
  console.log(i); // 0, 1, 2, 4, 5, 6
}

// ----- FUNCTIONS -----
// function declaration - can be called before definition (hoisting)
function greet(name) {
  return `Hello ${name}!`;
}
console.log(greet("Shivansh")); // Hello Shivansh!

// function expression - stored in a variable
const add = function (a, b) {
  return a + b;
};
console.log(add(5, 3)); // 8

// arrow function - modern syntax (ES6)
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// arrow function with multiple lines
const divide = (a, b) => {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
};
console.log(divide(10, 2)); // 5

// default parameters
function sayHello(name = "Guest") {
  return `Hello ${name}`;
}
console.log(sayHello()); // Hello Guest
console.log(sayHello("Shiv")); // Hello Shiv

// rest parameters - captures multiple arguments as an array
function sumAll(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// callback function - function passed as argument
function processUser(name, callback) {
  let result = callback(name);
  console.log(result);
}
processUser("Shivansh", function (n) {
  return `Welcome ${n}`;
}); // Welcome Shivansh

// ----- ARRAYS -----
let numbers = [10, 20, 30, 40, 50];

// basic properties and methods
console.log(numbers.length); // 5 - total items
console.log(numbers[0]); // 10 - first element
console.log(numbers[numbers.length - 1]); // 50 - last element

// adding and removing elements
numbers.push(60); // add to end [10,20,30,40,50,60]
numbers.pop(); // remove from end [10,20,30,40,50]
numbers.unshift(5); // add to start [5,10,20,30,40,50]
numbers.shift(); // remove from start [10,20,30,40,50]

// finding elements
console.log(numbers.indexOf(30)); // 2 - position of 30
console.log(numbers.includes(25)); // false - check if exists
console.log(numbers.find((n) => n > 25)); // 30 - first element > 25
console.log(numbers.findIndex((n) => n > 25)); // 2 - index of first > 25

// important array methods (ES6)
let nums = [1, 2, 3, 4, 5];

// map - creates new array by transforming each element
let doubled = nums.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - creates new array with elements that pass condition
let evens = nums.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce - reduces array to single value
let sum = nums.reduce((total, current) => total + current, 0);
console.log(sum); // 15 (1+2+3+4+5)

// forEach - executes function for each element (no return)
nums.forEach((n) => console.log(n * 2));

// sort - sorts array (converts to string by default)
let unsorted = [3, 1, 4, 1, 5, 9];
unsorted.sort((a, b) => a - b); // ascending
console.log(unsorted); // [1, 1, 3, 4, 5, 9]
unsorted.sort((a, b) => b - a); // descending
console.log(unsorted); // [9, 5, 4, 3, 1, 1]

// slice - returns a portion (doesn't modify original)
let chars = ["a", "b", "c", "d", "e"];
console.log(chars.slice(1, 4)); // ['b','c','d']

// splice - add/remove at specific position (modifies original)
chars.splice(2, 1, "x"); // at index 2, remove 1, add 'x'
console.log(chars); // ['a','b','x','d','e']

// concat - merge arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1,2,3,4]

// spread operator with arrays
let combined = [...arr1, ...arr2];
console.log(combined); // [1,2,3,4]

// every - checks if ALL elements pass condition
console.log(nums.every((n) => n > 0)); // true

// some - checks if AT LEAST ONE element passes condition
console.log(nums.some((n) => n > 4)); // true

// ----- OBJECTS -----
// object literal - key: value pairs
let user = {
  name: "Shivansh",
  age: 20,
  city: "Delhi",
  isStudent: true,
  // method inside object
  introduce: function () {
    return `Hi, I'm ${this.name} from ${this.city}`;
  },
  // shorthand method (ES6)
  sayHi() {
    return `Hello from ${this.name}`;
  },
};

// accessing properties
console.log(user.name); // Shivansh - dot notation
console.log(user["age"]); // 20 - bracket notation (use when key has spaces or is dynamic)

// adding/updating properties
user.email = "shiv@test.com"; // add new
user.age = 21; // update existing

// deleting properties
delete user.isStudent;

// check if property exists
console.log("name" in user); // true
console.log(user.hasOwnProperty("age")); // true

// object keys, values, entries
console.log(Object.keys(user)); // ['name','age','city','email']
console.log(Object.values(user)); // ['Shivansh',21,'Delhi','shiv@test.com']
console.log(Object.entries(user)); // [['name','Shivansh'],['age',21],...]

// spread operator with objects
let userCopy = { ...user };
let userWithMore = { ...user, country: "India" };

// destructuring objects
let { name: userName, city: userCity } = user;
console.log(userName); // Shivansh
console.log(userCity); // Delhi

// destructuring with default value
let { phone = "Not provided" } = user;
console.log(phone); // Not provided

// ----- SPREAD & REST OPERATORS -----
// spread - expands elements
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5]; // [1,2,3,4,5]
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 }; // {a:1, b:2, c:3}

// rest - collects elements
function showNames(...names) {
  console.log(names); // array of all arguments
}
showNames("Shiv", "Raj", "Amit"); // ['Shiv','Raj','Amit']

// destructuring with rest
let [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2,3,4,5]

// ----- TRUTHY & FALSY VALUES -----
// Falsy values (evaluate to false in boolean context):
// false, 0, "" (empty string), null, undefined, NaN
if (0) {
  console.log("This will NOT run");
}
if ("hello") {
  console.log("This WILL run"); // non-empty string is truthy
}
if ([]) {
  console.log("This WILL run too"); // empty array is truthy
}

// converting to boolean
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("text")); // true

// ----- NULLISH COALESCING (??) -----
// returns right side only if left is null or undefined
let userInput = null;
let result = userInput ?? "Default Value";
console.log(result); // Default Value

let userInput2 = "";
let result2 = userInput2 ?? "Default Value";
console.log(result2); // "" (empty string is NOT null/undefined)

// difference from ||
let count2 = 0;
console.log(count2 || 10); // 10 (0 is falsy)
console.log(count2 ?? 10); // 0 (0 is not null/undefined)

// ----- OPTIONAL CHAINING (?.) -----
// safely access nested properties without checking each level
let apiResponse = {
  user: {
    name: "Shivansh",
    address: {
      city: "Delhi",
    },
  },
};

console.log(apiResponse?.user?.name); // Shivansh
console.log(apiResponse?.user?.address?.city); // Delhi
console.log(apiResponse?.user?.phone?.number); // undefined (no error)

// without optional chaining, you'd need:
if (apiResponse && apiResponse.user && apiResponse.user.address) {
  console.log(apiResponse.user.address.city);
}

// ----- TEMPLATE LITERALS -----
let product = "Laptop";
let price = 55000;
let discount = 10;

// old way
let msg1 = "Product: " + product + ", Price: " + price;

// new way (use this)
let msg2 = `Product: ${product}, Price: ₹${price}`;

// multi-line strings
let multiLine = `
  Product: ${product}
  Price: ₹${price}
  Discount: ${discount}%
  Final: ₹${price - (price * discount) / 100}
`;

// ----- DATES -----
let now = new Date(); // current date & time
let specific = new Date("2024-01-15"); // specific date
let custom = new Date(2024, 0, 15, 10, 30, 0); // (year, month-0, day, hours, mins, secs)

console.log(now.getFullYear()); // 2026
console.log(now.getMonth()); // 0-11 (Jan is 0)
console.log(now.getDate()); // 1-31
console.log(now.getDay()); // 0-6 (Sun is 0)
console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59
console.log(now.getSeconds()); // 0-59
console.log(now.toDateString()); // "Sat Jun 20 2026"
console.log(now.toLocaleDateString()); // "6/20/2026"

// ----- MATH OBJECT -----
console.log(Math.PI); // 3.14159...
console.log(Math.round(4.6)); // 5 - nearest integer
console.log(Math.ceil(4.1)); // 5 - round up
console.log(Math.floor(4.9)); // 4 - round down
console.log(Math.trunc(4.9)); // 4 - remove decimal (no rounding)
console.log(Math.random()); // random 0 to 1 (excluding 1)
console.log(Math.floor(Math.random() * 10) + 1); // random 1-10
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.min(10, 20, 5)); // 5
console.log(Math.abs(-5)); // 5 - absolute value
console.log(Math.pow(2, 3)); // 8 - 2^3
console.log(Math.sqrt(25)); // 5 - square root

// ----- TYPE CONVERSION -----
// string to number
console.log(Number("123")); // 123
console.log(+"123"); // 123 (unary plus)
console.log(parseInt("123abc")); // 123
console.log(parseFloat("12.34abc")); // 12.34

// number to string
console.log(String(123)); // "123"
console.log((123).toString()); // "123"

// to boolean
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

// ----- == vs === -----
// == checks value (does type coercion)
console.log(5 == "5"); // true (string "5" converted to number 5)

// === checks value AND type (strict equality - use this)
console.log(5 === "5"); // false (number vs string)
console.log(5 === 5); // true

// ----- SHORT-CIRCUIT EVALUATION -----
// && - returns first falsy value or last truthy value
console.log(0 && "hello"); // 0
console.log(1 && "hello"); // "hello"
console.log(true && "done"); // "done"

// || - returns first truthy value or last falsy value
console.log(0 || "hello"); // "hello"
console.log("" || "default"); // "default"
console.log("text" || "default"); // "text"

// practical use
let isLoggedIn = true;
isLoggedIn && console.log("Welcome user"); // only runs if logged in
let displayName = user.name || "Guest";

// ----- TYPEOF OPERATOR -----
console.log(typeof "text"); // string
console.log(typeof 42); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object (JS bug)
console.log(typeof []); // object (arrays are objects)
console.log(typeof {}); // object
console.log(typeof function () {}); // function

// check if array properly
console.log(Array.isArray([1, 2, 3])); // true

// ----- ERROR HANDLING -----
// try-catch - catches errors so your code doesn't crash
try {
  let value = someUndefinedVariable;
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("This always runs");
}

// throwing custom errors
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divideNumbers(10, 0));
} catch (err) {
  console.log(err.message); // Division by zero is not allowed
}

// ----- BASIC SCOPE -----
// global scope - accessible everywhere
let globalVar = "I'm global";

function testScope() {
  // function scope
  let functionVar = "I'm in function";
  if (true) {
    // block scope
    let blockVar = "I'm in block";
    var oldVar = "I ignore block scope"; // var is NOT block-scoped
    console.log(globalVar); // accessible
    console.log(functionVar); // accessible
    console.log(blockVar); // accessible
  }
  console.log(oldVar); // accessible (var ignores block)
  // console.log(blockVar); // Error - not accessible here
}

// ----- TIMERS -----
// setTimeout - runs once after delay
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

// setInterval - runs repeatedly every delay
let interval = setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);

// stop interval after 5 seconds
setTimeout(() => {
  clearInterval(interval);
  console.log("Stopped");
}, 5000);
