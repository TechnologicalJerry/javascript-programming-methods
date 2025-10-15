/**
 * Array.prototype.filter() Method
 * 
 * Description:
 * The filter() method creates a new array with all elements that pass the test 
 * implemented by the provided function.
 * 
 * Syntax: array.filter(callback(element, index, array), thisArg)
 * 
 * Parameters:
 * - callback: Function that tests each element
 *   - element: The current element being processed
 *   - index (optional): The index of the current element
 *   - array (optional): The array filter was called upon
 * - thisArg (optional): Value to use as 'this' when executing callback
 * 
 * Returns: A new array with elements that pass the test. If no elements pass, returns empty array.
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(k) where k is the number of elements that pass the test
 */

// ========================================
// BASIC EXAMPLES
// ========================================

console.log("=== Array.filter() Examples ===\n");

// Example 1: Filter numbers greater than 5
const numbers = [1, 6, 3, 8, 2, 9, 4, 7];
const greaterThanFive = numbers.filter(num => num > 5);

console.log("Example 1: Filter numbers greater than 5");
console.log("Input:", numbers);
console.log("Output:", greaterThanFive);
console.log();

// Example 2: Filter even numbers
const mixedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = mixedNumbers.filter(num => num % 2 === 0);
const oddNumbers = mixedNumbers.filter(num => num % 2 !== 0);

console.log("Example 2: Filter even and odd numbers");
console.log("Input:", mixedNumbers);
console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);
console.log();

// Example 3: Filter strings by length
const words = ["cat", "elephant", "dog", "butterfly", "ant", "hippopotamus"];
const longWords = words.filter(word => word.length > 5);
const shortWords = words.filter(word => word.length <= 3);

console.log("Example 3: Filter strings by length");
console.log("Input:", words);
console.log("Long words (>5 chars):", longWords);
console.log("Short words (≤3 chars):", shortWords);
console.log();

// ========================================
// FILTERING OBJECTS
// ========================================

// Example 4: Filter objects by property
const users = [
    { id: 1, name: "John", age: 25, active: true },
    { id: 2, name: "Jane", age: 30, active: false },
    { id: 3, name: "Bob", age: 35, active: true },
    { id: 4, name: "Alice", age: 28, active: false }
];

const activeUsers = users.filter(user => user.active);
const usersOver30 = users.filter(user => user.age > 30);
const youngActiveUsers = users.filter(user => user.age < 30 && user.active);

console.log("Example 4: Filter objects by properties");
console.log("All users:", users);
console.log("Active users:", activeUsers);
console.log("Users over 30:", usersOver30);
console.log("Young active users:", youngActiveUsers);
console.log();

// Example 5: Filter by multiple conditions
const products = [
    { name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { name: "Book", price: 20, category: "Education", inStock: false },
    { name: "Phone", price: 599, category: "Electronics", inStock: true },
    { name: "Desk", price: 299, category: "Furniture", inStock: true },
    { name: "Tablet", price: 399, category: "Electronics", inStock: false }
];

const availableElectronics = products.filter(product => 
    product.category === "Electronics" && product.inStock
);

const affordableItems = products.filter(product => 
    product.price < 500 && product.inStock
);

console.log("Example 5: Filter by multiple conditions");
console.log("All products:", products);
console.log("Available electronics:", availableElectronics);
console.log("Affordable in-stock items:", affordableItems);
console.log();

// ========================================
// ADVANCED FILTERING
// ========================================

// Example 6: Using index parameter
const items = ["apple", "banana", "cherry", "date", "elderberry"];
const evenIndexItems = items.filter((item, index) => index % 2 === 0);
const oddIndexItems = items.filter((item, index) => index % 2 !== 0);

console.log("Example 6: Filter by index");
console.log("Input:", items);
console.log("Even index items:", evenIndexItems);
console.log("Odd index items:", oddIndexItems);
console.log();

// Example 7: Filter unique values
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const uniqueNumbers = numbersWithDuplicates.filter((num, index, array) => 
    array.indexOf(num) === index
);

console.log("Example 7: Filter unique values");
console.log("With duplicates:", numbersWithDuplicates);
console.log("Unique values:", uniqueNumbers);
console.log();

// Example 8: Filter non-empty strings
const stringsWithEmpty = ["hello", "", "world", " ", "javascript", null, undefined, "programming"];
const nonEmptyStrings = stringsWithEmpty.filter(str => 
    str && typeof str === 'string' && str.trim().length > 0
);

console.log("Example 8: Filter non-empty strings");
console.log("Input:", stringsWithEmpty);
console.log("Non-empty strings:", nonEmptyStrings);
console.log();

// ========================================
// COMPLEX FILTERING SCENARIOS
// ========================================

// Example 9: Filter based on nested properties
const employees = [
    { 
        name: "John", 
        department: "Engineering", 
        skills: ["JavaScript", "Python", "React"],
        performance: { rating: 4.5, completed_projects: 12 }
    },
    { 
        name: "Jane", 
        department: "Marketing", 
        skills: ["SEO", "Content", "Analytics"],
        performance: { rating: 4.8, completed_projects: 8 }
    },
    { 
        name: "Bob", 
        department: "Engineering", 
        skills: ["Java", "Spring", "Docker"],
        performance: { rating: 4.2, completed_projects: 15 }
    }
];

const highPerformers = employees.filter(emp => emp.performance.rating >= 4.5);
const jsEngineers = employees.filter(emp => 
    emp.department === "Engineering" && emp.skills.includes("JavaScript")
);

console.log("Example 9: Filter based on nested properties");
console.log("High performers (rating ≥ 4.5):", highPerformers);
console.log("JavaScript engineers:", jsEngineers);
console.log();

// Example 10: Dynamic filtering
function createFilter(criteria) {
    return function(item) {
        return Object.keys(criteria).every(key => {
            if (typeof criteria[key] === 'function') {
                return criteria[key](item[key]);
            }
            return item[key] === criteria[key];
        });
    };
}

const inventory = [
    { name: "Widget A", price: 25, quantity: 100, category: "Tools" },
    { name: "Widget B", price: 45, quantity: 0, category: "Tools" },
    { name: "Gadget X", price: 15, quantity: 50, category: "Electronics" },
    { name: "Gadget Y", price: 85, quantity: 25, category: "Electronics" }
];

const expensiveInStock = inventory.filter(createFilter({
    price: p => p > 20,
    quantity: q => q > 0
}));

console.log("Example 10: Dynamic filtering");
console.log("Expensive in-stock items:", expensiveInStock);
console.log();

// ========================================
// CUSTOM IMPLEMENTATION
// ========================================

// Custom implementation of filter method
Array.prototype.customFilter = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.customFilter called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    const result = [];
    
    for (let i = 0; i < len; i++) {
        if (i in O) {
            if (callback.call(thisArg, O[i], i, O)) {
                result.push(O[i]);
            }
        }
    }
    
    return result;
};

