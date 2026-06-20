# JavaScript Basic Q&A — Why Choose JavaScript & Concurrency Foundation

This file contains basic **Question & Answer** notes for JavaScript revision. It covers two main topics:

1. **Why Choose JavaScript?** — Reasons and advantages of using JavaScript
2. **Concurrency Foundation** — Core concepts of asynchronous JavaScript (since JS is single-threaded)

---

## 📘 Part 1: Why Choose JavaScript?

### Q1. What is JavaScript?

**Answer:** JavaScript is a **high-level, interpreted, dynamically-typed** programming language primarily used for creating interactive effects inside web browsers. It was created by **Brendan Eich** at **Netscape** in **1995**. Today, JavaScript is one of the core technologies of the web, alongside **HTML** and **CSS**.

- **HTML** → Structure of the page
- **CSS** → Styling of the page
- **JavaScript** → Behavior and interactivity of the page

---

### Q2. Why should we choose JavaScript? (Top Reasons)

**Answer:** JavaScript is chosen for the following reasons:

1. **Runs Everywhere** — JavaScript runs in every modern web browser without installing anything.
2. **Easy to Learn** — Simple syntax, no need for compilers or complex setup.
3. **Versatile** — Used for frontend (React, Vue), backend (Node.js), mobile (React Native), and desktop (Electron) apps.
4. **Huge Ecosystem** — npm has the largest collection of open-source packages in the world.
5. **Asynchronous by Nature** — Supports non-blocking operations via callbacks, promises, and async/await.
6. **Large Community** — Millions of developers and tons of learning resources.
7. **High Demand** — JavaScript developers are in demand across all industries.
8. **Full-Stack Development** — With Node.js, you can write both frontend and backend in JS.
9. **Rich Frameworks** — React, Angular, Vue, Express, Next.js, and many more.
10. **Constantly Evolving** — Yearly updates (ES6, ES7... ES2024) keep the language modern.

---

### Q3. What are the main features of JavaScript?

**Answer:** The main features of JavaScript are:

| Feature | Description |
|---------|-------------|
| Lightweight | Small footprint, runs fast in browsers |
| Interpreted | No compilation needed; runs directly |
| Object-Oriented | Supports objects, prototypes, and classes |
| Dynamic Typing | Variable types are decided at runtime |
| Cross-Platform | Runs on Windows, Linux, macOS, browsers |
| Async Support | Callbacks, Promises, async/await |
| First-Class Functions | Functions can be stored in variables, passed as arguments |
| Event-Driven | Responds to user actions like clicks, keypresses |
| Prototype-Based | Inheritance through prototypes |
| Case-Sensitive | `name` and `Name` are different |

---

### Q4. What is the difference between JavaScript and Java?

**Answer:**

| JavaScript | Java |
|------------|------|
| Interpreted (JIT compiled) | Compiled to bytecode, runs on JVM |
| Dynamically typed | Statically typed |
| Prototype-based OOP | Class-based OOP |
| Runs in browsers & Node.js | Runs on JVM |
| Created by Brendan Eich (1995) | Created by James Gosling (1995) |
| Used mainly for web | Used for enterprise, Android, big data |
| No need to compile | Needs `javac` to compile |

---

### Q5. What is ECMAScript?

**Answer:** **ECMAScript (ES)** is the **specification/standard** that defines how JavaScript should work. JavaScript is the **implementation** of ECMAScript.

- **ES5** (2009) — Older, widely supported standard
- **ES6 / ES2015** — Major update (let, const, arrow functions, classes, modules)
- **ES2020, ES2021...ES2024** — Yearly updates with new features

Example:
```javascript
// ES5
var name = "John";

// ES6
const name = "John";
let age = 25;
```

---

### Q6. Where is JavaScript used in the real world?

**Answer:** JavaScript is used in:

- **Frontend Web Development** — React, Vue, Angular, vanilla JS
- **Backend Development** — Node.js, Express.js, NestJS
- **Mobile Apps** — React Native, Ionic
- **Desktop Apps** — Electron (VS Code is built with it!)
- **Game Development** — Phaser, Three.js for 3D games
- **Machine Learning** — TensorFlow.js
- **Browser Extensions** — Chrome/Firefox extensions
- **Server-Side Rendering** — Next.js, Nuxt.js
- **Internet of Things (IoT)** — Johnny-Five, Node-RED

---

### Q7. What are the drawbacks of JavaScript?

**Answer:**

