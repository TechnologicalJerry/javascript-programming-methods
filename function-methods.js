/**
 * Function Methods and Concepts
 * 
 * Description:
 * This file demonstrates various function-related methods and advanced concepts
 * in JavaScript including call, apply, bind, closures, higher-order functions,
 * currying, memoization, and more.
 */

// ========================================
// FUNCTION CONTEXT METHODS (call, apply, bind)
// ========================================

console.log("=== Function Context Methods ===\n");

// Example 1: Function.prototype.call()
console.log("Example 1: call() method");

const person = {
    name: "John",
    age: 30,
    greet(greeting, punctuation) {
        return `${greeting}, I'm ${this.name} and I'm ${this.age} years old${punctuation}`;
    }
};

const anotherPerson = {
    name: "Jane",
    age: 25
};

// Call method with different context
console.log("Original person:", person.greet("Hello", "!"));
console.log("Call with different context:", person.greet.call(anotherPerson, "Hi", "."));
console.log();

// Example 2: Function.prototype.apply()
console.log("Example 2: apply() method");

const numbers = [5, 15, 3, 42, 8, 1];

// Using apply to pass array as arguments
const maxNumber = Math.max.apply(null, numbers);
const minNumber = Math.min.apply(null, numbers);

console.log("Numbers:", numbers);
console.log("Max using apply:", maxNumber);
console.log("Min using apply:", minNumber);

// Modern equivalent with spread operator
console.log("Max using spread:", Math.max(...numbers));
console.log();

// Example 3: Function.prototype.bind()
console.log("Example 3: bind() method");

const calculator = {
    multiplier: 2,
    multiply(a, b) {
        return (a * b) * this.multiplier;
    }
};

// Create bound function
const doubleMultiply = calculator.multiply.bind(calculator);
const tripleCalculator = { multiplier: 3 };
const tripleMultiply = calculator.multiply.bind(tripleCalculator);

console.log("Original multiply:", calculator.multiply(5, 10));
console.log("Bound double multiply:", doubleMultiply(5, 10));
console.log("Bound triple multiply:", tripleMultiply(5, 10));

// Partial application with bind
const multiplyBy2 = calculator.multiply.bind(calculator, 2);
console.log("Partial application (multiply by 2):", multiplyBy2(15));
console.log();

// ========================================
// HIGHER-ORDER FUNCTIONS
// ========================================

console.log("=== Higher-Order Functions ===\n");

// Example 4: Functions that take other functions as arguments
console.log("Example 4: Functions as arguments");

function processArray(arr, processor) {
    return arr.map(processor);
}

const numbers2 = [1, 2, 3, 4, 5];

const doubled = processArray(numbers2, x => x * 2);
const squared = processArray(numbers2, x => x * x);
const negated = processArray(numbers2, x => -x);

console.log("Original:", numbers2);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
console.log("Negated:", negated);
console.log();

// Example 5: Functions that return other functions
console.log("Example 5: Functions returning functions");

function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const multiplyBy3 = createMultiplier(3);
const multiplyBy10 = createMultiplier(10);

console.log("3 * 7 =", multiplyBy3(7));
console.log("10 * 7 =", multiplyBy10(7));

// Function factory for validators
function createValidator(type) {
    const validators = {
        email: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        phone: value => /^\(\d{3}\) \d{3}-\d{4}$/.test(value),
        number: value => !isNaN(value) && isFinite(value)
    };
    
    return validators[type] || (() => false);
}

const emailValidator = createValidator('email');
const phoneValidator = createValidator('phone');

console.log("Email validation 'test@example.com':", emailValidator('test@example.com'));
console.log("Phone validation '(123) 456-7890':", phoneValidator('(123) 456-7890'));
console.log();

// ========================================
// CLOSURES
// ========================================

console.log("=== Closures ===\n");

// Example 6: Basic closure
console.log("Example 6: Basic closure");

function outerFunction(x) {
    // This variable is in the outer function's scope
    const outerVar = x;
    
    return function innerFunction(y) {
        // Inner function has access to outer function's variables
        return outerVar + y;
    };
}

const addFive = outerFunction(5);
console.log("addFive(10):", addFive(10)); // 15
console.log();

// Example 7: Closure for data privacy
console.log("Example 7: Data privacy with closures");

function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        getValue() {
            return count;
        },
        reset() {
            count = initialValue;
            return count;
        }
    };
}

const counter = createCounter(10);
console.log("Initial value:", counter.getValue());
console.log("After increment:", counter.increment());
console.log("After increment:", counter.increment());
console.log("After decrement:", counter.decrement());
console.log("After reset:", counter.reset());
console.log();

// Example 8: Closure in loops (common gotcha)
console.log("Example 8: Closure in loops");

// Wrong way (common mistake)
console.log("Wrong way - all functions log 3:");
const functionsWrong = [];
for (var i = 0; i < 3; i++) {
    functionsWrong.push(function() {
        console.log("  Value:", i); // All will log 3
    });
}
functionsWrong.forEach(fn => fn());

