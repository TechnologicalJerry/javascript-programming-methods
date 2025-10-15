/**
 * Array.prototype.find() and Array.prototype.findIndex() Methods
 * 
 * Description:
 * - find(): Returns the first element in the array that satisfies the provided testing function.
 * - findIndex(): Returns the index of the first element that satisfies the testing function.
 * - findLast(): Returns the last element that satisfies the testing function (ES2023).
 * - findLastIndex(): Returns the index of the last element that satisfies the testing function (ES2023).
 * 
 * Syntax: 
 * - array.find(callback(element, index, array), thisArg)
 * - array.findIndex(callback(element, index, array), thisArg)
 * 
 * Returns: 
 * - find(): The element found, or undefined if not found
 * - findIndex(): The index of the element, or -1 if not found
 * 
 * Time Complexity: O(n) worst case, O(1) best case
 * Space Complexity: O(1)
 */

// ========================================
// BASIC EXAMPLES
// ========================================

console.log("=== Array.find() and findIndex() Examples ===\n");

// Example 1: Basic find() usage
console.log("Example 1: Basic find() usage");

const numbers = [5, 12, 8, 130, 44];
console.log("Array:", numbers);

const firstLargeNumber = numbers.find(num => num > 10);
console.log("First number > 10:", firstLargeNumber);

const firstEven = numbers.find(num => num % 2 === 0);
console.log("First even number:", firstEven);

const notFound = numbers.find(num => num > 200);
console.log("Number > 200:", notFound); // undefined
console.log();

// Example 2: Basic findIndex() usage
console.log("Example 2: Basic findIndex() usage");

const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log("Fruits:", fruits);

const bananaIndex = fruits.findIndex(fruit => fruit === "banana");
console.log("Index of 'banana':", bananaIndex);

const longFruitIndex = fruits.findIndex(fruit => fruit.length > 6);
console.log("Index of first fruit with length > 6:", longFruitIndex);

const notFoundIndex = fruits.findIndex(fruit => fruit === "grape");
console.log("Index of 'grape':", notFoundIndex); // -1
console.log();

// ========================================
// FINDING OBJECTS
// ========================================

// Example 3: Finding objects by property
console.log("Example 3: Finding objects by property");

const users = [
    { id: 1, name: "John", age: 25, active: true },
    { id: 2, name: "Jane", age: 30, active: false },
    { id: 3, name: "Bob", age: 35, active: true },
    { id: 4, name: "Alice", age: 28, active: false }
];

console.log("Users:", users);

const userById = users.find(user => user.id === 3);
console.log("User with id 3:", userById);

const inactiveUser = users.find(user => !user.active);
console.log("First inactive user:", inactiveUser);

const youngUser = users.find(user => user.age < 26);
console.log("First user under 26:", youngUser);
console.log();

// Example 4: Complex object search
console.log("Example 4: Complex object search");

const products = [
    { id: 1, name: "Laptop", price: 999, category: "Electronics", inStock: true },
    { id: 2, name: "Book", price: 20, category: "Education", inStock: false },
    { id: 3, name: "Phone", price: 599, category: "Electronics", inStock: true },
    { id: 4, name: "Desk", price: 299, category: "Furniture", inStock: true }
];

console.log("Products:", products);

// Find affordable electronics in stock
const affordableElectronic = products.find(product => 
    product.category === "Electronics" && 
    product.price < 700 && 
    product.inStock
);

console.log("Affordable electronic in stock:", affordableElectronic);

// Find index of out of stock item
const outOfStockIndex = products.findIndex(product => !product.inStock);
console.log("Index of first out-of-stock product:", outOfStockIndex);
console.log();

// ========================================
// USING INDEX PARAMETER
// ========================================

// Example 5: Using index in find()
console.log("Example 5: Using index parameter");

const values = [10, 20, 30, 40, 50];
console.log("Values:", values);

// Find first element after index 2 that is > 25
const foundWithIndex = values.find((value, index) => index > 2 && value > 25);
console.log("First value after index 2 that is > 25:", foundWithIndex);

// Find index of element where value equals index * 10
const specialIndex = values.findIndex((value, index) => value === index * 10);
console.log("Index where value equals index * 10:", specialIndex);
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Finding user by credentials
console.log("Use Case 1: User authentication simulation");

