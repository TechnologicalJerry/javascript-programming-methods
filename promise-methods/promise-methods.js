/**
 * Promise Methods and Async Programming
 * 
 * Description:
 * This file demonstrates Promise methods, async/await, and various patterns
 * for handling asynchronous operations in JavaScript.
 */

// ========================================
// BASIC PROMISE CREATION AND METHODS
// ========================================

console.log("=== Basic Promise Methods ===\n");

// Example 1: Promise.resolve() and Promise.reject()
console.log("Example 1: Promise.resolve() and Promise.reject()");

const resolvedPromise = Promise.resolve("Success!");
const rejectedPromise = Promise.reject(new Error("Failure!"));

resolvedPromise
    .then(value => console.log("Resolved:", value))
    .catch(error => console.log("Error:", error.message));

rejectedPromise
    .then(value => console.log("Resolved:", value))
    .catch(error => console.log("Rejected:", error.message));

// Creating promises from non-promise values
const numberPromise = Promise.resolve(42);
const arrayPromise = Promise.resolve([1, 2, 3]);

Promise.all([numberPromise, arrayPromise])
    .then(([number, array]) => {
        console.log("Number:", number);
        console.log("Array:", array);
    });

console.log();

// Example 2: Basic Promise constructor
console.log("Example 2: Promise constructor");

function delay(ms) {
    return new Promise(resolve => {
        setTimeout(() => resolve(`Waited ${ms}ms`), ms);
    });
}

function randomSuccess(probability = 0.5) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < probability) {
                resolve("Operation succeeded!");
            } else {
                reject(new Error("Operation failed!"));
            }
        }, 1000);
    });
}

delay(500)
    .then(message => {
        console.log(message);
        return "Next step";
    })
    .then(nextMessage => console.log(nextMessage));

randomSuccess(0.8)
    .then(result => console.log("Random success:", result))
    .catch(error => console.log("Random failure:", error.message));

console.log();

// ========================================
// PROMISE STATIC METHODS
// ========================================

console.log("=== Promise Static Methods ===\n");

// Example 3: Promise.all() - Wait for all promises
console.log("Example 3: Promise.all()");

const promise1 = delay(1000).then(() => "First");
const promise2 = delay(800).then(() => "Second");
const promise3 = delay(1200).then(() => "Third");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("Promise.all results:", results);
        console.log("All promises completed");
    })
    .catch(error => {
        console.log("Promise.all error:", error.message);
    });

// Example with one rejection
const promiseWithError = Promise.reject(new Error("Something went wrong"));

Promise.all([delay(500), promiseWithError, delay(1000)])
    .then(results => console.log("This won't execute"))
    .catch(error => console.log("Promise.all failed fast:", error.message));

console.log();

// Example 4: Promise.allSettled() - Wait for all to settle (ES2020)
console.log("Example 4: Promise.allSettled()");

const mixedPromises = [
    Promise.resolve("Success 1"),
    Promise.reject(new Error("Error 1")),
    delay(300).then(() => "Success 2"),
    Promise.reject(new Error("Error 2"))
];

Promise.allSettled(mixedPromises)
    .then(results => {
        console.log("Promise.allSettled results:");
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`  ${index}: Success - ${result.value}`);
            } else {
                console.log(`  ${index}: Failed - ${result.reason.message}`);
            }
        });
    });

console.log();

// Example 5: Promise.race() - First to settle wins
console.log("Example 5: Promise.race()");

const fastPromise = delay(300).then(() => "Fast");
const slowPromise = delay(1000).then(() => "Slow");
const failingPromise = delay(500).then(() => { throw new Error("Failed"); });

Promise.race([fastPromise, slowPromise])
    .then(result => console.log("Promise.race winner:", result));

Promise.race([slowPromise, failingPromise])
    .then(result => console.log("Won't execute"))
    .catch(error => console.log("Promise.race failed:", error.message));

console.log();

// Example 6: Promise.any() - First successful promise (ES2021)
console.log("Example 6: Promise.any()");

const failFast = Promise.reject(new Error("Fail fast"));
const failSlow = delay(800).then(() => { throw new Error("Fail slow"); });
const succeedLater = delay(1200).then(() => "Success!");