// Correct way using closure
console.log("Correct way using closure:");
const functionsCorrect = [];
for (let i = 0; i < 3; i++) {
    functionsCorrect.push((function(index) {
        return function() {
            console.log("  Value:", index);
        };
    })(i));
}
functionsCorrect.forEach(fn => fn());

// Modern way using let
console.log("Modern way using let:");
const functionsModern = [];
for (let i = 0; i < 3; i++) {
    functionsModern.push(function() {
        console.log("  Value:", i);
    });
}
functionsModern.forEach(fn => fn());
console.log();

// ========================================
// CURRYING
// ========================================

console.log("=== Currying ===\n");

// Example 9: Basic currying
console.log("Example 9: Basic currying");

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Arrow function version
const addArrow = a => b => c => a + b + c;

console.log("add(1)(2)(3):", add(1)(2)(3));
console.log("addArrow(1)(2)(3):", addArrow(1)(2)(3));

// Partial application
const add5 = add(5);
const add5And10 = add5(10);
console.log("Partial application add5And10(7):", add5And10(7));
console.log();

// Example 10: Generic curry function
console.log("Example 10: Generic curry function");

function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log("curriedMultiply(2)(3)(4):", curriedMultiply(2)(3)(4));
console.log("curriedMultiply(2, 3)(4):", curriedMultiply(2, 3)(4));
console.log("curriedMultiply(2)(3, 4):", curriedMultiply(2)(3, 4));
console.log();

// ========================================
// MEMOIZATION
// ========================================

console.log("=== Memoization ===\n");

// Example 11: Basic memoization
console.log("Example 11: Basic memoization");

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) {
            console.log(`  Cache hit for ${key}`);
            return cache[key];
        }
        
        console.log(`  Computing for ${key}`);
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Expensive Fibonacci function
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoizedFibonacci = memoize(fibonacci);

console.log("fibonacci(10):", memoizedFibonacci(10));
console.log("fibonacci(10) again:", memoizedFibonacci(10)); // Cache hit
console.log();

// Example 12: Advanced memoization with TTL
console.log("Example 12: Memoization with TTL");

function memoizeWithTTL(fn, ttl = 5000) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        const now = Date.now();
        
        if (cache[key] && (now - cache[key].timestamp) < ttl) {
            console.log(`  Cache hit for ${key}`);
            return cache[key].value;
        }
        
        console.log(`  Computing for ${key}`);
        const result = fn.apply(this, args);
        cache[key] = { value: result, timestamp: now };
        return result;
    };
}

function expensiveOperation(x) {
    // Simulate expensive operation
    return x * Math.random();
}

const memoizedExpensive = memoizeWithTTL(expensiveOperation, 2000);

console.log("First call:", memoizedExpensive(5));
console.log("Second call (cached):", memoizedExpensive(5));
console.log();

// ========================================
// DEBOUNCING AND THROTTLING
// ========================================

console.log("=== Debouncing and Throttling ===\n");

// Example 13: Debouncing
console.log("Example 13: Debouncing");

function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

function searchAPI(query) {
    console.log(`  Searching for: ${query}`);
}

const debouncedSearch = debounce(searchAPI, 300);

// Simulate rapid input
console.log("Simulating rapid input:");
debouncedSearch("a");
debouncedSearch("ap");
debouncedSearch("app");
// Only the last call will execute after 300ms

setTimeout(() => {
    console.log("After debounce delay...");
}, 350);
console.log();

// Example 14: Throttling
console.log("Example 14: Throttling");

function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

function onScroll() {
    console.log("  Scroll event fired");
}

const throttledScroll = throttle(onScroll, 100);

// Simulate rapid scroll events
console.log("Simulating rapid scroll events:");
for (let i = 0; i < 5; i++) {
    setTimeout(() => throttledScroll(), i * 20);
}
console.log();

// ========================================
// FUNCTION COMPOSITION
// ========================================

console.log("=== Function Composition ===\n");

// Example 15: Basic composition
console.log("Example 15: Basic composition");

function compose(...functions) {
    return function(input) {
        return functions.reduceRight((acc, fn) => fn(acc), input);
    };
}

function pipe(...functions) {
    return function(input) {
        return functions.reduce((acc, fn) => fn(acc), input);
    };
}

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const square = x => x * x;

const composedFunction = compose(square, multiplyByTwo, addOne);
const pipedFunction = pipe(addOne, multiplyByTwo, square);

console.log("Input: 3");
console.log("Composed (square(multiplyByTwo(addOne(3)))):", composedFunction(3));
console.log("Piped (square(multiplyByTwo(addOne(3)))):", pipedFunction(3));
console.log();

// Example 16: Practical composition example
console.log("Example 16: Practical composition");

const users = [
    { name: "John", age: 25, active: true },
    { name: "Jane", age: 30, active: false },
    { name: "Bob", age: 35, active: true },
    { name: "Alice", age: 28, active: true }
];

const getActiveUsers = users => users.filter(user => user.active);
const getUserNames = users => users.map(user => user.name);
const sortAlphabetically = names => names.sort();

