/**
 * Array Static Methods and Modern Methods
 * 
 * Description:
 * This file covers Array static methods and modern array instance methods:
 * 
 * Static Methods:
 * - Array.isArray() - Check if value is an array
 * - Array.from() - Create array from iterable or array-like object
 * - Array.of() - Create array from arguments
 * 
 * Instance Methods:
 * - fill() - Fill array with static value
 * - copyWithin() - Copy part of array to another location
 * - at() - Get element at index (supports negative indices) - ES2022
 * - entries() - Returns iterator of [index, value] pairs
 * - keys() - Returns iterator of indices
 * - values() - Returns iterator of values
 * 
 * Time Complexity: Varies by method
 * Space Complexity: Varies by method
 */

// ========================================
// ARRAY.ISARRAY() EXAMPLES
// ========================================

console.log("=== Array.isArray() Examples ===\n");

// Example 1: Basic type checking
console.log("Example 1: Type checking");

const values = [
    [],
    [1, 2, 3],
    {},
    "array",
    123,
    null,
    undefined,
    { length: 0 },
    arguments
];

values.forEach(value => {
    console.log(`${JSON.stringify(value)} is array:`, Array.isArray(value));
});
console.log();

// Example 2: Array-like objects
console.log("Example 2: Array-like vs actual arrays");

const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const actualArray = ['a', 'b', 'c'];

console.log("Array-like object:", Array.isArray(arrayLike)); // false
console.log("Actual array:", Array.isArray(actualArray)); // true

// Convert array-like to array
const converted = Array.from(arrayLike);
console.log("Converted to array:", Array.isArray(converted)); // true
console.log();

// Example 3: Reliable type checking
console.log("Example 3: Why use Array.isArray()");

console.log("typeof []:", typeof []); // "object" - not helpful!
console.log("[] instanceof Array:", [] instanceof Array); // true
console.log("Array.isArray([]):", Array.isArray([])); // true (most reliable)
console.log();

// ========================================
// ARRAY.FROM() EXAMPLES
// ========================================

console.log("=== Array.from() Examples ===\n");

// Example 4: Converting string to array
console.log("Example 4: String to array");

const str = "Hello";
const chars = Array.from(str);

console.log("String:", str);
console.log("Array:", chars);
console.log();

// Example 5: Converting Set to array
console.log("Example 5: Set to array");

const set = new Set([1, 2, 3, 4, 5]);
const arrFromSet = Array.from(set);

console.log("Set:", set);
console.log("Array:", arrFromSet);
console.log();

// Example 6: Converting Map to array
console.log("Example 6: Map to array");

const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

const arrFromMap = Array.from(map);
console.log("Map entries as array:", arrFromMap);

const keys = Array.from(map.keys());
const values = Array.from(map.values());
console.log("Keys:", keys);
console.log("Values:", values);
console.log();

// Example 7: Array.from() with mapping function
console.log("Example 7: Array.from() with mapper");

// Create array of squares
const squares = Array.from({ length: 5 }, (_, i) => (i + 1) ** 2);
console.log("Squares:", squares);

// Create array of random numbers
const randoms = Array.from({ length: 5 }, () => Math.random().toFixed(2));
console.log("Random numbers:", randoms);

// Double each character code
const codes = Array.from("ABC", char => char.charCodeAt(0));
console.log("Character codes:", codes);
console.log();

// Example 8: Creating range arrays
console.log("Example 8: Creating ranges");

const range = (start, end) => Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
);

console.log("Range 1-10:", range(1, 10));
console.log("Range 5-15:", range(5, 15));
console.log();

// Example 9: Converting NodeList (DOM example simulation)
console.log("Example 9: Array-like objects");

const arrayLike2 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
const fromArrayLike = Array.from(arrayLike2);

console.log("Array-like:", arrayLike2);
console.log("Converted:", fromArrayLike);
console.log();

// ========================================
// ARRAY.OF() EXAMPLES
// ========================================

console.log("=== Array.of() Examples ===\n");

// Example 10: Creating arrays with Array.of()
console.log("Example 10: Array.of() vs Array constructor");

console.log("Array(3):", Array(3)); // [empty × 3]
console.log("Array.of(3):", Array.of(3)); // [3]

console.log("\nArray(1, 2, 3):", Array(1, 2, 3)); // [1, 2, 3]
console.log("Array.of(1, 2, 3):", Array.of(1, 2, 3)); // [1, 2, 3]

// Array.of() is consistent
console.log("\nArray.of() is more consistent:");
console.log("Array.of(undefined):", Array.of(undefined));
console.log("Array.of(null):", Array.of(null));
console.log("Array.of():", Array.of()); // []
console.log();

