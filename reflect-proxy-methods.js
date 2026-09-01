/**
 * Reflect & Proxy Metaprogramming Methods
 * 
 * Description:
 * This file demonstrates JavaScript metaprogramming capabilities using Reflect and Proxy:
 * - Reflect static methods (get, set, has, deleteProperty, apply, construct, defineProperty, ownKeys)
 * - Proxy traps (get, set, has, deleteProperty, apply, construct)
 * - Practical metaprogramming patterns (Validation, Reactive State, Logging, Readonly objects)
 * 
 * Time Complexity: Minimal execution overhead per trap call
 * Space Complexity: O(1) extra memory overhead per proxy handler
 */

// ========================================
// 1. REFLECT API METHODS
// ========================================

console.log("=== Reflect API Static Methods Examples ===\n");

// Example 1: Basic Reflect operations
console.log("Example 1: Reflect property operations");
const targetObj = {
    name: "Widget",
    price: 49.99,
    _internalId: "SECRET_123"
};

// Reflect.get()
console.log("Reflect.get(targetObj, 'name'):", Reflect.get(targetObj, "name")); // "Widget"

// Reflect.set() - returns boolean indicating success
const setSuccess = Reflect.set(targetObj, "price", 59.99);
console.log("Reflect.set() success:", setSuccess);
console.log("Updated price:", targetObj.price); // 59.99

// Reflect.has() - alternative to 'in' operator
console.log("Reflect.has(targetObj, 'price'):", Reflect.has(targetObj, "price")); // true

// Reflect.deleteProperty() - returns boolean
const deleteSuccess = Reflect.deleteProperty(targetObj, "_internalId");
console.log("Reflect.deleteProperty() success:", deleteSuccess);
console.log("Has _internalId after delete:", Reflect.has(targetObj, "_internalId")); // false
console.log();

// Example 2: Reflect.apply() & Reflect.construct()
console.log("Example 2: Reflect.apply() and Reflect.construct()");

function multiply(a, b) {
    return a * b;
}

// Reflect.apply(targetFunction, thisArg, argumentsList)
const product = Reflect.apply(multiply, null, [6, 7]);
console.log("Reflect.apply(multiply, null, [6, 7]):", product); // 42

class Person {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
}

// Reflect.construct(TargetConstructor, argumentsList)
const john = Reflect.construct(Person, ["John Doe", "Developer"]);
console.log("Reflect.construct instance:", john); // Person { name: 'John Doe', role: 'Developer' }
console.log();

// Example 3: Reflect.ownKeys()
console.log("Example 3: Reflect.ownKeys()");
const sym = Symbol("id");
const complexObj = {
    visible: true,
    [sym]: 999
};

Object.defineProperty(complexObj, "hidden", {
    value: "secret",
    enumerable: false
});

console.log("Object.keys() (only enumerable string keys):", Object.keys(complexObj));
console.log("Reflect.ownKeys() (ALL keys including non-enumerable & symbols):", Reflect.ownKeys(complexObj));
console.log();

// ========================================
// 2. PROXY TRAPS & PATTERNS
// ========================================

console.log("=== Proxy Traps & Metaprogramming Patterns ===\n");

// Pattern 1: Property Access Logging Proxy
console.log("Pattern 1: Logging Proxy");
const account = { balance: 1000, accountHolder: "Alice" };

const loggedAccount = new Proxy(account, {
    get(target, prop, receiver) {
        console.log(`  [LOG] Reading property '${String(prop)}'`);
        return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
        console.log(`  [LOG] Setting property '${String(prop)}' to ${value}`);
        return Reflect.set(target, prop, value, receiver);
    }
});

loggedAccount.balance += 500; // Triggers get then set
console.log("Account balance:", loggedAccount.balance);
console.log();

// Pattern 2: Schema Validation Proxy
console.log("Pattern 2: Schema Validation Proxy");

function createValidatedUser(userData) {
    const validatorHandler = {
        set(target, prop, value, receiver) {
            if (prop === "age") {
                if (typeof value !== "number" || value < 0 || value > 120) {
                    throw new TypeError("Age must be a valid number between 0 and 120");
                }
            }
            if (prop === "email") {
                if (typeof value !== "string" || !value.includes("@")) {
                    throw new TypeError("Invalid email address format");
                }
            }
            return Reflect.set(target, prop, value, receiver);
        }
    };

    return new Proxy(userData, validatorHandler);
}

const user = createValidatedUser({ name: "Bob", age: 28, email: "bob@example.com" });
user.age = 30; // Valid
console.log("User age updated to:", user.age);

try {
    user.age = -5; // Throws error!
} catch (err) {
    console.log("Caught validation error:", err.message);
}
console.log();

// Pattern 3: Reactive State Proxy (Vue 3 / MobX style reactivity)
console.log("Pattern 3: Reactive State Observer");

function createReactiveState(initialState, onChange) {
    return new Proxy(initialState, {
        set(target, prop, value, receiver) {
            const oldValue = target[prop];
            const success = Reflect.set(target, prop, value, receiver);
            if (success && oldValue !== value) {
                onChange(prop, value, oldValue);
            }
            return success;
        }
    });
}

const reactiveStore = createReactiveState(
    { count: 0, status: "idle" },
    (key, newValue, oldValue) => {
        console.log(`  [REACTIVE DETECTED] '${key}' changed from ${oldValue} to ${newValue}`);
    }
);

reactiveStore.count = 1;
reactiveStore.status = "loading";
reactiveStore.count = 2;
console.log();

// Pattern 4: Readonly Proxy (Immutable view)
console.log("Pattern 4: Readonly Object Handler");

function makeReadonly(obj) {
    return new Proxy(obj, {
        set(target, prop) {
            console.warn(`  [READONLY WARNING] Cannot set property '${String(prop)}' on readonly object.`);
            return false; // Rejects mutation in strict mode
        },
        deleteProperty(target, prop) {
            console.warn(`  [READONLY WARNING] Cannot delete property '${String(prop)}' on readonly object.`);
            return false;
        }
    });
}

const config = makeReadonly({ apiEndpoint: "https://api.example.com", timeout: 5000 });
console.log("Readonly endpoint:", config.apiEndpoint);
config.timeout = 10000; // Rejected!
console.log("Config timeout remains:", config.timeout);
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Always use Reflect methods inside Proxy handlers to forward default behavior cleanly.");
console.log("2. Use Proxy for cross-cutting concerns like validation, logging, and state reactivity.");
console.log("3. Beware of performance overhead when proxying hot loop operations.");
console.log("4. Return true from Proxy set() handler to indicate successful assignment.");