const getActiveUserNamesSorted = pipe(
    getActiveUsers,
    getUserNames,
    sortAlphabetically
);

console.log("Active user names (sorted):", getActiveUserNamesSorted(users));
console.log();

// ========================================
// FUNCTION DECORATORS
// ========================================

console.log("=== Function Decorators ===\n");

// Example 17: Timing decorator
console.log("Example 17: Timing decorator");

function timeFunction(fn) {
    return function(...args) {
        const start = performance.now();
        const result = fn.apply(this, args);
        const end = performance.now();
        console.log(`  Function ${fn.name} took ${(end - start).toFixed(2)}ms`);
        return result;
    };
}

function slowFunction(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}

const timedSlowFunction = timeFunction(slowFunction);
console.log("Result:", timedSlowFunction(1000000));
console.log();

// Example 18: Validation decorator
console.log("Example 18: Validation decorator");

function validateArgs(validationFn) {
    return function(targetFn) {
        return function(...args) {
            if (!validationFn(...args)) {
                throw new Error('Invalid arguments');
            }
            return targetFn.apply(this, args);
        };
    };
}

const isPositiveNumber = (x) => typeof x === 'number' && x > 0;

function divide(a, b) {
    return a / b;
}

const safeDivide = validateArgs((a, b) => 
    isPositiveNumber(a) && isPositiveNumber(b)
)(divide);

try {
    console.log("safeDivide(10, 2):", safeDivide(10, 2));
    console.log("safeDivide(-5, 2):", safeDivide(-5, 2)); // This will throw
} catch (error) {
    console.log("Error:", error.message);
}
console.log();

// ========================================
// ASYNC FUNCTION UTILITIES
// ========================================

console.log("=== Async Function Utilities ===\n");

// Example 19: Promisify utility
console.log("Example 19: Promisify utility");

function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });
    };
}

// Simulate old callback-style function
function oldStyleAsync(value, callback) {
    setTimeout(() => {
        if (value > 0) {
            callback(null, value * 2);
        } else {
            callback(new Error('Value must be positive'));
        }
    }, 100);
}

const promisifiedAsync = promisify(oldStyleAsync);

promisifiedAsync(5)
    .then(result => console.log("Promisified result:", result))
    .catch(error => console.log("Error:", error.message));

// Example 20: Async retry utility
console.log("Example 20: Async retry utility");

function retry(fn, maxAttempts = 3, delay = 1000) {
    return async function(...args) {
        let lastError;
        
        for (let attempt = 1; attempt <= maxAttempts; attempt++) {
            try {
                return await fn.apply(this, args);
            } catch (error) {
                lastError = error;
                console.log(`  Attempt ${attempt} failed:`, error.message);
                
                if (attempt < maxAttempts) {
                    await new Promise(resolve => setTimeout(resolve, delay));
                }
            }
        }
        
        throw lastError;
    };
}

async function unreliableFunction() {
    if (Math.random() < 0.7) {
        throw new Error('Random failure');
    }
    return 'Success!';
}

const reliableFunction = retry(unreliableFunction, 3, 500);

// This will retry up to 3 times
reliableFunction()
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("Failed after all retries:", error.message));

console.log();

// ========================================
// PRACTICAL FUNCTION UTILITIES
// ========================================

console.log("=== Practical Function Utilities ===\n");

// Example 21: Once function
console.log("Example 21: Once function");

function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}

const expensiveInitialization = once(() => {
    console.log("  Expensive initialization performed");
    return { initialized: true, timestamp: Date.now() };
});

console.log("First call:", expensiveInitialization());
console.log("Second call:", expensiveInitialization()); // Won't log message
console.log();

// Example 22: Function pipeline for data processing
console.log("Example 22: Data processing pipeline");

const data = [
    { name: "Apple", price: 1.20, category: "fruit" },
    { name: "Banana", price: 0.80, category: "fruit" },
    { name: "Carrot", price: 0.50, category: "vegetable" },
    { name: "Broccoli", price: 2.00, category: "vegetable" }
];

const pipeline = (...functions) => (input) => 
    functions.reduce((acc, fn) => fn(acc), input);

const filterFruits = items => items.filter(item => item.category === 'fruit');
const addTax = items => items.map(item => ({ ...item, priceWithTax: (item.price * 1.1).toFixed(2) }));
const sortByPrice = items => items.sort((a, b) => a.price - b.price);

const processFruits = pipeline(
    filterFruits,
    addTax,
    sortByPrice
);

console.log("Original data:", data);
console.log("Processed fruits:", processFruits(data));

console.log("\n=== Best Practices ===");
console.log("1. Use bind() for setting context, call()/apply() for immediate invocation");
console.log("2. Leverage closures for data privacy and function factories");
console.log("3. Use currying for reusable, composable functions");
console.log("4. Implement memoization for expensive, pure functions");
console.log("5. Use debouncing for user input, throttling for scroll/resize events");
console.log("6. Compose small, single-purpose functions");
console.log("7. Use decorators for cross-cutting concerns");
console.log("8. Promisify callback-based functions for async/await compatibility");