// Example 11: Practical use of Array.of()
console.log("Example 11: Practical uses");

// Creating single-element arrays safely
const singleValues = [1, 2, 3, 4, 5].map(n => Array.of(n));
console.log("Single-element arrays:", singleValues);
console.log();

// ========================================
// FILL() METHOD EXAMPLES
// ========================================

console.log("=== Array.fill() Examples ===\n");

// Example 12: Basic fill()
console.log("Example 12: Basic fill()");

const arr1 = [1, 2, 3, 4, 5];
console.log("Before fill:", arr1);

arr1.fill(0);
console.log("After fill(0):", arr1);

const arr2 = [1, 2, 3, 4, 5];
arr2.fill(9, 2, 4);
console.log("fill(9, 2, 4):", arr2); // Fill from index 2 to 4 (exclusive)
console.log();

// Example 13: Creating filled arrays
console.log("Example 13: Creating filled arrays");

const zeros = new Array(5).fill(0);
console.log("Array of zeros:", zeros);

const defaultValues = new Array(3).fill({ count: 0 });
console.log("Array of objects:", defaultValues);
console.log("⚠️  Warning: all elements reference same object!");

// Proper way to create unique objects
const uniqueObjects = Array.from({ length: 3 }, () => ({ count: 0 }));
console.log("Unique objects:", uniqueObjects);
console.log();

// Example 14: Filling with negative indices
console.log("Example 14: Negative indices");

const arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, -3, -1);
console.log("fill(0, -3, -1):", arr3);
console.log();

// ========================================
// COPYWITHIN() METHOD EXAMPLES
// ========================================

console.log("=== Array.copyWithin() Examples ===\n");

// Example 15: Basic copyWithin()
console.log("Example 15: Basic copyWithin()");

const arr4 = [1, 2, 3, 4, 5];
console.log("Before copyWithin:", arr4);

arr4.copyWithin(0, 3);
console.log("copyWithin(0, 3):", arr4); // Copy from 3 to end, paste at 0
console.log("Explanation: Copy [4, 5] to start");
console.log();

// Example 16: Copy with end parameter
console.log("Example 16: copyWithin() with end");

const arr5 = [1, 2, 3, 4, 5];
arr5.copyWithin(0, 3, 4);
console.log("copyWithin(0, 3, 4):", arr5); // Copy index 3, paste at 0
console.log();

// Example 17: Negative indices
console.log("Example 17: Negative indices");

const arr6 = [1, 2, 3, 4, 5];
arr6.copyWithin(-2, 0);
console.log("copyWithin(-2, 0):", arr6); // Copy from start, paste at -2
console.log();

// Example 18: Overlapping regions
console.log("Example 18: Overlapping copy");

const arr7 = [1, 2, 3, 4, 5];
arr7.copyWithin(1, 0);
console.log("copyWithin(1, 0):", arr7);
console.log();

// ========================================
// AT() METHOD EXAMPLES (ES2022)
// ========================================

console.log("=== Array.at() Examples ===\n");

// Example 19: Basic at() usage
console.log("Example 19: at() method");

const fruits = ["apple", "banana", "cherry", "date"];

console.log("at(0):", fruits.at(0)); // "apple"
console.log("at(2):", fruits.at(2)); // "cherry"
console.log("at(-1):", fruits.at(-1)); // "date" (last element)
console.log("at(-2):", fruits.at(-2)); // "cherry"
console.log("at(10):", fruits.at(10)); // undefined

// Compare with bracket notation
console.log("\nBracket notation can't use negative indices:");
console.log("fruits[-1]:", fruits[-1]); // undefined
console.log("fruits[fruits.length - 1]:", fruits[fruits.length - 1]); // "date"
console.log();

// Example 20: Practical use of at()
console.log("Example 20: Practical uses");

const data = [10, 20, 30, 40, 50];

// Get last element easily
console.log("Last element:", data.at(-1));

// Get second to last
console.log("Second to last:", data.at(-2));

// Safe access with fallback
const safeAt = (arr, index) => arr.at(index) ?? 'default';
console.log("Safe access at(10):", safeAt(data, 10));
console.log();

// ========================================
// ITERATOR METHODS
// ========================================

console.log("=== Iterator Methods: entries(), keys(), values() ===\n");

// Example 21: entries() method
console.log("Example 21: entries()");

const colors = ["red", "green", "blue"];

for (const [index, value] of colors.entries()) {
    console.log(`  ${index}: ${value}`);
}
console.log();

// Example 22: keys() method
console.log("Example 22: keys()");

for (const index of colors.keys()) {
    console.log(`  Index: ${index}`);
}

// Convert to array
const indices = Array.from(colors.keys());
console.log("Indices as array:", indices);
console.log();