Promise.any([failFast, failSlow, succeedLater])
    .then(result => console.log("Promise.any result:", result))
    .catch(error => console.log("All promises failed:", error.message));

// All failing promises
Promise.any([
    Promise.reject(new Error("Error 1")),
    Promise.reject(new Error("Error 2")),
    Promise.reject(new Error("Error 3"))
])
    .then(result => console.log("Won't execute"))
    .catch(error => {
        console.log("Promise.any all failed:", error.name); // AggregateError
        console.log("Individual errors:", error.errors.map(e => e.message));
    });

console.log();

// ========================================
// ASYNC/AWAIT
// ========================================

console.log("=== Async/Await ===\n");

// Example 7: Basic async/await
console.log("Example 7: Basic async/await");

async function fetchUserData(userId) {
    try {
        console.log(`Fetching user ${userId}...`);
        await delay(500);
        
        if (userId <= 0) {
            throw new Error("Invalid user ID");
        }
        
        return {
            id: userId,
            name: `User ${userId}`,
            email: `user${userId}@example.com`
        };
    } catch (error) {
        console.log("Error fetching user:", error.message);
        throw error;
    }
}

async function demonstrateAsyncAwait() {
    try {
        const user1 = await fetchUserData(1);
        console.log("User 1:", user1);
        
        const user2 = await fetchUserData(2);
        console.log("User 2:", user2);
        
        // This will throw an error
        const invalidUser = await fetchUserData(-1);
        console.log("This won't execute");
    } catch (error) {
        console.log("Async function error:", error.message);
    }
}

demonstrateAsyncAwait();
console.log();

// Example 8: Parallel execution with async/await
console.log("Example 8: Parallel execution");

async function sequentialExecution() {
    console.time("Sequential");
    const result1 = await delay(300).then(() => "First");
    const result2 = await delay(300).then(() => "Second");
    const result3 = await delay(300).then(() => "Third");
    console.timeEnd("Sequential");
    return [result1, result2, result3];
}

async function parallelExecution() {
    console.time("Parallel");
    const promises = [
        delay(300).then(() => "First"),
        delay(300).then(() => "Second"),
        delay(300).then(() => "Third")
    ];
    const results = await Promise.all(promises);
    console.timeEnd("Parallel");
    return results;
}

// Run both approaches
sequentialExecution().then(results => 
    console.log("Sequential results:", results)
);

parallelExecution().then(results => 
    console.log("Parallel results:", results)
);

console.log();

// ========================================
// ERROR HANDLING PATTERNS
// ========================================

console.log("=== Error Handling Patterns ===\n");

// Example 9: Promise error handling
console.log("Example 9: Promise error handling");

function unreliableAPI(shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error("API Error"));
            } else {
                resolve("API Success");
            }
        }, 300);
    });
}

// Chain error handling
unreliableAPI(false)
    .then(result => {
        console.log("Success:", result);
        return unreliableAPI(true); // This will fail
    })
    .then(result => {
        console.log("This won't execute");
    })
    .catch(error => {
        console.log("Chain error:", error.message);
        return "Recovered"; // Recovery
    })
    .then(result => {
        console.log("After recovery:", result);
    });

// Multiple catch blocks
unreliableAPI(true)
    .catch(error => {
        if (error.message === "API Error") {
            console.log("Specific API error handled");
            throw new Error("Rethrown error");
        }
        return "Default recovery";
    })
    .catch(error => {
        console.log("Second catch:", error.message);
    });

console.log();

// Example 10: Async/await error handling
console.log("Example 10: Async/await error handling");

async function robustAsyncFunction() {
    try {
        const result1 = await unreliableAPI(false);
        console.log("First call:", result1);
        
        const result2 = await unreliableAPI(true);
        console.log("This won't execute");
    } catch (error) {
        console.log("Async error caught:", error.message);
        
        // You can still use try/catch for specific operations
        try {
            const recovery = await unreliableAPI(false);
            console.log("Recovery successful:", recovery);
            return recovery;
        } catch (recoveryError) {
            console.log("Recovery failed:", recoveryError.message);
            throw new Error("Complete failure");
        }
    }
}

