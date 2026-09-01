/**
 * JavaScript Programming Methods - Main Index
 * 
 * This file provides an overview and quick access to all the JavaScript
 * programming methods implemented in this repository.
 * 
 * Run this file to see a summary of all available methods and examples.
 */

console.log("🚀 JavaScript Programming Methods Repository");
console.log("=" .repeat(50));
console.log();

// Method categories and their descriptions
const methodCategories = {
    "Array Methods": {
        path: "./array-methods/",
        description: "Methods for manipulating and working with arrays",
        files: [
            "filter.js - Filter elements by condition (374 lines)",
            "map.js - Transform array elements (255 lines)",
            "reduce.js - Reduce to single value (425 lines)",
            "forEach.js - Iterate over elements (330+ lines)",
            "find.js - Find elements (find, findIndex, findLast) (380+ lines)",
            "some-every.js - Test conditions (some, every) (400+ lines)",
            "sort.js - Sort array elements (450+ lines)",
            "includes-indexOf.js - Search methods (430+ lines)",
            "flat-flatMap.js - Flatten nested arrays (380+ lines)",
            "slice-splice.js - Extract and modify arrays (450+ lines)"
        ],
        methods: [
            "map() - Transform array elements",
            "filter() - Filter array elements based on condition",
            "reduce() - Reduce array to single value",
            "forEach() - Iterate over array elements",
            "find() / findIndex() - Find first matching element",
            "findLast() / findLastIndex() - Find last matching (ES2023)",
            "some() - Test if any element passes condition",
            "every() - Test if all elements pass condition",
            "sort() - Sort array elements in place",
            "slice() - Extract portion without mutation",
            "splice() - Add/remove elements (mutates array)",
            "includes() - Check if array contains value",
            "indexOf() / lastIndexOf() - Find index of value",
            "flat() - Flatten nested arrays (ES2019)",
            "flatMap() - Map and flatten (ES2019)"
        ]
    },
    
    "String Methods": {
        path: "./string-methods/",
        description: "Methods for manipulating and processing strings",
        methods: [
            "charAt() - Get character at specific index",
            "substring() - Extract substring",
            "indexOf() - Find index of substring",
            "replace() - Replace substring or pattern",
            "split() - Split string into array",
            "trim() - Remove whitespace from ends",
            "toLowerCase() - Convert to lowercase",
            "toUpperCase() - Convert to uppercase",
            "includes() - Check if string contains substring",
            "startsWith() - Check if string starts with substring"
        ]
    },
    
    "Object Methods": {
        path: "./object-methods/",
        description: "Methods for creating and manipulating objects",
        methods: [
            "Object.keys() - Get object property names",
            "Object.values() - Get object property values",
            "Object.entries() - Get key-value pairs",
            "Object.assign() - Copy properties between objects",
            "Object.create() - Create object with prototype",
            "Object.freeze() - Make object immutable",
            "Object.seal() - Prevent property addition/deletion",
            "hasOwnProperty() - Check if property exists",
            "Object.defineProperty() - Define property with descriptor",
            "Object.getPrototypeOf() - Get object prototype"
        ]
    },
    
    "Function Methods": {
        path: "./function-methods/",
        description: "Function utilities and advanced concepts",
        methods: [
            "call() - Call function with specific context",
            "apply() - Call function with arguments array",
            "bind() - Create bound function",
            "Closures - Functions with preserved scope",
            "Currying - Transform functions for partial application",
            "Memoization - Cache function results",
            "Debouncing - Delay function execution",
            "Throttling - Limit function call frequency",
            "Function composition - Combine functions",
            "Higher-order functions - Functions that operate on functions"
        ]
    },
    
    "Promise Methods": {
        path: "./promise-methods/",
        description: "Asynchronous programming with Promises",
        methods: [
            "Promise.resolve() - Create resolved promise",
            "Promise.reject() - Create rejected promise",
            "Promise.all() - Wait for all promises",
            "Promise.allSettled() - Wait for all to settle",
            "Promise.race() - Wait for first to settle",
            "Promise.any() - Wait for first successful",
            "async/await - Modern async syntax",
            "Error handling - try/catch with promises",
            "Promise chaining - Sequential async operations",
            "Parallel execution - Concurrent async operations"
        ]
    },
    
    "Utility Methods": {
        path: "./utility-methods.js",
        description: "General utility functions and helpers",
        methods: [
            "Type checking - Robust type validation",
            "Deep cloning - Create deep copies of objects",
            "Array utilities - Advanced array operations",
            "String utilities - String manipulation helpers",
            "Number utilities - Math and formatting functions",
            "Date utilities - Date manipulation and formatting",
            "Validation utilities - Input validation functions",
            "Performance utilities - Benchmarking and optimization",
            "Deep comparison - Compare complex objects",
            "Data transformation - Convert between formats"
        ]
    },
    
    "Non-Mutating Array Copy Methods": {
        path: "./array-copy-methods.js",
        description: "ES2023 Non-mutating array operations and relative indexing",
        methods: [
            "toSorted() - Non-mutating array sort (ES2023)",
            "toReversed() - Non-mutating array reverse (ES2023)",
            "toSpliced() - Non-mutating array splice (ES2023)",
            "with() - Non-mutating element replacement (ES2023)",
            "at() - Relative indexing supporting negative numbers (ES2022)",
            "fill() - Fill array elements with static value",
            "copyWithin() - Copy array elements within the array",
            "keys() / values() / entries() - Array iterators"
        ]
    },
    
    "Map & Set Collections": {
        path: "./map-set-methods.js",
        description: "Keyed collections and ES2024 Set logical operations",
        methods: [
            "Map - set(), get(), has(), delete(), clear(), size, keys(), values(), entries()",
            "Set - add(), has(), delete(), clear(), size, values(), entries()",
            "Set.union() - Set union (ES2024)",
            "Set.intersection() - Set intersection (ES2024)",
            "Set.difference() - Set difference (ES2024)",
            "Set.symmetricDifference() - Set symmetric difference (ES2024)",
            "Set.isSubsetOf() / isSupersetOf() / isDisjointFrom() - Set predicate tests (ES2024)",
            "WeakMap & WeakSet - Weak reference collections for memory safety"
        ]
    },
    
    "Reflect & Proxy Metaprogramming": {
        path: "./reflect-proxy-methods.js",
        description: "Metaprogramming, reflection, and property interception traps",
        methods: [
            "Reflect.get() / Reflect.set() / Reflect.has() / Reflect.deleteProperty()",
            "Reflect.apply() / Reflect.construct() / Reflect.ownKeys()",
            "Proxy traps - get, set, has, deleteProperty, apply, construct",
            "Validation & Schema enforcement patterns",
            "Reactive state management patterns (Vue 3 / MobX style)",
            "Readonly / Immutable object wrappers"
        ]
    },
    
    "Math Built-in Methods": {
        path: "./math-methods.js",
        description: "Static mathematical calculations, powers, roots, and rounding",
        methods: [
            "Math.floor() / Math.ceil() / Math.round() / Math.trunc() - Rounding",
            "Math.min() / Math.max() / clamp() - Boundary calculations",
            "Math.pow() / Math.sqrt() / Math.cbrt() / Math.hypot() - Powers & Roots",
            "Math.abs() / Math.sign() / Math.random() - Sign & Randomness",
            "Math.imul() / Math.clz32() - Fast 32-bit integer math",
            "Math.log() / Math.log10() / Math.log2() / Math.exp() - Logarithms"
        ]
    },
    
    "Date Built-in Methods": {
        path: "./date-methods.js",
        description: "Date object constructors, getters, setters, formatting, and arithmetic",
        methods: [
            "Date.now() / Date.parse() / Date.UTC() - Static timestamp creators",
            "getFullYear() / getMonth() / getDate() / getDay() / getTime() - Date Getters",
            "setFullYear() / setMonth() / setDate() - Date Setters",
            "toISOString() / toUTCString() / toLocaleDateString() - Formatting",
            "Date arithmetic - Adding days, calculating difference in days",
            "Relative time formatting - 'x hours ago' generator"
        ]
    },
    
    "Number & BigInt Methods": {
        path: "./number-bigint-methods.js",
        description: "Number static/instance methods and arbitrary-precision BigInt arithmetic",
        methods: [
            "Number.isInteger() / Number.isFinite() / Number.isNaN() / Number.isSafeInteger()",
            "Number.parseInt() / Number.parseFloat() - Strict parsing",
            "toFixed() / toPrecision() / toExponential() / toString(radix)",
            "BigInt() - Arbitrary precision integer arithmetic",
            "BigInt.asIntN() / BigInt.asUintN() - 64-bit integer wrapping"
        ]
    }
};

