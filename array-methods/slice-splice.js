/**
 * Array.prototype.slice() and Array.prototype.splice() Methods
 * 
 * Description:
 * - slice(): Returns a shallow copy of a portion of an array (non-mutating)
 * - splice(): Changes the contents of an array by removing, replacing, or adding elements (mutating)
 * 
 * Syntax:
 * - array.slice(start, end)
 * - array.splice(start, deleteCount, item1, item2, ...)
 * 
 * Returns:
 * - slice(): New array containing extracted elements
 * - splice(): Array containing deleted elements
 * 
 * Key Difference:
 * - slice() does NOT modify the original array
 * - splice() DOES modify the original array
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is the number of elements returned
 */

// ========================================
// ARRAY.PROTOTYPE.SLICE() EXAMPLES
// ========================================

console.log("=== Array.slice() Examples ===\n");

// Example 1: Basic slice() usage
console.log("Example 1: Basic slice()");

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Original array:", fruits);

const sliced1 = fruits.slice(1, 3);
console.log("slice(1, 3):", sliced1); // ["banana", "cherry"]

const sliced2 = fruits.slice(2);
console.log("slice(2):", sliced2); // ["cherry", "date", "elderberry"]

const sliced3 = fruits.slice();
console.log("slice() (full copy):", sliced3);

console.log("Original unchanged:", fruits);
console.log();

// Example 2: Negative indices
console.log("Example 2: Negative indices");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("Original:", numbers);

console.log("slice(-3):", numbers.slice(-3)); // Last 3 elements
console.log("slice(-5, -2):", numbers.slice(-5, -2)); // From 5th from end to 2nd from end
console.log("slice(2, -1):", numbers.slice(2, -1)); // From index 2 to second to last
console.log();

// Example 3: Creating array copies
console.log("Example 3: Creating shallow copies");

const original = [1, 2, 3, 4, 5];
const copy1 = original.slice();
const copy2 = [...original]; // Spread operator (ES6 alternative)
const copy3 = Array.from(original); // Array.from alternative

console.log("Original:", original);
console.log("slice() copy:", copy1);
console.log("Spread copy:", copy2);
console.log("Array.from copy:", copy3);

// Modify original
original.push(6);
console.log("\nAfter original.push(6):");
console.log("Original:", original);
console.log("Copy:", copy1);
console.log();

// Example 4: Shallow copy warning
console.log("Example 4: Shallow copy (objects)");

const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
const objectsCopy = objects.slice();

console.log("Original objects:", objects);
console.log("Copied objects:", objectsCopy);

// Modify object in copy
objectsCopy[0].id = 999;

console.log("\nAfter modifying objectsCopy[0].id:");
console.log("Original:", objects); // Also changed!
console.log("Copy:", objectsCopy);
console.log("Note: slice() creates shallow copy - nested objects are referenced!");
console.log();

// ========================================
// ARRAY.PROTOTYPE.SPLICE() EXAMPLES
// ========================================

console.log("=== Array.splice() Examples ===\n");

// Example 5: Removing elements
console.log("Example 5: Removing elements with splice()");

const colors = ["red", "green", "blue", "yellow", "purple"];
console.log("Original:", colors);

const removed1 = colors.splice(2, 2);
console.log("splice(2, 2) removed:", removed1); // ["blue", "yellow"]
console.log("Array after removal:", colors); // ["red", "green", "purple"]
console.log();

// Example 6: Adding elements
console.log("Example 6: Adding elements with splice()");

const animals = ["cat", "dog", "rabbit"];
console.log("Original:", animals);

animals.splice(1, 0, "hamster", "bird");
console.log("After splice(1, 0, 'hamster', 'bird'):", animals);
console.log("Note: deleteCount = 0 means insert only");
console.log();

// Example 7: Replacing elements
console.log("Example 7: Replacing elements with splice()");

const languages = ["Java", "C++", "Python", "Ruby"];
console.log("Original:", languages);

const replaced = languages.splice(1, 2, "JavaScript", "TypeScript", "Go");
console.log("Replaced:", replaced); // ["C++", "Python"]
console.log("After replacement:", languages);
console.log();

// Example 8: Negative start index
console.log("Example 8: Negative start index");

const letters = ["a", "b", "c", "d", "e"];
console.log("Original:", letters);

letters.splice(-2, 1, "X");
console.log("After splice(-2, 1, 'X'):", letters);
console.log("Negative index counts from end");
console.log();

