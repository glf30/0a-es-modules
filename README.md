#  Node.js Module Systems: CommonJS vs. ES Modules

##  Objective

Understand the difference between **CommonJS (CJS)** and **ECMAScript Modules (ESM)** in Node.js. Learn how to create and use modules with both systems, and identify when to use each.

---

##  What You'll Learn

- What modules are in Node.js
- How to export and import using CommonJS (`require` / `module.exports`)
- How to export and import using ES Modules (`import` / `export`)
- The key differences between the two systems
- Compatibility issues and how to configure ESM in Node.js

---

# Understanding ES Modules (ECMAScript Modules)

---

## Introductory Concept

Imagine your codebase as a big toolbox. Rather than throwing all your tools (functions, variables, components) into one messy box, wouldn’t it be better to organize them into labeled drawers? That’s what **ES Modules** do in JavaScript.

**ES Modules** allow us to split code into **smaller, reusable pieces** that can be imported and exported across files. This makes code more readable, maintainable, and collaborative.

> **Analogy:** Think of a restaurant. Instead of one chef doing everything, there’s a **sushi chef**, a **pastry chef**, and a **sous-chef**—each working in their own station (file/module) but contributing to the whole meal (application).

---

## Historical Context: How We Got Here

Before ES Modules, developers used workarounds like:

- `<script>` tags in HTML (manually loading dependencies in order)
- IIFEs (Immediately Invoked Function Expressions)
- Module loaders like **RequireJS**
- Later, **CommonJS** (used by Node.js) introduced `require()`/`module.exports`

Then came **ES6 (2015)**, which introduced **ES Modules**—the official, standard way to handle modular JavaScript in both browsers and Node.js.

---

## Before vs. After

### **Before (CommonJS in Node.js)**

```js
// utils.js
function greet(name) {
  return `Hello, ${name}`;
}
module.exports = greet;

// app.js
const greet = require("./utils");
console.log(greet("Ada"));
```


### **After (ES Module syntax)**

```js
// utils.mjs or utils.js (with "type": "module" in package.json)
export function greet(name) {
  return `Hello, ${name}`;
}

// app.mjs or app.js
import { greet } from "./utils.js";
console.log(greet("Ada"));
```

> With ES Modules, we can **import/export named pieces of functionality** in a clear, declarative way.

---

## Modern Application

ES Modules are used in all modern JavaScript frameworks and libraries, including:

- **React**, **Vue**, **Svelte**, **Next.js**, **Vite**
- Modern **Node.js** apps (with `"type": "module"` or `.mjs` extensions)
- **Browsers** (via `<script type="module">`)

They support **tree-shaking**, which means unused code can be removed during bundling—making apps faster and lighter.

---

##  Project Structure

```js

es-modules-assignment/
│
├── commonjs/
│ ├── math.js
│ └── index.js
│
├── esm/
│ ├── math.mjs
│ └── index.mjs
│
└── README.md

```

---

## Part 1: CommonJS (CJS)

CommonJS is the **default module system** in Node.js (prior to ES Modules support).

### `math.js`

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export the functions
module.exports = {
  add,
  subtract,
};
```

### `index.js`

```js
const math = require("./math");

console.log("CommonJS:");
console.log("5 + 3 =", math.add(5, 3));
console.log("5 - 3 =", math.subtract(5, 3));
```

### Try it out:

```bash
cd commonjs
node index.js
```

---

## Part 2: ECMAScript Modules (ESM)

ES Modules use `import`/`export` syntax and are supported in Node.js via `.mjs` files or `"type": "module"` in `package.json`.

### `math.mjs`

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

### `index.mjs`

```js
import { add, subtract } from "./math.mjs";

console.log("ES Modules:");
console.log("10 + 7 =", add(10, 7));
console.log("10 - 7 =", subtract(10, 7));
```

### Try it out:

```bash
cd esm
node index.mjs
```

>  Make sure you're using Node.js 14+ for ES Module support

---

## Key Differences

| Feature                  | CommonJS (`require`) | ES Modules (`import`)                     |
| ------------------------ | -------------------- | ----------------------------------------- |
| File Extension           | `.js`                | `.mjs` or `.js` (with `"type": "module"`) |
| Synchronous loading      | ✅ Yes               | ❌ No (asynchronous)                      |
| Can be used in browsers? | ❌ No                | ✅ Yes (modern browsers only)             |
| Default in Node.js?      | ✅ Yes               | 🚫 No (must configure)                    |

---

## Exercise

1. Create a new function `multiply(a, b)` in both `math.js` and `math.mjs`.
2. Add a call to that function in each `index` file.

---

## Challenge

Create a new folder called `calculator` and implement a small calculator app using ES Modules. It should:

- Ask the user for input using `readline`
- Let the user pick an operation: add, subtract, multiply, divide
- Output the result
- Organize each operation in its own file and use `import` to load them

---