robustAsyncFunction()
    .then(result => console.log("Final result:", result))
    .catch(error => console.log("Unhandled error:", error.message));

console.log();

// ========================================
// ADVANCED PROMISE PATTERNS
// ========================================

console.log("=== Advanced Promise Patterns ===\n");

// Example 11: Promise retry pattern
console.log("Example 11: Promise retry pattern");

function promiseRetry(promiseFactory, maxRetries = 3, delayMs = 1000) {
    return new Promise(async (resolve, reject) => {
        let lastError;
        
        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const result = await promiseFactory();
                resolve(result);
                return;
            } catch (error) {
                lastError = error;
                console.log(`Attempt ${attempt} failed:`, error.message);
                
                if (attempt < maxRetries) {
                    await delay(delayMs);
                }
            }
        }
        
        reject(lastError);
    });
}

// Usage
promiseRetry(() => randomSuccess(0.3), 3, 500)
    .then(result => console.log("Retry success:", result))
    .catch(error => console.log("Retry failed:", error.message));

console.log();

// Example 12: Promise timeout pattern
console.log("Example 12: Promise timeout pattern");

function promiseTimeout(promise, timeoutMs) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`Timeout after ${timeoutMs}ms`)), timeoutMs);
    });
    
    return Promise.race([promise, timeoutPromise]);
}

// Usage
const slowOperation = delay(2000).then(() => "Slow result");

promiseTimeout(slowOperation, 1000)
    .then(result => console.log("Timeout success:", result))
    .catch(error => console.log("Timeout error:", error.message));

console.log();

// Example 13: Promise queue for rate limiting
console.log("Example 13: Promise queue");

class PromiseQueue {
    constructor(concurrency = 1) {
        this.concurrency = concurrency;
        this.running = 0;
        this.queue = [];
    }
    
    add(promiseFactory) {
        return new Promise((resolve, reject) => {
            this.queue.push({
                promiseFactory,
                resolve,
                reject
            });
            this.process();
        });
    }
    
    async process() {
        if (this.running >= this.concurrency || this.queue.length === 0) {
            return;
        }
        
        this.running++;
        const { promiseFactory, resolve, reject } = this.queue.shift();
        
        try {
            const result = await promiseFactory();
            resolve(result);
        } catch (error) {
            reject(error);
        } finally {
            this.running--;
            this.process(); // Process next item
        }
    }
}

const queue = new PromiseQueue(2); // Max 2 concurrent operations

// Add multiple tasks
for (let i = 1; i <= 5; i++) {
    queue.add(() => delay(500).then(() => `Task ${i} completed`))
        .then(result => console.log(result));
}

console.log();

// Example 14: Promise-based event emitter
console.log("Example 14: Promise-based events");

class PromiseEventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(data));
        }
    }
    
    once(event) {
        return new Promise(resolve => {
            const listener = (data) => {
                resolve(data);
                // Remove listener after first call
                const index = this.events[event].indexOf(listener);
                if (index > -1) {
                    this.events[event].splice(index, 1);
                }
            };
            this.on(event, listener);
        });
    }
}

const emitter = new PromiseEventEmitter();

// Wait for event
emitter.once('data')
    .then(data => console.log("Received data:", data));

// Emit event after delay
setTimeout(() => {
    emitter.emit('data', { message: "Hello from event!" });
}, 1000);

console.log();

// ========================================
// PRACTICAL ASYNC PATTERNS
// ========================================

console.log("=== Practical Async Patterns ===\n");

// Example 15: Async data fetching with caching
console.log("Example 15: Async caching");

class AsyncCache {
    constructor(ttl = 5000) {
        this.cache = new Map();
        this.ttl = ttl;
    }
    
    async get(key, fetcher) {
        const cached = this.cache.get(key);
        
        if (cached && (Date.now() - cached.timestamp) < this.ttl) {
            console.log(`Cache hit for ${key}`);
            return cached.data;
        }
        
        console.log(`Cache miss for ${key}, fetching...`);
        const data = await fetcher();
        
        this.cache.set(key, {
            data,
            timestamp: Date.now()
        });
        
        return data;
    }
    
    clear() {
        this.cache.clear();
    }
}