const registeredUsers = [
    { username: "john_doe", password: "pass123", email: "john@example.com" },
    { username: "jane_smith", password: "secure456", email: "jane@example.com" },
    { username: "bob_jones", password: "mypass789", email: "bob@example.com" }
];

function authenticateUser(username, password) {
    const user = registeredUsers.find(u => 
        u.username === username && u.password === password
    );
    
    return user ? { success: true, email: user.email } : { success: false };
}

console.log("Login 'john_doe' with 'pass123':", authenticateUser("john_doe", "pass123"));
console.log("Login 'john_doe' with 'wrong':", authenticateUser("john_doe", "wrong"));
console.log();

// Use Case 2: Finding configuration
console.log("Use Case 2: Configuration lookup");

const appSettings = [
    { key: "theme", value: "dark", type: "string" },
    { key: "fontSize", value: 14, type: "number" },
    { key: "notifications", value: true, type: "boolean" },
    { key: "language", value: "en", type: "string" }
];

function getSetting(key) {
    const setting = appSettings.find(s => s.key === key);
    return setting ? setting.value : null;
}

console.log("Theme setting:", getSetting("theme"));
console.log("Font size:", getSetting("fontSize"));
console.log("Non-existent setting:", getSetting("nonexistent"));
console.log();

// Use Case 3: Finding closest value
console.log("Use Case 3: Finding closest value");

const temperatures = [15, 18, 22, 25, 28, 32, 35];
const targetTemp = 24;

console.log("Temperatures:", temperatures);
console.log("Target:", targetTemp);

// Find first temperature >= target
const closestHigher = temperatures.find(temp => temp >= targetTemp);
console.log("Closest temperature (higher or equal):", closestHigher);

// Find index to insert target
const insertIndex = temperatures.findIndex(temp => temp > targetTemp);
console.log("Index to insert target:", insertIndex);
console.log();

// Use Case 4: Form validation
console.log("Use Case 4: Form validation");

const formFields = [
    { name: "email", value: "user@example.com", valid: true },
    { name: "password", value: "12", valid: false },
    { name: "confirmPassword", value: "12", valid: false },
    { name: "terms", value: true, valid: true }
];

const firstInvalidField = formFields.find(field => !field.valid);

if (firstInvalidField) {
    console.log(`First invalid field: ${firstInvalidField.name}`);
    console.log("Form is invalid");
} else {
    console.log("All fields are valid");
}
console.log();

// ========================================
// ADVANCED PATTERNS
// ========================================

// Example 6: Finding nested objects
console.log("Example 6: Finding nested objects");

const employees = [
    {
        id: 1,
        name: "John",
        department: "IT",
        skills: ["JavaScript", "Python", "React"]
    },
    {
        id: 2,
        name: "Jane",
        department: "Marketing",
        skills: ["SEO", "Content Writing"]
    },
    {
        id: 3,
        name: "Bob",
        department: "IT",
        skills: ["Java", "Spring", "Docker"]
    }
];

// Find employee with specific skill
const jsExpert = employees.find(emp => emp.skills.includes("JavaScript"));
console.log("JavaScript expert:", jsExpert.name);

// Find department with employees who have Docker skills
const dockerEmployee = employees.find(emp => emp.skills.includes("Docker"));
console.log("Docker expert's department:", dockerEmployee.department);
console.log();

// Example 7: Using with thisArg
console.log("Example 7: Using thisArg parameter");

const threshold = {
    minPrice: 500,
    isPriceValid: function(products) {
        return products.find(function(product) {
            return product.price >= this.minPrice;
        }, this); // 'this' refers to threshold object
    }
};

const productList = [
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 300 },
    { name: "Laptop", price: 999 }
];

const expensiveProduct = threshold.isPriceValid(productList);
console.log("First product >= $500:", expensiveProduct);
console.log();

// ========================================
// FINDLAST AND FINDLASTINDEX (ES2023)
// ========================================

// Example 8: findLast() and findLastIndex()
console.log("Example 8: findLast() and findLastIndex() (ES2023)");

const scores = [45, 78, 92, 67, 88, 95, 73];
console.log("Scores:", scores);

