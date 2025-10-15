/**
 * Array.prototype.some() and Array.prototype.every() Methods
 * 
 * Description:
 * - some(): Tests whether at least one element passes the test
 * - every(): Tests whether all elements pass the test
 * 
 * Syntax: 
 * - array.some(callback(element, index, array), thisArg)
 * - array.every(callback(element, index, array), thisArg)
 * 
 * Returns: boolean (true or false)
 * 
 * Important: Both methods short-circuit (stop early when result is determined)
 * 
 * Time Complexity: O(n) worst case, O(1) best case
 * Space Complexity: O(1)
 */

// ========================================
// ARRAY.PROTOTYPE.SOME() EXAMPLES
// ========================================

console.log("=== Array.some() Examples ===\n");

// Example 1: Basic some() usage
console.log("Example 1: Basic some() usage");

const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has at least one even number:", hasEven);

const hasLarge = numbers.some(num => num > 10);
console.log("Has at least one number > 10:", hasLarge);

const hasNegative = numbers.some(num => num < 0);
console.log("Has at least one negative number:", hasNegative);
console.log();

// Example 2: some() with objects
console.log("Example 2: some() with objects");

const users = [
    { id: 1, name: "John", age: 25, admin: false },
    { id: 2, name: "Jane", age: 30, admin: true },
    { id: 3, name: "Bob", age: 35, admin: false }
];

console.log("Users:", users);

const hasAdmin = users.some(user => user.admin);
console.log("Has at least one admin:", hasAdmin);

const hasYoungUser = users.some(user => user.age < 26);
console.log("Has at least one user under 26:", hasYoungUser);

const hasOldUser = users.some(user => user.age > 50);
console.log("Has at least one user over 50:", hasOldUser);
console.log();

// ========================================
// ARRAY.PROTOTYPE.EVERY() EXAMPLES
// ========================================

console.log("=== Array.every() Examples ===\n");

// Example 3: Basic every() usage
console.log("Example 3: Basic every() usage");

const positiveNumbers = [1, 2, 3, 4, 5];
const mixedNumbers = [1, -2, 3, 4, 5];

console.log("Positive array:", positiveNumbers);
const allPositive = positiveNumbers.every(num => num > 0);
console.log("All numbers are positive:", allPositive);

console.log("\nMixed array:", mixedNumbers);
const allPositiveMixed = mixedNumbers.every(num => num > 0);
console.log("All numbers are positive:", allPositiveMixed);

const allLessThan10 = positiveNumbers.every(num => num < 10);
console.log("All positive numbers < 10:", allLessThan10);
console.log();

// Example 4: every() with objects
console.log("Example 4: every() with objects");

const products = [
    { name: "Laptop", price: 999, inStock: true },
    { name: "Mouse", price: 25, inStock: true },
    { name: "Keyboard", price: 75, inStock: true }
];

const outOfStockProducts = [
    { name: "Laptop", price: 999, inStock: false },
    { name: "Mouse", price: 25, inStock: true }
];

console.log("Products:", products);
const allInStock = products.every(product => product.inStock);
console.log("All products in stock:", allInStock);

console.log("\nOut of stock products:", outOfStockProducts);
const allInStockMixed = outOfStockProducts.every(product => product.inStock);
console.log("All products in stock:", allInStockMixed);

const allAffordable = products.every(product => product.price < 1000);
console.log("All products under $1000:", allAffordable);
console.log();

// ========================================
// SHORT-CIRCUIT BEHAVIOR
// ========================================

console.log("=== Short-Circuit Behavior ===\n");

// Example 5: some() short-circuits on first true
console.log("Example 5: some() stops at first true");

let someCallCount = 0;
const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const someResult = largeArray.some(num => {
    someCallCount++;
    console.log(`  Checking ${num}`);
    return num > 5;
});

console.log("Result:", someResult);
console.log("Callback called", someCallCount, "times (stopped at first true)");
console.log();

// Example 6: every() short-circuits on first false
console.log("Example 6: every() stops at first false");

let everyCallCount = 0;
const everyResult = largeArray.every(num => {
    everyCallCount++;
    console.log(`  Checking ${num}`);
    return num < 5;
});

console.log("Result:", everyResult);
console.log("Callback called", everyCallCount, "times (stopped at first false)");
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Form validation
console.log("Use Case 1: Form validation");

const formFields = [
    { name: "email", value: "user@example.com", valid: true },
    { name: "password", value: "strongPass123", valid: true },
    { name: "confirmPassword", value: "strongPass123", valid: true },
    { name: "terms", value: true, valid: true }
];