1. **Single-Threaded** — Cannot do true multithreading (relies on async patterns).
2. **Dynamic Typing Issues** — Type errors appear at runtime, not compile time.
3. **Security** — Client-side code can be viewed and modified by users.
4. **Browser Compatibility** — Different browsers may behave differently.
5. **Callback Hell** — Deeply nested callbacks make code hard to read (solved by Promises/async-await).
6. **Large Ecosystem Overload** — Too many libraries and frameworks can be overwhelming.
7. **Performance** — Slower than compiled languages like C or Rust for heavy computations.

---

## ⚡ Part 2: Concurrency Foundation (Asynchronous JavaScript)

> 💡 **Important Note:** Unlike Java, JavaScript is **single-threaded**. It does not have true multithreading. Instead, it handles concurrent operations using the **Event Loop**, **Callbacks**, **Promises**, and **async/await**.

### Q8. Is JavaScript single-threaded or multi-threaded?

**Answer:** JavaScript is **single-threaded**, meaning it has only **one call stack** and can execute **one command at a time**. However, it can handle asynchronous operations using the **Event Loop**, Web APIs, and a **Callback Queue**.

- **Browser APIs** (DOM, fetch, setTimeout) run in the background.
- The **Event Loop** moves completed async tasks back to the call stack.

---

### Q9. What is the Event Loop in JavaScript?

**Answer:** The Event Loop is the mechanism that allows JavaScript to perform **non-blocking asynchronous operations** despite being single-threaded. It continuously checks the **call stack** and the **callback queue**:

1. If the call stack is empty, the event loop takes the first callback from the queue.
2. It pushes that callback onto the call stack for execution.
3. This process repeats, allowing async code to run.

```
┌─────────────────────────┐
│       Call Stack         │  ← executes code
└─────────────────────────┘
            ▲
            │
┌─────────────────────────┐
│       Event Loop        │  ← checks stack & queue
└─────────────────────────┘
            ▲
            │
┌─────────────────────────┐
│    Callback / Microtask │  ← waiting callbacks
│         Queue           │
└─────────────────────────┘
            ▲
            │
┌─────────────────────────┐
│       Web APIs          │  ← setTimeout, fetch, DOM
└─────────────────────────┘
```

---

### Q10. What are callbacks in JavaScript?

**Answer:** A **callback** is a function passed as an argument to another function, which is executed later (usually after some asynchronous task completes).

```javascript
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

greet("John", function() {
    console.log("Callback executed!");
});

// Output:
// Hello John
// Callback executed!
```

---

### Q11. What is "Callback Hell"?

**Answer:** **Callback Hell** (also called the **Pyramid of Doom**) happens when callbacks are nested inside other callbacks multiple times, making the code hard to read and maintain.

```javascript
// ❌ Callback Hell example
getUser(userId, function(user) {
    getOrders(user, function(orders) {
        getOrderDetails(orders, function(details) {
            getPayment(details, function(payment) {
                console.log(payment);
            });
        });
    });
});
```

**Solution:** Use **Promises** or **async/await** to flatten the code.

---

### Q12. What is a Promise in JavaScript?

**Answer:** A **Promise** is an object representing the eventual completion (or failure) of an asynchronous operation. It has **three states**:

1. **Pending** — Operation is in progress.
2. **Fulfilled (Resolved)** — Operation completed successfully.
3. **Rejected** — Operation failed.

```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise
    .then(result => console.log(result))   // on success
    .catch(error => console.log(error));    // on failure
```

---

### Q13. What is `async/await`?

**Answer:** `async/await` is **syntactic sugar** over Promises that makes asynchronous code look and behave like synchronous code. It was introduced in **ES8 (ES2017)**.

- `async` keyword marks a function as asynchronous.
- `await` keyword pauses execution until a Promise resolves.
- Errors are handled with `try/catch`.

```javascript
async function fetchData() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

fetchData();
```

---

### Q14. What is the difference between `Promise`, `async/await`, and callbacks?

**Answer:**

| Feature | Callbacks | Promises | async/await |
|---------|-----------|----------|-------------|
| Introduced | ES5 | ES6 | ES8 |
| Readability | Poor (nested) | Better (chained) | Best (looks synchronous) |
| Error Handling | Manual | `.catch()` | `try/catch` |
| States | None | 3 (pending, fulfilled, rejected) | Based on Promises |
| Nesting | Causes callback hell | Avoids nesting | Avoids nesting |