// findLast - search from end to start
if (Array.prototype.findLast) {
    const lastHighScore = scores.findLast(score => score >= 90);
    console.log("Last score >= 90:", lastHighScore);
    
    const lastHighScoreIndex = scores.findLastIndex(score => score >= 90);
    console.log("Index of last score >= 90:", lastHighScoreIndex);
} else {
    console.log("findLast() not supported in this environment");
    // Fallback implementation
    const reversed = [...scores].reverse();
    const lastHighScore = reversed.find(score => score >= 90);
    console.log("Last score >= 90 (using fallback):", lastHighScore);
}
console.log();

// ========================================
// CUSTOM IMPLEMENTATION
// ========================================

// Custom implementation of find()
Array.prototype.customFind = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.customFind called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    
    for (let i = 0; i < len; i++) {
        if (i in O) {
            const value = O[i];
            if (callback.call(thisArg, value, i, O)) {
                return value;
            }
        }
    }
    
    return undefined;
};

// Custom implementation of findIndex()
Array.prototype.customFindIndex = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.customFindIndex called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    
    for (let i = 0; i < len; i++) {
        if (i in O) {
            if (callback.call(thisArg, O[i], i, O)) {
                return i;
            }
        }
    }
    
    return -1;
};

// Test custom implementations
console.log("Custom implementation test:");
const testArray = [10, 20, 30, 40, 50];

const customFoundValue = testArray.customFind(x => x > 25);
const customFoundIndex = testArray.customFindIndex(x => x > 25);

console.log("Array:", testArray);
console.log("Custom find (> 25):", customFoundValue);
console.log("Custom findIndex (> 25):", customFoundIndex);
console.log();

// ========================================
// COMPARISON WITH OTHER METHODS
// ========================================

console.log("=== Comparison with Other Methods ===\n");

const comparisonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// find() vs filter()
console.log("find() - returns first match:");
console.log(comparisonArray.find(x => x > 5)); // 6

console.log("\nfilter() - returns all matches:");
console.log(comparisonArray.filter(x => x > 5)); // [6, 7, 8, 9, 10]

// findIndex() vs indexOf()
console.log("\nfindIndex() - with condition:");
console.log(comparisonArray.findIndex(x => x > 5)); // 5 (index of 6)

console.log("\nindexOf() - exact value:");
console.log(comparisonArray.indexOf(6)); // 5
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Considerations ===\n");

const largeArray = Array.from({ length: 100000 }, (_, i) => ({
    id: i,
    value: Math.random() * 1000
}));

console.time("find() performance");
const found = largeArray.find(item => item.value > 999);
console.timeEnd("find() performance");

console.time("filter() + first performance");
const filtered = largeArray.filter(item => item.value > 999)[0];
console.timeEnd("filter() + first performance");

console.log("find() stops at first match - more efficient!");
console.log("filter() processes entire array - less efficient for single item");
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use find() when you need the first matching element");
console.log("2. Use findIndex() when you need the position of the first match");
console.log("3. Use filter() when you need all matching elements");
console.log("4. Use indexOf() when searching for exact value (primitive types)");
console.log("5. Use includes() when you only need to check existence");
console.log("6. find() returns undefined if not found, findIndex() returns -1");
console.log("7. find() is more efficient than filter()[0] for single items");
console.log("8. Always check for undefined/−1 before using results");
console.log("9. Use findLast() when you need the last matching element (ES2023)");
console.log("10. Consider performance: find() stops at first match");

// Common patterns
console.log("\n=== Common Patterns ===");

// Pattern 1: Safe property access
const safeFind = (array, predicate) => {
    const result = array.find(predicate);
    return result || null; // or provide default value
};

// Pattern 2: Find with fallback
const findWithFallback = (array, predicate, fallback) => {
    const result = array.find(predicate);
    return result !== undefined ? result : fallback;
};

// Pattern 3: Multiple conditions
const findMultiple = (array, ...predicates) => {
    return array.find(item => 
        predicates.every(predicate => predicate(item))
    );
};

console.log("\nExample of find with fallback:");
const defaultUser = { name: "Guest", id: 0 };
const foundUser = findWithFallback(
    users,
    user => user.id === 999,
    defaultUser
);
console.log("Found user with fallback:", foundUser);

