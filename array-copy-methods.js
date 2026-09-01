/**
 * Non-Mutating Array Copying & Modern Array Operations
 * 
 * Description:
 * This file demonstrates modern ECMAScript non-mutating array copying methods (ES2023):
 * - toSorted() - Sort array without mutating original
 * - toReversed() - Reverse array without mutating original
 * - toSpliced() - Splice array without mutating original
 * - with() - Replace element at index without mutating original
 * - at() - Relative indexing supporting negative numbers (ES2022)
 * - fill() - Fill elements with static value
 * - copyWithin() - Copy array sequence within the array
 * - keys(), values(), entries() - Array iterator methods
 * 
 * Time Complexity: O(n) for copy/reverse/splice, O(n log n) for toSorted
 * Space Complexity: O(n) as new arrays are allocated for non-mutating variants
 */

// ========================================
// 1. ARRAY.PROTOTYPE.TOSORTED() (ES2023)
// ========================================

console.log("=== Array.prototype.toSorted() Examples ===\n");

// Example 1: Basic non-mutating sort
console.log("Example 1: Non-mutating sort vs traditional sort");
const originalNumbers = [5, 2, 8, 1, 9, 3];
const sortedCopy = originalNumbers.toSorted((a, b) => a - b);

console.log("Original array (unchanged):", originalNumbers); // [5, 2, 8, 1, 9, 3]
console.log("Sorted copy:", sortedCopy);                    // [1, 2, 3, 5, 8, 9]
console.log();

// Example 2: Sorting objects immutably
console.log("Example 2: Sorting objects immutably");
const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];

const sortedByAge = users.toSorted((a, b) => a.age - b.age);
console.log("Original users array unchanged:", users[0].name === "Alice");
console.log("Sorted users by age:", sortedByAge.map(u => `${u.name}: ${u.age}`));
console.log();

// Polyfill / Custom Implementation for toSorted
if (!Array.prototype.toSorted) {
    Array.prototype.toSorted = function(compareFn) {
        return [...this].sort(compareFn);
    };
}

// ========================================
// 2. ARRAY.PROTOTYPE.TOREVERSED() (ES2023)
// ========================================

console.log("=== Array.prototype.toReversed() Examples ===\n");

// Example 3: Non-mutating reverse
console.log("Example 3: Non-mutating reverse");
const letters = ["a", "b", "c", "d", "e"];
const reversedLetters = letters.toReversed();

console.log("Original array (unchanged):", letters);         // ['a', 'b', 'c', 'd', 'e']
console.log("Reversed copy:", reversedLetters);             // ['e', 'd', 'c', 'b', 'a']
console.log();

// Polyfill / Custom Implementation for toReversed
if (!Array.prototype.toReversed) {
    Array.prototype.toReversed = function() {
        return [...this].reverse();
    };
}

// ========================================
// 3. ARRAY.PROTOTYPE.TOSPLICED() (ES2023)
// ========================================

console.log("=== Array.prototype.toSpliced() Examples ===\n");

// Example 4: Non-mutating element removal and insertion
console.log("Example 4: Non-mutating toSpliced()");
const months = ["Jan", "Mar", "Apr", "May"];

// Insert "Feb" at index 1 without deleting elements
const monthsWithFeb = months.toSpliced(1, 0, "Feb");
console.log("Original months:", months);                   // ['Jan', 'Mar', 'Apr', 'May']
console.log("Spliced copy (with Feb):", monthsWithFeb);   // ['Jan', 'Feb', 'Mar', 'Apr', 'May']

// Remove 2 elements starting from index 2
const monthsShortened = monthsWithFeb.toSpliced(2, 2);
console.log("Spliced copy (removed Mar, Apr):", monthsShortened); // ['Jan', 'Feb', 'May']
console.log();

// Polyfill / Custom Implementation for toSpliced
if (!Array.prototype.toSpliced) {
    Array.prototype.toSpliced = function(start, deleteCount, ...items) {
        const copy = [...this];
        copy.splice(start, deleteCount, ...items);
        return copy;
    };
}

// ========================================
// 4. ARRAY.PROTOTYPE.WITH() (ES2023)
// ========================================

console.log("=== Array.prototype.with() Examples ===\n");

// Example 5: Replacing an element by index immutably
console.log("Example 5: Immutable element replacement");
const scores = [10, 20, 30, 40, 50];
const updatedScores = scores.with(2, 99); // Replace element at index 2 with 99

console.log("Original scores:", scores);                 // [10, 20, 30, 40, 50]
console.log("Updated scores (with 99 at index 2):", updatedScores); // [10, 20, 99, 40, 50]

// Negative index relative placement
const updatedLast = scores.with(-1, 500);
console.log("Updated with negative index (-1):", updatedLast); // [10, 20, 30, 40, 500]
console.log();