// Example 23: values() method
console.log("Example 23: values()");

for (const value of colors.values()) {
    console.log(`  Value: ${value}`);
}

// Note: This is the same as for...of
console.log("\nSame as for...of:");
for (const value of colors) {
    console.log(`  Value: ${value}`);
}
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Creating sequences
console.log("Use Case 1: Creating sequences");

const fibonacci = (n) => {
    return Array.from({ length: n }, (_, i) => {
        if (i <= 1) return i;
        const arr = fibonacci(i);
        return arr[i - 1] + arr[i - 2];
    });
};

console.log("Fibonacci(10):", fibonacci(10));
console.log();

// Use Case 2: Matrix initialization
console.log("Use Case 2: Matrix initialization");

const createMatrix = (rows, cols, fill = 0) => {
    return Array.from(
        { length: rows },
        () => Array.from({ length: cols }, () => fill)
    );
};

const matrix = createMatrix(3, 3, 0);
console.log("3x3 matrix:");
matrix.forEach(row => console.log("  ", row));
console.log();

// Use Case 3: Pagination
console.log("Use Case 3: Pagination");

const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

function paginate(array, pageSize) {
    return Array.from(
        { length: Math.ceil(array.length / pageSize) },
        (_, i) => array.slice(i * pageSize, (i + 1) * pageSize)
    );
}

const pages = paginate(items, 10);
console.log(`Total pages: ${pages.length}`);
console.log("Page 1:", pages[0]);
console.log();

// Use Case 4: Buffer initialization
console.log("Use Case 4: Buffer/Array initialization");

// Create a circular buffer
class CircularBuffer {
    constructor(size) {
        this.buffer = new Array(size).fill(null);
        this.size = size;
        this.index = 0;
    }
    
    push(item) {
        this.buffer[this.index] = item;
        this.index = (this.index + 1) % this.size;
    }
    
    getAll() {
        return [...this.buffer];
    }
}

const buffer = new CircularBuffer(5);
[1, 2, 3, 4, 5, 6, 7].forEach(n => buffer.push(n));
console.log("Circular buffer:", buffer.getAll());
console.log();

// ========================================
// ADVANCED PATTERNS
// ========================================

console.log("=== Advanced Patterns ===\n");

// Pattern 1: Chunk array
const chunk = (arr, size) => {
    return Array.from(
        { length: Math.ceil(arr.length / size) },
        (_, i) => arr.slice(i * size, i * size + size)
    );
};

console.log("Chunk [1-10] by 3:", chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// Pattern 2: Generate alphabet
const alphabet = Array.from({ length: 26 }, (_, i) => 
    String.fromCharCode(65 + i)
);
console.log("Alphabet:", alphabet);

// Pattern 3: Random array
const randomArray = (length, max = 100) => 
    Array.from({ length }, () => Math.floor(Math.random() * max));

console.log("Random array:", randomArray(5, 10));

// Pattern 4: Index mapping
const indexMap = (arr) => 
    new Map(arr.map((value, index) => [index, value]));

console.log("Index map:", indexMap(['a', 'b', 'c']));
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use Array.isArray() for reliable array checking");
console.log("2. Use Array.from() to convert iterables to arrays");
console.log("3. Use Array.of() for consistent single-element arrays");
console.log("4. fill() mutates the array - be careful with object references");
console.log("5. copyWithin() is useful for buffer operations");
console.log("6. at() provides cleaner negative index access (ES2022)");
console.log("7. Use Array.from() with mapper for generating sequences");
console.log("8. entries(), keys(), values() return iterators");
console.log("9. Avoid fill() with objects - they'll all reference same object");
console.log("10. Use Array.from() instead of [...spread] for better clarity");

console.log("\n=== Common Patterns ===");

// Pattern examples
console.log("\nPattern 1: Range function");
console.log("range(1, 5):", range(1, 5));

console.log("\nPattern 2: Repeat pattern");
const repeat = (value, times) => Array.from({ length: times }, () => value);
console.log("repeat('x', 5):", repeat('x', 5));

console.log("\nPattern 3: Safe last element access");
const last = (arr) => arr.at?.(-1) ?? arr[arr.length - 1];
console.log("last([1,2,3]):", last([1, 2, 3]));

console.log("\nPattern 4: Array equality check");
const arraysEqual = (a, b) => 
    Array.isArray(a) && Array.isArray(b) && 
    a.length === b.length && 
    a.every((val, i) => val === b[i]);

console.log("arraysEqual([1,2,3], [1,2,3]):", arraysEqual([1, 2, 3], [1, 2, 3]));
console.log("arraysEqual([1,2,3], [1,2,4]):", arraysEqual([1, 2, 3], [1, 2, 4]));

