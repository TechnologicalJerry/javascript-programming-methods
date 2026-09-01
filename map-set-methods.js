/**
 * Map, Set, WeakMap, WeakSet & ES2024 Set Methods
 * 
 * Description:
 * This file demonstrates key-value collections and unique value collections in JavaScript:
 * - Map & Map.prototype methods (set, get, has, delete, clear, size, keys, values, entries, forEach)
 * - Set & Set.prototype methods (add, has, delete, clear, size, keys, values, entries, forEach)
 * - ES2024 Set Logical Operations (union, intersection, difference, symmetricDifference, isSubsetOf, isSupersetOf, isDisjointFrom)
 * - WeakMap & WeakSet (Garbage-collection friendly weak references)
 * 
 * Time Complexity: O(1) average time complexity for lookup, insert, and delete operations
 * Space Complexity: O(n)
 */

// ========================================
// 1. MAP METHODS
// ========================================

console.log("=== Map Methods Examples ===\n");

// Example 1: Basic Map creation and operations
console.log("Example 1: Map basic CRUD operations");
const userMap = new Map();

// Setting key-value pairs (keys can be any type!)
const userKeyObj = { id: 101 };
userMap.set("name", "Alice");
userMap.set(42, "Numeric key");
userMap.set(userKeyObj, { role: "Admin", active: true });

console.log("Map size:", userMap.size);                              // 3
console.log("Get string key 'name':", userMap.get("name"));           // "Alice"
console.log("Get number key 42:", userMap.get(42));                   // "Numeric key"
console.log("Get object reference key:", userMap.get(userKeyObj));    // { role: "Admin", active: true }

console.log("Has 'name':", userMap.has("name"));                     // true
console.log("Has unknown key:", userMap.has("unknown"));             // false

// Deleting a key
userMap.delete(42);
console.log("Map size after deleting key 42:", userMap.size);        // 2
console.log();

// Example 2: Iterating over a Map
console.log("Example 2: Iterating over Map keys, values, and entries");
const priceMap = new Map([
    ["Apple", 1.5],
    ["Banana", 0.75],
    ["Cherry", 2.5]
]);

console.log("Map entries (for...of):");
for (const [fruit, price] of priceMap) {
    console.log(`  ${fruit}: \$${price}`);
}

console.log("\nMap.prototype.forEach():");
priceMap.forEach((price, fruit) => {
    console.log(`  Item ${fruit} costs \$${price}`);
});
console.log();

// ========================================
// 2. SET METHODS
// ========================================

console.log("=== Set Methods Examples ===\n");

// Example 3: Set operations and deduplication
console.log("Example 3: Set basic operations");
const tags = new Set(["javascript", "web", "node"]);

tags.add("react");
tags.add("javascript"); // Duplicate added - ignored automatically!

console.log("Set size (duplicates ignored):", tags.size);             // 4
console.log("Has 'react':", tags.has("react"));                       // true

tags.delete("node");
console.log("Set size after delete:", tags.size);                     // 3

// Deduplicating an array using Set
const rawArray = [1, 2, 2, 3, 4, 4, 4, 5];
const uniqueArray = [...new Set(rawArray)];
console.log("Deduplicated array:", uniqueArray);                      // [1, 2, 3, 4, 5]
console.log();

// ========================================
// 3. ES2024 SET LOGICAL OPERATIONS
// ========================================

console.log("=== ES2024 Set Logical Operations ===\n");

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// Polyfills / Implementations for ES2024 Set Methods
const setUnion = Set.prototype.union
    ? (a, b) => a.union(b)
    : (a, b) => new Set([...a, ...b]);

const setIntersection = Set.prototype.intersection
    ? (a, b) => a.intersection(b)
    : (a, b) => new Set([...a].filter(x => b.has(x)));

const setDifference = Set.prototype.difference
    ? (a, b) => a.difference(b)
    : (a, b) => new Set([...a].filter(x => !b.has(x)));

const setSymmetricDifference = Set.prototype.symmetricDifference
    ? (a, b) => a.symmetricDifference(b)
    : (a, b) => new Set([...a].filter(x => !b.has(x)).concat([...b].filter(x => !a.has(x))));

const setIsSubsetOf = Set.prototype.isSubsetOf
    ? (a, b) => a.isSubsetOf(b)
    : (a, b) => [...a].every(x => b.has(x));

const setIsSupersetOf = Set.prototype.isSupersetOf
    ? (a, b) => a.isSupersetOf(b)
    : (a, b) => [...b].every(x => a.has(x));

const setIsDisjointFrom = Set.prototype.isDisjointFrom
    ? (a, b) => a.isDisjointFrom(b)
    : (a, b) => [...a].every(x => !b.has(x));

console.log("Set A:", [...setA]);
console.log("Set B:", [...setB]);

console.log("Union (A ∪ B):", [...setUnion(setA, setB)]);                           // [1, 2, 3, 4, 5, 6]
console.log("Intersection (A ∩ B):", [...setIntersection(setA, setB)]);             // [3, 4]
console.log("Difference (A \\ B):", [...setDifference(setA, setB)]);                 // [1, 2]
console.log("Symmetric Difference (A Δ B):", [...setSymmetricDifference(setA, setB)]); // [1, 2, 5, 6]

const subSet = new Set([1, 2]);
console.log("[1, 2] isSubsetOf Set A:", setIsSubsetOf(subSet, setA));               // true
console.log("Set A isSupersetOf [1, 2]:", setIsSupersetOf(setA, subSet));           // true
console.log("Set A isDisjointFrom [9, 10]:", setIsDisjointFrom(setA, new Set([9, 10]))); // true
console.log();

// ========================================
// 4. WEAKMAP & WEAKSET EXAMPLES
// ========================================

console.log("=== WeakMap & WeakSet Examples ===\n");

// Example 4: Private data with WeakMap
console.log("Example 4: WeakMap for private object metadata");
const privateData = new WeakMap();

class UserSession {
    constructor(user, token) {
        // Store private metadata linked to object instance
        privateData.set(this, { user, token, createdAt: Date.now() });
    }

    getUser() {
        return privateData.get(this).user;
    }

    hasValidToken() {
        return Boolean(privateData.get(this)?.token);
    }
}

const session = new UserSession("Bob", "secret-token-123");
console.log("Public session object:", session);                          // UserSession {}
console.log("Session user via method:", session.getUser());              // "Bob"
console.log("Has token:", session.hasValidToken());                       // true
console.log("Private data not enumerable on session:", Object.keys(session)); // []
console.log();

// Example 5: Tracking visited objects with WeakSet
console.log("Example 5: WeakSet for tracking processed object references");
const processedObjects = new WeakSet();

function processOnce(obj) {
    if (processedObjects.has(obj)) {
        console.log("Object was already processed! Skipping...");
        return;
    }
    processedObjects.add(obj);
    console.log("Processing object payload:", obj.data);
}

const payload = { data: "Important calculation" };
processOnce(payload); // Processing object payload: Important calculation
processOnce(payload); // Object was already processed! Skipping...
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use Map over plain objects when keys are non-strings or when dynamic add/remove frequency is high.");
console.log("2. Use Set for maintaining unique values and fast presence checks (O(1)).");
console.log("3. Use WeakMap / WeakSet to prevent memory leaks when storing metadata tied to object lifecycles.");
console.log("4. Leverage ES2024 Set methods (union, intersection, difference) for clean domain logic.");