// ========================================
// COMPARISON: SLICE VS SPLICE
// ========================================

console.log("=== slice() vs splice() Comparison ===\n");

// slice() - Non-mutating
const arr1 = [1, 2, 3, 4, 5];
console.log("slice() example:");
console.log("Before slice(1, 3):", arr1);
const sliceResult = arr1.slice(1, 3);
console.log("Returned:", sliceResult);
console.log("After slice:", arr1);
console.log("Original UNCHANGED ✓\n");

// splice() - Mutating
const arr2 = [1, 2, 3, 4, 5];
console.log("splice() example:");
console.log("Before splice(1, 2):", arr2);
const spliceResult = arr2.splice(1, 2);
console.log("Returned:", spliceResult);
console.log("After splice:", arr2);
console.log("Original CHANGED ✗\n");

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Pagination
console.log("Use Case 1: Pagination with slice()");

const allItems = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
const pageSize = 10;

function getPage(pageNumber) {
    const start = (pageNumber - 1) * pageSize;
    const end = start + pageSize;
    return allItems.slice(start, end);
}

console.log("Page 1:", getPage(1));
console.log("Page 5:", getPage(5));
console.log();

// Use Case 2: Array manipulation
console.log("Use Case 2: Dynamic array operations");

const todoList = ["Task 1", "Task 2", "Task 3", "Task 4"];
console.log("Initial todo list:", todoList);

// Add task at beginning
todoList.splice(0, 0, "Urgent Task");
console.log("After adding urgent task:", todoList);

// Remove completed task
todoList.splice(2, 1);
console.log("After removing task:", todoList);

// Replace task
todoList.splice(1, 1, "Updated Task");
console.log("After updating task:", todoList);
console.log();

// Use Case 3: Removing duplicates at specific positions
console.log("Use Case 3: Removing specific duplicates");

function removeDuplicatesAt(arr, index) {
    const value = arr[index];
    const indicesToRemove = [];
    
    arr.forEach((item, i) => {
        if (i !== index && item === value) {
            indicesToRemove.push(i);
        }
    });
    
    // Remove from end to start to maintain indices
    indicesToRemove.reverse().forEach(i => arr.splice(i, 1));
    
    return arr;
}

const withDupes = [1, 2, 3, 2, 4, 2, 5];
console.log("Original:", [...withDupes]);
removeDuplicatesAt(withDupes, 1);
console.log("After removing duplicates of value at index 1:", withDupes);
console.log();

// Use Case 4: Moving elements
console.log("Use Case 4: Moving array elements");

function moveElement(arr, from, to) {
    const element = arr.splice(from, 1)[0];
    arr.splice(to, 0, element);
    return arr;
}

const playlist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
console.log("Original playlist:", [...playlist]);
moveElement(playlist, 0, 3);
console.log("After moving first song to position 3:", playlist);
console.log();

// ========================================
// ADVANCED PATTERNS
// ========================================

// Example 9: Cloning portion of array
console.log("Example 9: Getting specific ranges");

const data = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function getRange(arr, start, end) {
    return arr.slice(start, end + 1); // +1 because slice end is exclusive
}

function getFirstN(arr, n) {
    return arr.slice(0, n);
}

function getLastN(arr, n) {
    return arr.slice(-n);
}

console.log("Data:", data);
console.log("Range [2, 5]:", getRange(data, 2, 5));
console.log("First 3:", getFirstN(data, 3));
console.log("Last 3:", getLastN(data, 3));
console.log();

// Example 10: Batch operations with splice
console.log("Example 10: Batch operations");

function insertMultiple(arr, index, ...items) {
    arr.splice(index, 0, ...items);
    return arr;
}

function removeRange(arr, start, end) {
    arr.splice(start, end - start + 1);
    return arr;
}

function replaceRange(arr, start, end, ...newItems) {
    const deleteCount = end - start + 1;
    arr.splice(start, deleteCount, ...newItems);
    return arr;
}

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Original:", [...testArr]);

insertMultiple([...testArr], 2, 'a', 'b', 'c');
console.log("After insertMultiple(2, 'a', 'b', 'c'):", insertMultiple([...testArr], 2, 'a', 'b', 'c'));

console.log("After removeRange(2, 5):", removeRange([...testArr], 2, 5));
console.log("After replaceRange(2, 4, 'X', 'Y'):", replaceRange([...testArr], 2, 4, 'X', 'Y'));
console.log();

// ========================================
// EDGE CASES
// ========================================