const allFieldsValid = formFields.every(field => field.valid);
const hasInvalidField = formFields.some(field => !field.valid);

console.log("All fields valid:", allFieldsValid);
console.log("Has invalid field:", hasInvalidField);

if (allFieldsValid) {
    console.log("✓ Form can be submitted");
} else {
    console.log("✗ Form has errors");
}
console.log();

// Use Case 2: Permission checking
console.log("Use Case 2: Permission checking");

const requiredPermissions = ["read", "write", "delete"];
const userPermissions = ["read", "write"];

const hasAllPermissions = requiredPermissions.every(perm => 
    userPermissions.includes(perm)
);

const hasSomePermissions = requiredPermissions.some(perm => 
    userPermissions.includes(perm)
);

console.log("Required permissions:", requiredPermissions);
console.log("User permissions:", userPermissions);
console.log("Has all required permissions:", hasAllPermissions);
console.log("Has some required permissions:", hasSomePermissions);
console.log();

// Use Case 3: Data validation
console.log("Use Case 3: Data validation");

const ageList = [25, 30, 35, 40, 45];
const invalidAgeList = [25, 30, -5, 40, 45];

function validateAges(ages) {
    const allValidAges = ages.every(age => age > 0 && age < 150);
    const hasSeniors = ages.some(age => age >= 65);
    const hasMinors = ages.some(age => age < 18);
    
    return {
        allValid: allValidAges,
        hasSeniors,
        hasMinors
    };
}

console.log("Valid ages:", ageList);
console.log("Validation:", validateAges(ageList));

console.log("\nInvalid ages:", invalidAgeList);
console.log("Validation:", validateAges(invalidAgeList));
console.log();

// Use Case 4: Checking array properties
console.log("Use Case 4: Array property checks");

const scores = [85, 92, 78, 96, 88];

const allPassing = scores.every(score => score >= 60);
const someExcellent = scores.some(score => score >= 90);
const allExcellent = scores.every(score => score >= 90);
const someFailing = scores.some(score => score < 60);

console.log("Scores:", scores);
console.log("All passing (>= 60):", allPassing);
console.log("Some excellent (>= 90):", someExcellent);
console.log("All excellent (>= 90):", allExcellent);
console.log("Some failing (< 60):", someFailing);
console.log();

// ========================================
// ADVANCED PATTERNS
// ========================================

// Example 7: Complex object validation
console.log("Example 7: Complex object validation");

const orders = [
    { id: 1, items: [{ price: 10 }, { price: 20 }], paid: true },
    { id: 2, items: [{ price: 5 }, { price: 15 }], paid: true },
    { id: 3, items: [{ price: 30 }], paid: false }
];

// Check if all orders are paid
const allOrdersPaid = orders.every(order => order.paid);
console.log("All orders paid:", allOrdersPaid);

// Check if any order has expensive items
const hasExpensiveOrder = orders.some(order => 
    order.items.some(item => item.price > 25)
);
console.log("Has expensive order (item > $25):", hasExpensiveOrder);

// Check if all orders have at least one item
const allOrdersHaveItems = orders.every(order => order.items.length > 0);
console.log("All orders have items:", allOrdersHaveItems);
console.log();

// Example 8: Nested arrays
console.log("Example 8: Nested arrays");

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Check if any row has a number > 5
const hasLargeNumber = matrix.some(row => row.some(num => num > 5));
console.log("Has number > 5:", hasLargeNumber);

// Check if all rows have 3 elements
const allRowsValid = matrix.every(row => row.length === 3);
console.log("All rows have 3 elements:", allRowsValid);

// Check if all numbers are positive
const allPositiveMatrix = matrix.every(row => row.every(num => num > 0));
console.log("All numbers positive:", allPositiveMatrix);
console.log();

// ========================================
// EDGE CASES
// ========================================

console.log("=== Edge Cases ===\n");

// Example 9: Empty arrays
console.log("Example 9: Empty arrays");

const emptyArray = [];

const someEmpty = emptyArray.some(x => x > 0);
const everyEmpty = emptyArray.every(x => x > 0);

console.log("Empty array:", emptyArray);
console.log("some() on empty array:", someEmpty); // false
console.log("every() on empty array:", everyEmpty); // true (vacuous truth)
console.log("Note: every() returns true for empty arrays (vacuous truth)");
console.log();

// Example 10: Sparse arrays
console.log("Example 10: Sparse arrays");