// Test custom implementation
const testArray = [1, 2, 3, 4, 5, 6];
const customFiltered = testArray.customFilter(x => x % 2 === 0);

console.log("Custom implementation test:");
console.log("Input:", testArray);
console.log("Custom filter result:", customFiltered);
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Search functionality
const searchResults = [
    { title: "JavaScript Basics", content: "Learn JavaScript fundamentals", tags: ["js", "beginner"] },
    { title: "Advanced React", content: "Master React hooks and patterns", tags: ["react", "advanced"] },
    { title: "Node.js Guide", content: "Backend development with Node", tags: ["node", "backend"] },
    { title: "CSS Grid", content: "Layout with CSS Grid", tags: ["css", "layout"] }
];

function searchFilter(query) {
    const lowerQuery = query.toLowerCase();
    return searchResults.filter(item => 
        item.title.toLowerCase().includes(lowerQuery) ||
        item.content.toLowerCase().includes(lowerQuery) ||
        item.tags.some(tag => tag.includes(lowerQuery))
    );
}

console.log("Use Case 1: Search functionality");
console.log("Search for 'react':", searchFilter("react"));
console.log("Search for 'css':", searchFilter("css"));
console.log();

// Use Case 2: Form validation
const formInputs = [
    { name: "email", value: "john@example.com", required: true },
    { name: "password", value: "123456", required: true },
    { name: "confirmPassword", value: "", required: true },
    { name: "newsletter", value: false, required: false }
];

const requiredEmptyFields = formInputs.filter(input => 
    input.required && (!input.value || input.value === "")
);

const validFields = formInputs.filter(input => 
    !input.required || (input.value && input.value !== "")
);

console.log("Use Case 2: Form validation");
console.log("Required empty fields:", requiredEmptyFields);
console.log("Valid fields:", validFields);
console.log();

// Use Case 3: Data processing pipeline
const rawData = [
    { id: 1, score: 85, subject: "Math", student: "John" },
    { id: 2, score: 92, subject: "Science", student: "Jane" },
    { id: 3, score: 78, subject: "Math", student: "Bob" },
    { id: 4, score: 95, subject: "Science", student: "Alice" },
    { id: 5, score: 88, subject: "English", student: "John" }
];

const mathHighScores = rawData
    .filter(record => record.subject === "Math")
    .filter(record => record.score >= 80)
    .map(record => ({ student: record.student, score: record.score }));

console.log("Use Case 3: Data processing pipeline");
console.log("Math high scores:", mathHighScores);
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Comparison ===");

const largeArray = Array.from({ length: 100000 }, (_, i) => i);

console.time("filter() performance");
const filteredLarge = largeArray.filter(x => x % 2 === 0);
console.timeEnd("filter() performance");

console.time("for loop performance");
const forLoopResult = [];
for (let i = 0; i < largeArray.length; i++) {
    if (largeArray[i] % 2 === 0) {
        forLoopResult.push(largeArray[i]);
    }
}
console.timeEnd("for loop performance");

console.log("Filtered items count:", filteredLarge.length);
console.log();

// ========================================
// COMMON PATTERNS AND BEST PRACTICES
// ========================================

console.log("=== Common Patterns ===");

// Pattern 1: Chaining filters
const complexData = [
    { name: "Product A", price: 100, rating: 4.5, category: "Electronics" },
    { name: "Product B", price: 200, rating: 3.8, category: "Electronics" },
    { name: "Product C", price: 50, rating: 4.2, category: "Books" },
    { name: "Product D", price: 150, rating: 4.7, category: "Electronics" }
];

const premiumElectronics = complexData
    .filter(product => product.category === "Electronics")
    .filter(product => product.rating >= 4.0)
    .filter(product => product.price >= 100);

console.log("Premium electronics:", premiumElectronics);

// Pattern 2: Filter with error handling
function safeFilter(array, predicate) {
    try {
        return array.filter(predicate);
    } catch (error) {
        console.error("Filter error:", error.message);
        return [];
    }
}

const safeResult = safeFilter([1, 2, 3], x => x > 1);
console.log("Safe filter result:", safeResult);

console.log("\n=== Best Practices ===");
console.log("1. Use filter() for creating new arrays, not for side effects");
console.log("2. Consider performance with large datasets");
console.log("3. Chain filters for complex conditions");
console.log("4. Handle edge cases (null, undefined values)");
console.log("5. Use meaningful predicate function names");
console.log("6. Consider using some() or every() for boolean checks instead of filter().length");