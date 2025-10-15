/**
 * Array Search Methods: includes(), indexOf(), lastIndexOf()
 * 
 * Description:
 * - includes(): Determines whether an array includes a certain value (ES2016)
 * - indexOf(): Returns the first index at which a given element can be found
 * - lastIndexOf(): Returns the last index at which a given element can be found
 * 
 * Syntax:
 * - array.includes(searchElement, fromIndex)
 * - array.indexOf(searchElement, fromIndex)
 * - array.lastIndexOf(searchElement, fromIndex)
 * 
 * Returns:
 * - includes(): boolean (true/false)
 * - indexOf(): number (index or -1 if not found)
 * - lastIndexOf(): number (last index or -1 if not found)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// ========================================
// ARRAY.PROTOTYPE.INCLUDES() EXAMPLES
// ========================================

console.log("=== Array.includes() Examples ===\n");

// Example 1: Basic includes() usage
console.log("Example 1: Basic includes()");

const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

console.log("includes(3):", numbers.includes(3)); // true
console.log("includes(6):", numbers.includes(6)); // false
console.log("includes(1):", numbers.includes(1)); // true
console.log();

// Example 2: includes() with fromIndex
console.log("Example 2: includes() with fromIndex");

const fruits = ["apple", "banana", "cherry", "banana", "date"];
console.log("Fruits:", fruits);

console.log("includes('banana'):", fruits.includes("banana")); // true
console.log("includes('banana', 2):", fruits.includes("banana", 2)); // true (finds second banana)
console.log("includes('banana', 4):", fruits.includes("banana", 4)); // false
console.log("includes('apple', 1):", fruits.includes("apple", 1)); // false
console.log();

// Example 3: includes() with negative index
console.log("Example 3: includes() with negative index");

console.log("includes('date', -2):", fruits.includes("date", -2)); // true (searches last 2 elements)
console.log("includes('cherry', -1):", fruits.includes("cherry", -1)); // false
console.log();

// Example 4: includes() with NaN
console.log("Example 4: includes() handles NaN correctly");

const withNaN = [1, 2, NaN, 4];
console.log("Array:", withNaN);

console.log("includes(NaN):", withNaN.includes(NaN)); // true ✓
console.log("indexOf(NaN):", withNaN.indexOf(NaN)); // -1 (indexOf can't find NaN)
console.log("Note: includes() can find NaN, indexOf() cannot");
console.log();

// ========================================
// ARRAY.PROTOTYPE.INDEXOF() EXAMPLES
// ========================================

console.log("=== Array.indexOf() Examples ===\n");

// Example 5: Basic indexOf() usage
console.log("Example 5: Basic indexOf()");

const animals = ["cat", "dog", "rabbit", "dog", "fish"];
console.log("Animals:", animals);

console.log("indexOf('dog'):", animals.indexOf("dog")); // 1 (first occurrence)
console.log("indexOf('rabbit'):", animals.indexOf("rabbit")); // 2
console.log("indexOf('bird'):", animals.indexOf("bird")); // -1 (not found)
console.log();

// Example 6: indexOf() with fromIndex
console.log("Example 6: indexOf() with fromIndex");

console.log("indexOf('dog', 0):", animals.indexOf("dog", 0)); // 1
console.log("indexOf('dog', 2):", animals.indexOf("dog", 2)); // 3 (second occurrence)
console.log("indexOf('dog', 4):", animals.indexOf("dog", 4)); // -1
console.log();

// Example 7: indexOf() with negative index
console.log("Example 7: indexOf() with negative index");

const letters = ["a", "b", "c", "d", "e"];
console.log("Letters:", letters);

console.log("indexOf('d', -3):", letters.indexOf("d", -3)); // 3 (searches from index 2)
console.log("indexOf('b', -4):", letters.indexOf("b", -4)); // 1
console.log();

// ========================================
// ARRAY.PROTOTYPE.LASTINDEXOF() EXAMPLES
// ========================================

console.log("=== Array.lastIndexOf() Examples ===\n");

// Example 8: Basic lastIndexOf() usage
console.log("Example 8: Basic lastIndexOf()");

const repeatedNumbers = [1, 2, 3, 2, 1, 4, 2];
console.log("Array:", repeatedNumbers);

console.log("lastIndexOf(2):", repeatedNumbers.lastIndexOf(2)); // 6 (last occurrence)
console.log("lastIndexOf(1):", repeatedNumbers.lastIndexOf(1)); // 4
console.log("lastIndexOf(5):", repeatedNumbers.lastIndexOf(5)); // -1
console.log();

// Example 9: lastIndexOf() with fromIndex
console.log("Example 9: lastIndexOf() with fromIndex");

console.log("lastIndexOf(2, 5):", repeatedNumbers.lastIndexOf(2, 5)); // 3
console.log("lastIndexOf(2, 2):", repeatedNumbers.lastIndexOf(2, 2)); // 1
console.log("lastIndexOf(1, 3):", repeatedNumbers.lastIndexOf(1, 3)); // 0
console.log("Note: fromIndex searches backwards from that position");
console.log();

// ========================================
// COMPARISON OF METHODS
// ========================================

console.log("=== Comparison of Search Methods ===\n");

const testArray = [10, 20, 30, 20, 40, 20, 50];
console.log("Test array:", testArray);

console.log("\nSearching for 20:");
console.log("includes(20):", testArray.includes(20)); // true
console.log("indexOf(20):", testArray.indexOf(20)); // 1 (first occurrence)
console.log("lastIndexOf(20):", testArray.lastIndexOf(20)); // 5 (last occurrence)

console.log("\nSearching for 60:");
console.log("includes(60):", testArray.includes(60)); // false
console.log("indexOf(60):", testArray.indexOf(60)); // -1
console.log("lastIndexOf(60):", testArray.lastIndexOf(60)); // -1
console.log();

// ========================================
// STRICT EQUALITY (===)
// ========================================

console.log("=== Strict Equality Comparison ===\n");

// Example 10: Type matters
console.log("Example 10: Type-sensitive search");

const mixedTypes = [1, "1", 2, "2", 3];
console.log("Array:", mixedTypes);

console.log("includes(1):", mixedTypes.includes(1)); // true (number)
console.log("includes('1'):", mixedTypes.includes("1")); // true (string)
console.log("indexOf(1):", mixedTypes.indexOf(1)); // 0 (number at index 0)
console.log("indexOf('1'):", mixedTypes.indexOf("1")); // 1 (string at index 1)
console.log();

// Example 11: Object references
console.log("Example 11: Object reference comparison");

const obj1 = { id: 1 };
const obj2 = { id: 1 };
const objects = [obj1, { id: 2 }, { id: 3 }];

console.log("includes(obj1):", objects.includes(obj1)); // true (same reference)
console.log("includes(obj2):", objects.includes(obj2)); // false (different reference)
console.log("includes({id: 1}):", objects.includes({ id: 1 })); // false (new object)
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Checking user permissions
console.log("Use Case 1: Permission checking");

const userPermissions = ["read", "write", "execute"];
const requiredPermissions = ["read", "write", "delete"];

function hasPermission(permission) {
    return userPermissions.includes(permission);
}

function hasAllPermissions(required) {
    return required.every(perm => userPermissions.includes(perm));
}

console.log("Has 'read' permission:", hasPermission("read"));
console.log("Has 'delete' permission:", hasPermission("delete"));
console.log("Has all required permissions:", hasAllPermissions(requiredPermissions));
console.log();

// Use Case 2: Filtering unique values
console.log("Use Case 2: Finding duplicates");

const allNumbers = [1, 2, 3, 2, 4, 1, 5, 3];

function findDuplicates(array) {
    const duplicates = [];
    
    array.forEach((item, index) => {
        const firstIndex = array.indexOf(item);
        if (firstIndex !== index && !duplicates.includes(item)) {
            duplicates.push(item);
        }
    });
    
    return duplicates;
}

function findUniqueValues(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

console.log("Array:", allNumbers);
console.log("Duplicates:", findDuplicates(allNumbers));
console.log("Unique values:", findUniqueValues(allNumbers));
console.log();

// Use Case 3: Tag/Category filtering
console.log("Use Case 3: Tag filtering");

const articles = [
    { title: "Article 1", tags: ["javascript", "web", "tutorial"] },
    { title: "Article 2", tags: ["python", "data", "tutorial"] },
    { title: "Article 3", tags: ["javascript", "react", "web"] }
];

function filterByTag(tag) {
    return articles.filter(article => article.tags.includes(tag));
}

function filterByTags(tags) {
    return articles.filter(article => 
        tags.every(tag => article.tags.includes(tag))
    );
}

console.log("Articles with 'javascript' tag:");
console.log(filterByTag("javascript"));

console.log("\nArticles with both 'javascript' and 'web' tags:");
console.log(filterByTags(["javascript", "web"]));
console.log();

// Use Case 4: Form validation
console.log("Use Case 4: Allowed values validation");

const allowedCountries = ["US", "UK", "CA", "AU", "NZ"];
const allowedAgeRanges = ["18-25", "26-35", "36-45", "46-55", "56+"];

function validateFormData(data) {
    const errors = [];
    
    if (!allowedCountries.includes(data.country)) {
        errors.push(`Invalid country: ${data.country}`);
    }
    
    if (!allowedAgeRanges.includes(data.ageRange)) {
        errors.push(`Invalid age range: ${data.ageRange}`);
    }
    
    return {
        isValid: errors.length === 0,
        errors
    };
}

console.log("Validation test 1:", validateFormData({ country: "US", ageRange: "26-35" }));
console.log("Validation test 2:", validateFormData({ country: "FR", ageRange: "100+" }));
console.log();

// ========================================
// ADVANCED PATTERNS
// ========================================

// Example 12: Finding all occurrences
console.log("Example 12: Finding all occurrences");

function findAllIndexes(array, value) {
    const indexes = [];
    let index = array.indexOf(value);
    
    while (index !== -1) {
        indexes.push(index);
        index = array.indexOf(value, index + 1);
    }
    
    return indexes;
}

const values = [1, 2, 3, 2, 4, 2, 5];
console.log("Array:", values);
console.log("All indexes of 2:", findAllIndexes(values, 2));
console.log();

// Example 13: Case-insensitive search
console.log("Example 13: Case-insensitive includes");

function includesIgnoreCase(array, searchValue) {
    return array.some(item => 
        String(item).toLowerCase() === String(searchValue).toLowerCase()
    );
}

const tags = ["JavaScript", "Python", "JAVA", "ruby"];
console.log("Tags:", tags);
console.log("includesIgnoreCase('javascript'):", includesIgnoreCase(tags, "javascript"));
console.log("includesIgnoreCase('RUBY'):", includesIgnoreCase(tags, "RUBY"));
console.log();

// ========================================
// EDGE CASES
// ========================================

console.log("=== Edge Cases ===\n");

// Example 14: Empty arrays
console.log("Example 14: Empty arrays");

const empty = [];
console.log("Empty array includes(1):", empty.includes(1)); // false
console.log("Empty array indexOf(1):", empty.indexOf(1)); // -1
console.log();

// Example 15: Sparse arrays
console.log("Example 15: Sparse arrays");

const sparse = [1, , 3, , 5];
console.log("Sparse array:", sparse);
console.log("includes(undefined):", sparse.includes(undefined)); // true (holes are undefined)
console.log("indexOf(undefined):", sparse.indexOf(undefined)); // -1 (doesn't find holes)
console.log();

// Example 16: Special values
console.log("Example 16: Special values");

const special = [0, -0, null, undefined, false, ""];

console.log("includes(0):", special.includes(0)); // true
console.log("includes(-0):", special.includes(-0)); // true (0 === -0)
console.log("includes(null):", special.includes(null)); // true
console.log("includes(undefined):", special.includes(undefined)); // true
console.log("includes(false):", special.includes(false)); // true
console.log("includes(''):", special.includes("")); // true
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Considerations ===\n");

const largeArray = Array.from({ length: 100000 }, (_, i) => i);

// Search at beginning
console.time("indexOf (at start)");
largeArray.indexOf(5);
console.timeEnd("indexOf (at start)");

// Search at end
console.time("indexOf (at end)");
largeArray.indexOf(99995);
console.timeEnd("indexOf (at end)");

// Not found (worst case)
console.time("indexOf (not found)");
largeArray.indexOf(999999);
console.timeEnd("indexOf (not found)");

console.log("Note: For large arrays and repeated searches, consider using Set");

// Using Set for better performance
console.time("Set.has() performance");
const numberSet = new Set(largeArray);
numberSet.has(99995);
console.timeEnd("Set.has() performance");
console.log();

// ========================================
// CUSTOM IMPLEMENTATIONS
// ========================================

// Custom includes implementation
Array.prototype.customIncludes = function(searchElement, fromIndex = 0) {
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    
    if (len === 0) return false;
    
    let k = Math.max(fromIndex >= 0 ? fromIndex : len + fromIndex, 0);
    
    while (k < len) {
        const elementK = O[k];
        // SameValueZero comparison (can find NaN)
        if (searchElement === elementK || (Number.isNaN(searchElement) && Number.isNaN(elementK))) {
            return true;
        }
        k++;
    }
    
    return false;
};

// Test custom implementation
console.log("Custom implementation test:");
const testArr = [1, 2, NaN, 4];
console.log("Array:", testArr);
console.log("customIncludes(NaN):", testArr.customIncludes(NaN));
console.log("customIncludes(2, 2):", testArr.customIncludes(2, 2));
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use includes() for simple existence checks (cleaner, returns boolean)");
console.log("2. Use indexOf() when you need the position of an element");
console.log("3. Use lastIndexOf() to find the last occurrence");
console.log("4. includes() can find NaN, indexOf() cannot");
console.log("5. All three use strict equality (===) for comparison");
console.log("6. Remember: indexOf() returns -1 if not found, includes() returns false");
console.log("7. For large arrays with repeated searches, use Set instead");
console.log("8. Use find() for complex object searches");
console.log("9. Negative fromIndex counts from the end");
console.log("10. For case-insensitive search, convert to lowercase first");

console.log("\n=== Common Patterns ===");

// Pattern 1: Existence check (modern)
const hasElement = (arr, element) => arr.includes(element);

// Pattern 2: Multiple checks
const hasAny = (arr, values) => values.some(val => arr.includes(val));
const hasAll = (arr, values) => values.every(val => arr.includes(val));

// Pattern 3: Safe index check
const getElementByValue = (arr, value) => {
    const index = arr.indexOf(value);
    return index !== -1 ? arr[index] : null;
};

// Pattern 4: Toggle element (add/remove)
function toggleElement(arr, element) {
    const index = arr.indexOf(element);
    if (index === -1) {
        arr.push(element);
    } else {
        arr.splice(index, 1);
    }
    return arr;
}

console.log("\nToggle example:", toggleElement([1, 2, 3], 2)); // removes 2
console.log("Toggle example:", toggleElement([1, 3], 2)); // adds 2