const sparseArray = [1, , 3, , 5];
console.log("Sparse array:", sparseArray);

const someSparse = sparseArray.some((x, i) => {
    console.log(`  Checking index ${i}: ${x}`);
    return x === undefined;
});
console.log("Has undefined (via some):", someSparse);

const everySparse = sparseArray.every(x => x > 0);
console.log("All positive (skips holes):", everySparse);
console.log();

// ========================================
// COMBINING SOME() AND EVERY()
// ========================================

console.log("=== Combining some() and every() ===\n");

// Example 11: Logical combinations
console.log("Example 11: Logical operations");

const testNumbers = [2, 4, 6, 8, 10];

// All even AND some > 5
const allEvenAndSomeLarge = testNumbers.every(n => n % 2 === 0) && 
                            testNumbers.some(n => n > 5);
console.log("All even AND some > 5:", allEvenAndSomeLarge);

// Not all > 5 (equivalent to some <= 5)
const notAllLarge = !testNumbers.every(n => n > 5);
const someSmall = testNumbers.some(n => n <= 5);
console.log("Not all > 5:", notAllLarge);
console.log("Some <= 5:", someSmall);
console.log("These are equivalent:", notAllLarge === someSmall);
console.log();

// ========================================
// CUSTOM IMPLEMENTATION
// ========================================

// Custom implementation of some()
Array.prototype.customSome = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.customSome called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    
    for (let i = 0; i < len; i++) {
        if (i in O) {
            if (callback.call(thisArg, O[i], i, O)) {
                return true; // Short-circuit on first true
            }
        }
    }
    
    return false;
};

// Custom implementation of every()
Array.prototype.customEvery = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.customEvery called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    
    for (let i = 0; i < len; i++) {
        if (i in O) {
            if (!callback.call(thisArg, O[i], i, O)) {
                return false; // Short-circuit on first false
            }
        }
    }
    
    return true; // Empty arrays return true
};

// Test custom implementations
console.log("Custom implementation test:");
const testArray = [1, 2, 3, 4, 5];

const customSomeResult = testArray.customSome(x => x > 3);
const customEveryResult = testArray.customEvery(x => x > 0);

console.log("Array:", testArray);
console.log("Custom some (> 3):", customSomeResult);
console.log("Custom every (> 0):", customEveryResult);
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Considerations ===\n");

const perfArray = Array.from({ length: 100000 }, (_, i) => i);

// some() performance (early termination)
console.time("some() with early match");
const someResultPerf = perfArray.some(x => x === 5);
console.timeEnd("some() with early match");
console.log("Found:", someResultPerf);

// every() performance (early termination)
console.time("every() with early mismatch");
const everyResultPerf = perfArray.every(x => x < 5);
console.timeEnd("every() with early mismatch");
console.log("All match:", everyResultPerf);

// Comparison with filter + length
console.time("filter() + length > 0");
const filterResult = perfArray.filter(x => x === 5).length > 0;
console.timeEnd("filter() + length > 0");
console.log("Found:", filterResult);

console.log("\nsome()/every() are more efficient due to short-circuiting!");
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use some() to check if at least one element matches");
console.log("2. Use every() to check if all elements match");
console.log("3. Both methods short-circuit for better performance");
console.log("4. some() returns false for empty arrays");
console.log("5. every() returns true for empty arrays (vacuous truth)");
console.log("6. Prefer some()/every() over filter().length for existence checks");
console.log("7. Use !every(x => condition) instead of some(x => !condition) when clearer");
console.log("8. Remember: !(every) === some(!condition) (De Morgan's law)");
console.log("9. Both skip holes in sparse arrays");
console.log("10. Use for complex validation logic");

console.log("\n=== Common Patterns ===");

// Pattern 1: Checking if array contains any of multiple values
const containsAny = (array, values) => values.some(val => array.includes(val));
console.log("\nContains any [2, 3, 4] in [1, 2, 5]:", 
    containsAny([1, 2, 5], [2, 3, 4]));

// Pattern 2: Checking if array contains all of multiple values
const containsAll = (array, values) => values.every(val => array.includes(val));
console.log("Contains all [1, 2] in [1, 2, 5]:", 
    containsAll([1, 2, 5], [1, 2]));

// Pattern 3: Validation helper
const validate = (data, rules) => rules.every(rule => rule(data));
const isValidUser = validate(
    { name: "John", age: 30 },
    [
        data => data.name.length > 0,
        data => data.age >= 18
    ]
);
console.log("User is valid:", isValidUser);

