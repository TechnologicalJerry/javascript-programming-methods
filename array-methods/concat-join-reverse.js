/**
 * Array Methods: concat(), join(), reverse()
 * 
 * Description:
 * - concat(): Merges two or more arrays into a new array
 * - join(): Joins all elements into a string with a separator
 * - reverse(): Reverses the order of elements in place
 * 
 * Syntax:
 * - array.concat(value1, value2, ..., valueN)
 * - array.join(separator)
 * - array.reverse()
 * 
 * Returns:
 * - concat(): New array with merged elements
 * - join(): String with joined elements
 * - reverse(): The reversed array (same array, reversed in place)
 * 
 * Key Points:
 * - concat() does NOT mutate original arrays
 * - join() returns a string, not an array
 * - reverse() DOES mutate the original array
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n) for concat, O(n) for join, O(1) for reverse
 */

// ========================================
// ARRAY.PROTOTYPE.CONCAT() EXAMPLES
// ========================================

console.log("=== Array.concat() Examples ===\n");

// Example 1: Basic concat() usage
console.log("Example 1: Basic concat()");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);

console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Combined:", combined);
console.log("Original arrays unchanged:", arr1, arr2);
console.log();

// Example 2: Concatenating multiple arrays
console.log("Example 2: Multiple arrays");

const fruits1 = ["apple", "banana"];
const fruits2 = ["cherry", "date"];
const fruits3 = ["elderberry", "fig"];

const allFruits = fruits1.concat(fruits2, fruits3);
console.log("All fruits:", allFruits);

// Alternative with spread operator (ES6)
const allFruitsSpread = [...fruits1, ...fruits2, ...fruits3];
console.log("With spread operator:", allFruitsSpread);
console.log();

// Example 3: Concatenating values and arrays
console.log("Example 3: Mixed values and arrays");

const numbers = [1, 2];
const mixed = numbers.concat(3, 4, [5, 6], 7, [8, 9]);

console.log("Numbers:", numbers);
console.log("Mixed concat:", mixed);
console.log("Note: Nested arrays are not flattened");
console.log();

// Example 4: Concatenating nested arrays
console.log("Example 4: Nested arrays");

const nested1 = [[1, 2], [3, 4]];
const nested2 = [[5, 6]];
const concatNested = nested1.concat(nested2);

console.log("Nested 1:", nested1);
console.log("Nested 2:", nested2);
console.log("Concatenated:", concatNested);
console.log("Only flattens one level");
console.log();

// Example 5: Shallow copy with concat
console.log("Example 5: Using concat() for shallow copy");

const original = [1, 2, 3];
const copy = original.concat();

original.push(4);
console.log("Original (modified):", original);
console.log("Copy (unchanged):", copy);
console.log();

// ========================================
// ARRAY.PROTOTYPE.JOIN() EXAMPLES
// ========================================

console.log("=== Array.join() Examples ===\n");

// Example 6: Basic join() usage
console.log("Example 6: Basic join()");

const words = ["Hello", "World", "JavaScript"];
console.log("Array:", words);

const sentence = words.join(" ");
console.log("join(' '):", sentence);

const hyphenated = words.join("-");
console.log("join('-'):", hyphenated);

const noSeparator = words.join("");
console.log("join(''):", noSeparator);

const defaultJoin = words.join();
console.log("join() (default comma):", defaultJoin);
console.log();

// Example 7: Joining numbers
console.log("Example 7: Joining numbers");

const digits = [1, 2, 3, 4, 5];
console.log("Array:", digits);

const phoneNumber = digits.join("");
console.log("As phone digits:", phoneNumber);

const csvNumbers = digits.join(", ");
console.log("As CSV:", csvNumbers);

const mathExpression = digits.join(" + ");
console.log("As math expression:", mathExpression);
console.log();

// Example 8: Handling empty elements
console.log("Example 8: Empty elements and special values");

const withEmpty = [1, , 3, null, undefined, 5];
console.log("Array:", withEmpty);
console.log("Joined:", withEmpty.join("-"));
console.log("Note: empty, null, and undefined become empty strings");
console.log();

// Example 9: Creating paths and URLs
console.log("Example 9: Creating paths");

const pathSegments = ["home", "user", "documents", "file.txt"];
const filePath = pathSegments.join("/");
console.log("File path:", filePath);