const cache = new AsyncCache(3000);

async function fetchUser(id) {
    await delay(500); // Simulate API call
    return { id, name: `User ${id}`, timestamp: Date.now() };
}

// Usage
async function demonstrateCache() {
    console.log("First fetch:");
    const user1 = await cache.get('user1', () => fetchUser(1));
    console.log(user1);
    
    console.log("Second fetch (should hit cache):");
    const user1Again = await cache.get('user1', () => fetchUser(1));
    console.log(user1Again);
}

demonstrateCache();
console.log();

// Example 16: Async iterator and generator
console.log("Example 16: Async iterators");

async function* asyncNumberGenerator(max) {
    for (let i = 1; i <= max; i++) {
        await delay(200); // Simulate async operation
        yield i;
    }
}

async function consumeAsyncIterator() {
    console.log("Consuming async iterator:");
    for await (const number of asyncNumberGenerator(5)) {
        console.log("Generated:", number);
    }
    console.log("Iterator complete");
}

consumeAsyncIterator();

// Example 17: Batch processing
console.log("Example 17: Batch processing");

async function processBatch(items, batchSize, processor) {
    const results = [];
    
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        console.log(`Processing batch ${Math.floor(i / batchSize) + 1}:`, batch);
        
        const batchResults = await Promise.all(
            batch.map(item => processor(item))
        );
        
        results.push(...batchResults);
        
        // Optional delay between batches
        if (i + batchSize < items.length) {
            await delay(100);
        }
    }
    
    return results;
}

async function processItem(item) {
    await delay(Math.random() * 300);
    return item * 2;
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

processBatch(items, 3, processItem)
    .then(results => console.log("Batch results:", results));

console.log();

// ========================================
// ERROR RECOVERY PATTERNS
// ========================================

console.log("=== Error Recovery Patterns ===\n");

// Example 18: Circuit breaker pattern
console.log("Example 18: Circuit breaker");

class CircuitBreaker {
    constructor(threshold = 3, timeout = 5000) {
        this.failureThreshold = threshold;
        this.timeout = timeout;
        this.failureCount = 0;
        this.lastFailureTime = null;
        this.state = 'CLOSED'; // CLOSED, OPEN, HALF_OPEN
    }
    
    async call(operation) {
        if (this.state === 'OPEN') {
            if (Date.now() - this.lastFailureTime >= this.timeout) {
                this.state = 'HALF_OPEN';
            } else {
                throw new Error('Circuit breaker is OPEN');
            }
        }
        
        try {
            const result = await operation();
            this.onSuccess();
            return result;
        } catch (error) {
            this.onFailure();
            throw error;
        }
    }
    
    onSuccess() {
        this.failureCount = 0;
        this.state = 'CLOSED';
    }
    
    onFailure() {
        this.failureCount++;
        this.lastFailureTime = Date.now();
        
        if (this.failureCount >= this.failureThreshold) {
            this.state = 'OPEN';
        }
    }
}

const circuitBreaker = new CircuitBreaker(2, 2000);

async function unreliableService() {
    if (Math.random() < 0.7) {
        throw new Error('Service failure');
    }
    return 'Service success';
}

// Test circuit breaker
async function testCircuitBreaker() {
    for (let i = 1; i <= 6; i++) {
        try {
            const result = await circuitBreaker.call(unreliableService);
            console.log(`Call ${i}: ${result}`);
        } catch (error) {
            console.log(`Call ${i}: ${error.message}`);
        }
        await delay(500);
    }
}

testCircuitBreaker();

console.log("\n=== Best Practices ===");
console.log("1. Use Promise.all() for parallel operations, await for sequential");
console.log("2. Use Promise.allSettled() when you need all results regardless of failures");
console.log("3. Implement proper error handling with try/catch or .catch()");
console.log("4. Use Promise.race() for timeouts and competitive operations");
console.log("5. Avoid mixing callbacks with Promises - promisify when needed");
console.log("6. Use async/await for cleaner, more readable asynchronous code");
console.log("7. Implement retry logic for transient failures");
console.log("8. Use circuit breakers for external service calls");
console.log("9. Cache async results to improve performance");
console.log("10. Consider memory leaks when storing promises or timers");