// Custom Implementation for with()
function customWith(array, index, value) {
    const copy = [...array];
    const actualIndex = index < 0 ? copy.length + index : index;
    if (actualIndex < 0 || actualIndex >= copy.length) {
        throw new RangeError("Invalid index");
    }
    copy[actualIndex] = value;
    return copy;
}
console.log("Custom with implementation check:", customWith([1, 2, 3], -1, 100)); // [1, 2, 100]
console.log();

// ========================================
// 5. ARRAY.PROTOTYPE.AT() (ES2022)
// ========================================

console.log("=== Array.prototype.at() Examples ===\n");

// Example 6: Positive and negative indexing
console.log("Example 6: Relative indexing with at()");
const items = ["first", "second", "third", "fourth", "last"];

console.log("items.at(0):", items.at(0));   // "first"
console.log("items.at(2):", items.at(2));   // "third"
console.log("items.at(-1):", items.at(-1)); // "last"
console.log("items.at(-2):", items.at(-2)); // "fourth"
console.log("items.at(10):", items.at(10)); // undefined
console.log();

// ========================================
// 6. ARRAY.PROTOTYPE.FILL() & COPYWITHIN()
// ========================================

console.log("=== Array.prototype.fill() & copyWithin() Examples ===\n");

// Example 7: Array.prototype.fill()
console.log("Example 7: Array fill()");
const filledArr = new Array(5).fill(0);
console.log("Filled with 0:", filledArr);

const partialFill = [1, 2, 3, 4, 5, 6].fill(9, 2, 5); // fill with 9 from index 2 to index 5 (exclusive)
console.log("Partial fill:", partialFill); // [1, 2, 9, 9, 9, 6]
console.log();

// Example 8: Array.prototype.copyWithin()
console.log("Example 8: Array copyWithin()");
const buffer = [10, 20, 30, 40, 50, 60];
// Copy elements from index 3 to 5 (40, 50) into starting index 0
buffer.copyWithin(0, 3, 5);
console.log("After copyWithin(0, 3, 5):", buffer); // [40, 50, 30, 40, 50, 60]
console.log();

// ========================================
// 7. ITERATOR METHODS: KEYS(), VALUES(), ENTRIES()
// ========================================

console.log("=== Array Iterators: keys(), values(), entries() ===\n");

// Example 9: Iterating array keys, values, entries
const sample = ["Apple", "Banana", "Cherry"];

console.log("Keys iterator:");
for (const key of sample.keys()) {
    console.log("  Index:", key);
}

console.log("\nValues iterator:");
for (const val of sample.values()) {
    console.log("  Value:", val);
}

console.log("\nEntries iterator:");
for (const [index, value] of sample.entries()) {
    console.log(`  [${index}]: ${value}`);
}
console.log();

// ========================================
// PRACTICAL USE CASES & STATE MANAGEMENT
// ========================================

console.log("=== Practical Use Case: Redux / State Management Pattern ===\n");

// Redux-like immutable reducer state updates
const initialState = {
    todos: [
        { id: 1, text: "Buy milk", completed: false },
        { id: 2, text: "Walk dog", completed: true },
        { id: 3, text: "Code JS", completed: false }
    ]
};

function todoReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_TODO": {
            const index = state.todos.findIndex(t => t.id === action.id);
            if (index === -1) return state;
            const updatedTodo = { ...state.todos[index], completed: !state.todos[index].completed };
            return {
                ...state,
                todos: state.todos.with(index, updatedTodo)
            };
        }
        case "DELETE_TODO": {
            const index = state.todos.findIndex(t => t.id === action.id);
            if (index === -1) return state;
            return {
                ...state,
                todos: state.todos.toSpliced(index, 1)
            };
        }
        case "SORT_TODOS": {
            return {
                ...state,
                todos: state.todos.toSorted((a, b) => a.text.localeCompare(b.text))
            };
        }
        default:
            return state;
    }
}

let state = initialState;
console.log("Initial state todos count:", state.todos.length);

state = todoReducer(state, { type: "TOGGLE_TODO", id: 1 });
console.log("After toggle todo 1 completed status:", state.todos[0].completed);

state = todoReducer(state, { type: "SORT_TODOS" });
console.log("After sorting todos by text:", state.todos.map(t => t.text));

state = todoReducer(state, { type: "DELETE_TODO", id: 2 });
console.log("After deleting todo 2, remaining count:", state.todos.length);
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use toSorted(), toReversed(), toSpliced(), and with() for immutable state updates.");
console.log("2. Use at(-1) instead of arr[arr.length - 1] for clean negative indexing.");
console.log("3. Remember that fill() with objects places references to the SAME object instance across all elements.");
console.log("4. Use entries() with for...of loops when you need both index and value clean syntax.");