// Display overview of all categories
console.log("📁 Method Categories Overview:");
console.log();

Object.entries(methodCategories).forEach(([category, info]) => {
    console.log(`🔹 ${category}`);
    console.log(`   ${info.description}`);
    console.log(`   Path: ${info.path}`);
    console.log(`   Methods: ${info.methods.length} available`);
    console.log();
});

// Quick examples section
console.log("⚡ Quick Examples:");
console.log();

// Array example
console.log("🔸 Array Methods Example:");
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(x => x * 2);
const evens = numbers.filter(x => x % 2 === 0);
const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(`   Input: [${numbers.join(', ')}]`);
console.log(`   Doubled: [${doubled.join(', ')}] (using map)`);
console.log(`   Evens: [${evens.join(', ')}] (using filter)`);
console.log(`   Sum: ${sum} (using reduce)`);
console.log();

// String example
console.log("🔸 String Methods Example:");
const text = "  Hello, JavaScript World!  ";
console.log(`   Original: "${text}"`);
console.log(`   Trimmed: "${text.trim()}"`);
console.log(`   Uppercase: "${text.trim().toUpperCase()}"`);
console.log(`   Words: [${text.trim().split(' ').join(', ')}]`);
console.log(`   Contains 'JavaScript': ${text.includes('JavaScript')}`);
console.log();