---

### Q15. What is the difference between microtasks and macrotasks?

**Answer:** JavaScript has two types of task queues:

| Microtasks | Macrotasks |
|------------|------------|
| Higher priority | Lower priority |
| Examples: `Promise.then`, `queueMicrotask`, `MutationObserver` | Examples: `setTimeout`, `setInterval`, `setImmediate`, I/O |
| Executed before next macrotask | Executed after all microtasks complete |
| Run after the current task, before rendering | Run after rendering |

Example:
```javascript
console.log("1");

setTimeout(() => console.log("2"), 0); // macrotask

Promise.resolve().then(() => console.log("3")); // microtask

console.log("4");

// Output: 1, 4, 3, 2
```

---

### Q16. What is `setTimeout()` in JavaScript?

**Answer:** `setTimeout()` is a function that executes a callback after a specified delay (in milliseconds). It is a **macrotask**.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// Executed after 2 seconds
```

---

### Q17. What is the difference between `setTimeout()` and `setInterval()`?

**Answer:**

| `setTimeout()` | `setInterval()` |
|----------------|------------------|
| Runs once after a delay | Runs repeatedly at fixed intervals |
| Returns a timeout ID | Returns an interval ID |
| Cleared with `clearTimeout()` | Cleared with `clearInterval()` |

```javascript
// setTimeout — runs once
setTimeout(() => console.log("Once"), 1000);

// setInterval — runs repeatedly
const id = setInterval(() => console.log("Every 1s"), 1000);

// Stop after 5 seconds
setTimeout(() => clearInterval(id), 5000);
```

---

### Q18. Can we achieve multithreading in JavaScript?

**Answer:** JavaScript itself is **single-threaded**, but there are ways to achieve parallel execution:

1. **Web Workers** — Run scripts in background threads (browser).
   ```javascript
   const worker = new Worker("worker.js");
   worker.postMessage("Start work");
   worker.onmessage = (e) => console.log(e.data);
   ```

2. **Worker Threads** — Similar to Web Workers, but for Node.js.
   ```javascript
   const { Worker } = require("worker_threads");
   const worker = new Worker("./worker.js");
   ```

3. **SharedArrayBuffer** — Allows sharing memory between threads.

> ⚠️ Web Workers cannot access the DOM directly.

---

### Q19. What is the difference between synchronous and asynchronous code?

**Answer:**

| Synchronous | Asynchronous |
|-------------|--------------|
| Executes line by line | Does not wait; continues execution |
| Blocks the next line | Non-blocking |
| Easy to understand | Uses callbacks/promises/async-await |
| Example: `console.log()` | Example: `fetch()`, `setTimeout()` |

```javascript
// Synchronous
console.log("1");
console.log("2"); // waits for line 1

// Asynchronous
console.log("1");
setTimeout(() => console.log("2"), 0); // does not block next line
console.log("3");
// Output: 1, 3, 2
```

---

### Q20. What is the call stack in JavaScript?

**Answer:** The **call stack** is a data structure that keeps track of function calls in JavaScript. It follows the **LIFO (Last In, First Out)** principle.

- When a function is called, it is **pushed** onto the stack.
- When a function finishes, it is **popped** off the stack.

```javascript
function a() {
    b();
    console.log("a");
}
function b() {
    console.log("b");
}
a();

// Call Stack:
// 1. push a()
// 2. push b()
// 3. pop b() (prints "b")
// 4. pop a() (prints "a")
```

> ❌ A stack overflow happens when the call stack exceeds its limit (often due to infinite recursion).

---

## 📌 Summary

| Topic | Key Points |
|-------|------------|
| **Why JavaScript** | Runs everywhere, versatile, huge ecosystem, full-stack capable |
| **JavaScript vs Java** | Interpreted vs compiled, dynamic vs static typing |
| **ECMAScript** | Specification that JavaScript implements |
| **Single-Threaded** | JS has one call stack; uses Event Loop for async |
| **Event Loop** | Moves async callbacks back to the call stack |
| **Callbacks** | Functions passed to run later; can cause callback hell |
| **Promises** | 3 states — pending, fulfilled, rejected |
| **async/await** | Clean syntax for handling Promises |
| **Micro vs Macrotasks** | Microtasks (Promises) run before macrotasks (setTimeout) |
| **Web Workers** | Enable true parallel threads in JS (no DOM access) |

---

### ⭐ Happy Learning! Keep Revising JavaScript! 💻✨