const urlParts = ["https:", "", "example.com", "api", "users"];
const url = urlParts.join("/");
console.log("URL:", url);
console.log();

// ========================================
// ARRAY.PROTOTYPE.REVERSE() EXAMPLES
// ========================================

console.log("=== Array.reverse() Examples ===\n");

// Example 10: Basic reverse() usage
console.log("Example 10: Basic reverse()");

const numbers1 = [1, 2, 3, 4, 5];
console.log("Before reverse:", numbers1);

const reversed = numbers1.reverse();
console.log("After reverse:", numbers1);
console.log("Returned value:", reversed);
console.log("Same array:", numbers1 === reversed);
console.log("⚠️  WARNING: reverse() mutates the original array!");
console.log();

// Example 11: Reversing without mutation
console.log("Example 11: Non-mutating reverse");

const original2 = [1, 2, 3, 4, 5];
const reversedCopy1 = [...original2].reverse();
const reversedCopy2 = original2.slice().reverse();
const reversedCopy3 = original2.toReversed?.() || [...original2].reverse(); // ES2023

console.log("Original:", original2);
console.log("Reversed copy (spread):", reversedCopy1);
console.log("Reversed copy (slice):", reversedCopy2);
console.log("Original unchanged:", original2);
console.log();

// Example 12: Reversing strings
console.log("Example 12: Reversing strings");

function reverseString(str) {
    return str.split("").reverse().join("");
}

const text = "JavaScript";
const reversedText = reverseString(text);

console.log("Original string:", text);
console.log("Reversed string:", reversedText);
console.log();

// Example 13: Palindrome checker
console.log("Example 13: Palindrome checker");

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}

const testWords = ["racecar", "hello", "A man a plan a canal Panama", "JavaScript"];
testWords.forEach(word => {
    console.log(`"${word}" is palindrome:`, isPalindrome(word));
});
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Building CSV data
console.log("Use Case 1: Building CSV data");

const headers = ["Name", "Age", "City"];
const row1 = ["John", 30, "New York"];
const row2 = ["Jane", 25, "London"];
const row3 = ["Bob", 35, "Paris"];

const csv = [headers, row1, row2, row3]
    .map(row => row.join(","))
    .join("\n");

console.log("CSV output:");
console.log(csv);
console.log();

// Use Case 2: Breadcrumb navigation
console.log("Use Case 2: Breadcrumb navigation");

const breadcrumbs = ["Home", "Products", "Electronics", "Laptops"];
const breadcrumbPath = breadcrumbs.join(" > ");
const breadcrumbHTML = breadcrumbs
    .map((crumb, index) => `<a href="#">${crumb}</a>`)
    .join(' <span>/</span> ');

console.log("Breadcrumb path:", breadcrumbPath);
console.log("Breadcrumb HTML:", breadcrumbHTML);
console.log();

// Use Case 3: Merging data from multiple sources
console.log("Use Case 3: Merging data sources");

const localUsers = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
const apiUsers = [{ id: 3, name: "Charlie" }, { id: 4, name: "David" }];
const cachedUsers = [{ id: 5, name: "Eve" }];

const allUsers = [].concat(localUsers, apiUsers, cachedUsers);
console.log("Total users:", allUsers.length);
console.log("All users:", allUsers);
console.log();

// Use Case 4: Reversing processing order
console.log("Use Case 4: Stack-like processing");

const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
console.log("Tasks in order:", tasks);

const reversedTasks = [...tasks].reverse();
console.log("Process in reverse (LIFO):", reversedTasks);

// Process tasks
reversedTasks.forEach((task, index) => {
    console.log(`  Processing ${index + 1}: ${task}`);
});
console.log();

// ========================================
// COMBINING METHODS
// ========================================

console.log("=== Combining concat(), join(), reverse() ===\n");

// Example 14: Combining all three methods
console.log("Example 14: Method combination");

const part1 = ["Hello"];
const part2 = ["Beautiful"];
const part3 = ["World"];

// Concat all parts, reverse, then join
const combined2 = part1.concat(part2, part3);
console.log("Combined:", combined2);

const reversed2 = [...combined2].reverse();
console.log("Reversed:", reversed2);

const sentence2 = reversed2.join(" ");
console.log("Sentence:", sentence2);

// All in one line
const oneLiner = part1.concat(part2, part3).slice().reverse().join(" ");
console.log("One liner:", oneLiner);
console.log();