// Object example
console.log("🔸 Object Methods Example:");
const person = { name: "John", age: 30, city: "New York" };
console.log(`   Object:`, person);
console.log(`   Keys: [${Object.keys(person).join(', ')}]`);
console.log(`   Values: [${Object.values(person).join(', ')}]`);
console.log(`   Entries:`, Object.entries(person));
console.log();

// Promise example
console.log("🔸 Promise Methods Example:");
console.log("   Creating multiple promises...");

const promise1 = Promise.resolve("First");
const promise2 = Promise.resolve("Second");
const promise3 = Promise.resolve("Third");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(`   Promise.all result: [${results.join(', ')}]`);
    });

console.log();

// Function example
console.log("🔸 Function Methods Example:");

// Currying example
const add = a => b => c => a + b + c;
const add5 = add(5);
const add5And10 = add5(10);

console.log(`   Curried function: add(5)(10)(3) = ${add(5)(10)(3)}`);
console.log(`   Partial application: add5And10(3) = ${add5And10(3)}`);

// Memoization example
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

const expensiveFunction = (n) => {
    console.log(`   Computing for ${n}...`);
    return n * n;
};

const memoizedFunction = memoize(expensiveFunction);
console.log(`   First call: ${memoizedFunction(5)}`);
console.log(`   Second call: ${memoizedFunction(5)} (cached)`);
console.log();

// Utility example
console.log("🔸 Utility Methods Example:");

// Type checking
const values = [42, "hello", [], {}, null, undefined];
values.forEach(value => {
    const type = value === null ? 'null' : 
                 Array.isArray(value) ? 'array' : 
                 typeof value;
    console.log(`   ${JSON.stringify(value)} is type: ${type}`);
});

console.log();

// Usage instructions
console.log("📖 How to Use This Repository:");
console.log();
console.log("1. 🔍 Browse Categories:");
console.log("   Navigate to any method category folder to explore specific methods");
console.log();
console.log("2. 🏃‍♂️ Run Individual Files:");
console.log("   node array-methods/map.js");
console.log("   node string-methods/string-methods.js");
console.log("   node object-methods/object-methods.js");
console.log("   node function-methods/function-methods.js");
console.log("   node promise-methods/promise-methods.js");
console.log("   node utility-methods/utility-methods.js");
console.log();
console.log("3. 📚 Learn from Examples:");
console.log("   Each file contains comprehensive examples with:");
console.log("   ✅ Clear explanations");
console.log("   ✅ Practical use cases");
console.log("   ✅ Performance considerations");
console.log("   ✅ Best practices");
console.log("   ✅ Common pitfalls to avoid");
console.log();
console.log("4. 🛠️ Apply in Your Projects:");
console.log("   Copy and adapt the utility functions for your own projects");
console.log("   All functions are well-documented and tested");
console.log();

console.log("🎯 Key Benefits:");
console.log("• Comprehensive coverage of JavaScript methods");
console.log("• Real-world examples and use cases");
console.log("• Performance optimization tips");
console.log("• Modern JavaScript (ES6+) features");
console.log("• Best practices and patterns");
console.log("• Error handling techniques");
console.log();

console.log("🤝 Contributing:");
console.log("Feel free to contribute by:");
console.log("• Adding new methods or examples");
console.log("• Improving existing documentation");
console.log("• Reporting bugs or issues");
console.log("• Suggesting enhancements");
console.log();

console.log("📝 License: MIT");
console.log("🌟 Happy coding with JavaScript!");
console.log("=" .repeat(50));