console.log("=== Edge Cases ===\n");

// Example 11: Out of bounds indices
console.log("Example 11: Out of bounds indices");

const edgeArray = [1, 2, 3, 4, 5];

console.log("Original:", edgeArray);
console.log("slice(10, 20):", edgeArray.slice(10, 20)); // []
console.log("slice(-10, 2):", edgeArray.slice(-10, 2)); // [1, 2]
console.log("slice(2, 1):", edgeArray.slice(2, 1)); // [] (start > end)

const spliceTest = [...edgeArray];
console.log("\nsplice(10, 2):", spliceTest.splice(10, 2)); // [] (no elements to remove)
console.log("Array after:", spliceTest);
console.log();

// Example 12: Empty operations
console.log("Example 12: Empty operations");

const emptyTest = [1, 2, 3];
console.log("Original:", emptyTest);

console.log("slice(0, 0):", emptyTest.slice(0, 0)); // []
console.log("splice(1, 0):", emptyTest.splice(1, 0)); // [] (no elements removed)
console.log("Array after splice:", emptyTest); // Unchanged
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Considerations ===\n");

const perfArray = Array.from({ length: 100000 }, (_, i) => i);

// slice performance
console.time("slice (small range)");
perfArray.slice(0, 100);
console.timeEnd("slice (small range)");

console.time("slice (large range)");
perfArray.slice(0, 50000);
console.timeEnd("slice (large range)");

// splice performance
console.time("splice (beginning)");
const test1 = [...perfArray];
test1.splice(0, 100);
console.timeEnd("splice (beginning)");

console.time("splice (end)");
const test2 = [...perfArray];
test2.splice(test2.length - 100, 100);
console.timeEnd("splice (end)");

console.log("\nNote: splice at beginning is slower (shifts all elements)");
console.log();

// ========================================
// CUSTOM IMPLEMENTATIONS
// ========================================

// Custom slice implementation
Array.prototype.customSlice = function(start = 0, end = this.length) {
    const result = [];
    const len = this.length;
    
    // Handle negative start
    let startIdx = start < 0 ? Math.max(len + start, 0) : Math.min(start, len);
    // Handle negative end
    let endIdx = end < 0 ? Math.max(len + end, 0) : Math.min(end, len);
    
    for (let i = startIdx; i < endIdx; i++) {
        result.push(this[i]);
    }
    
    return result;
};

// Test custom implementation
console.log("Custom slice implementation test:");
const customTest = [1, 2, 3, 4, 5];
console.log("Original:", customTest);
console.log("customSlice(1, 3):", customTest.customSlice(1, 3));
console.log("customSlice(-3):", customTest.customSlice(-3));
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use slice() when you need a copy and don't want to modify original");
console.log("2. Use splice() when you need to modify the array in place");
console.log("3. Remember: slice(start, end) - end is EXCLUSIVE");
console.log("4. Remember: splice(start, deleteCount, ...items)");
console.log("5. slice() with no arguments creates a shallow copy");
console.log("6. Use spread operator [...arr] as modern alternative to slice()");
console.log("7. splice() returns removed elements, not the modified array");
console.log("8. Negative indices count from the end of array");
console.log("9. splice() at beginning is slower than at end");
console.log("10. For deep copies, use structuredClone() or JSON.parse(JSON.stringify())");

console.log("\n=== Common Patterns ===");

// Pattern 1: Clone array
const clone = (arr) => arr.slice();

// Pattern 2: Remove first element
const removeFirst = (arr) => arr.splice(0, 1);

// Pattern 3: Remove last element
const removeLast = (arr) => arr.splice(-1, 1);

// Pattern 4: Get subset
const getSubset = (arr, start, count) => arr.slice(start, start + count);

// Pattern 5: Insert at position
const insertAt = (arr, index, ...items) => {
    arr.splice(index, 0, ...items);
    return arr;
};

// Pattern 6: Remove by value (first occurrence)
const removeByValue = (arr, value) => {
    const index = arr.indexOf(value);
    if (index > -1) arr.splice(index, 1);
    return arr;
};

// Pattern 7: Clear array (in place)
const clearArray = (arr) => arr.splice(0, arr.length);

console.log("\nPattern examples:");
const patternTest = [1, 2, 3, 4, 5];
console.log("Get subset (index 1, count 3):", getSubset(patternTest, 1, 3));
console.log("Remove by value (3):", removeByValue([...patternTest], 3));