// Example 15: Building and reversing lists
console.log("Example 15: List manipulation");

const months = ["Jan", "Feb", "Mar"];
const moreMonths = ["Apr", "May", "Jun"];
const evenMoreMonths = ["Jul", "Aug"];

const allMonths = [].concat(months, moreMonths, evenMoreMonths);
console.log("All months:", allMonths.join(", "));

const fiscalYear = [...allMonths].reverse();
console.log("Fiscal year (reversed):", fiscalYear.join(", "));
console.log();

// ========================================
// CUSTOM IMPLEMENTATIONS
// ========================================

// Custom concat implementation
Array.prototype.customConcat = function(...items) {
    const result = [...this];
    
    for (const item of items) {
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    }
    
    return result;
};

// Custom join implementation
Array.prototype.customJoin = function(separator = ",") {
    if (this.length === 0) return "";
    
    let result = "";
    for (let i = 0; i < this.length; i++) {
        if (this[i] == null) {
            result += "";
        } else {
            result += String(this[i]);
        }
        
        if (i < this.length - 1) {
            result += separator;
        }
    }
    
    return result;
};

// Custom reverse implementation
Array.prototype.customReverse = function() {
    let left = 0;
    let right = this.length - 1;
    
    while (left < right) {
        [this[left], this[right]] = [this[right], this[left]];
        left++;
        right--;
    }
    
    return this;
};

// Test custom implementations
console.log("Custom implementation tests:");
const test1 = [1, 2].customConcat([3, 4], 5);
console.log("customConcat:", test1);

const test2 = ["a", "b", "c"].customJoin("-");
console.log("customJoin:", test2);

const test3 = [1, 2, 3, 4, 5];
test3.customReverse();
console.log("customReverse:", test3);
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Considerations ===\n");

const perfArray1 = Array.from({ length: 10000 }, (_, i) => i);
const perfArray2 = Array.from({ length: 10000 }, (_, i) => i + 10000);

// concat vs spread
console.time("concat() performance");
const concatResult = perfArray1.concat(perfArray2);
console.timeEnd("concat() performance");

console.time("spread operator performance");
const spreadResult = [...perfArray1, ...perfArray2];
console.timeEnd("spread operator performance");

console.log("Results equal:", JSON.stringify(concatResult.slice(0, 5)) === JSON.stringify(spreadResult.slice(0, 5)));
console.log();

// join performance
console.time("join() performance");
const joinResult = perfArray1.join(",");
console.timeEnd("join() performance");

// reverse performance
console.time("reverse() performance");
[...perfArray1].reverse();
console.timeEnd("reverse() performance");
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. concat() does NOT mutate - safe for immutable operations");
console.log("2. Use spread operator [...a, ...b] as modern alternative to concat()");
console.log("3. join() converts all elements to strings");
console.log("4. reverse() MUTATES - use [...arr].reverse() to avoid mutation");
console.log("5. join('') is useful for array-to-string conversion");
console.log("6. concat() only flattens one level of nested arrays");
console.log("7. reverse() is in-place - O(1) space, modifies original");
console.log("8. Use toReversed() (ES2023) for non-mutating reverse");
console.log("9. join() treats null and undefined as empty strings");
console.log("10. concat() can accept both arrays and individual values");

console.log("\n=== Common Patterns ===");

// Pattern 1: Clone and reverse
const cloneAndReverse = (arr) => [...arr].reverse();

// Pattern 2: Merge and deduplicate
const mergeUnique = (...arrays) => [...new Set([].concat(...arrays))];

// Pattern 3: Create comma-separated list
const toCommaSeparated = (arr) => arr.join(", ");

// Pattern 4: Build path
const buildPath = (...segments) => segments.join("/");

// Pattern 5: Safe reverse (non-mutating)
const safeReverse = (arr) => arr.slice().reverse();

console.log("\nPattern examples:");
console.log("Clone and reverse [1,2,3]:", cloneAndReverse([1, 2, 3]));
console.log("Merge unique [[1,2], [2,3]]:", mergeUnique([1, 2], [2, 3]));
console.log("Comma separated ['a','b','c']:", toCommaSeparated(['a', 'b', 'c']));
console.log("Build path ['home','user','docs']:", buildPath('home', 'user', 'docs'));

