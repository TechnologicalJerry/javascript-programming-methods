/**
 * Array.prototype.forEach() Method
 * 
 * Description:
 * The forEach() method executes a provided function once for each array element.
 * Unlike map(), it doesn't create a new array and always returns undefined.
 * 
 * Syntax: array.forEach(callback(element, index, array), thisArg)
 * 
 * Parameters:
 * - callback: Function to execute for each element
 *   - element: The current element being processed
 *   - index (optional): The index of the current element
 *   - array (optional): The array forEach was called upon
 * - thisArg (optional): Value to use as 'this' when executing callback
 * 
 * Returns: undefined (forEach doesn't return a value)
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// ========================================
// BASIC EXAMPLES
// ========================================

console.log("=== Array.forEach() Examples ===\n");

// Example 1: Basic iteration
console.log("Example 1: Basic iteration");

const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);

console.log("Using forEach to print each element:");
numbers.forEach(num => {
    console.log(`  Value: ${num}, Squared: ${num * num}`);
});
console.log();

// Example 2: Using index parameter
console.log("Example 2: Using index parameter");

const fruits = ["apple", "banana", "cherry", "date"];
console.log("Fruits:", fruits);

fruits.forEach((fruit, index) => {
    console.log(`  ${index + 1}. ${fruit}`);
});
console.log();

// Example 3: Modifying external variables
console.log("Example 3: Modifying external variables (side effects)");

let sum = 0;
const values = [10, 20, 30, 40, 50];

values.forEach(value => {
    sum += value;
});

console.log("Values:", values);
console.log("Sum:", sum);
console.log();

// ========================================
// WORKING WITH OBJECTS
// ========================================

// Example 4: Iterating over objects in array
console.log("Example 4: Iterating over objects");

const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 }
];

console.log("User List:");
users.forEach((user, index) => {
    console.log(`  ${index + 1}. ${user.name} (Age: ${user.age})`);
});
console.log();

// Example 5: Modifying array elements (mutations)
console.log("Example 5: Modifying array elements");

const products = [
    { name: "Laptop", price: 999, stock: 5 },
    { name: "Phone", price: 599, stock: 10 },
    { name: "Tablet", price: 399, stock: 0 }
];

console.log("Before discount:");
console.log(products);

// Apply 10% discount to all in-stock items
products.forEach(product => {
    if (product.stock > 0) {
        product.price = product.price * 0.9;
    }
});

console.log("After 10% discount on in-stock items:");
console.log(products);
console.log();

// ========================================
// ADVANCED USAGE
// ========================================

// Example 6: Using thisArg parameter
console.log("Example 6: Using thisArg parameter");

const multiplier = {
    factor: 3,
    multiply: function(numbers) {
        numbers.forEach(function(num) {
            console.log(`  ${num} * ${this.factor} = ${num * this.factor}`);
        }, this); // 'this' refers to multiplier object
    }
};

multiplier.multiply([1, 2, 3, 4, 5]);
console.log();

// Example 7: Breaking out of forEach (impossible - showing alternatives)
console.log("Example 7: Attempting to break forEach");

const numbersToCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("forEach cannot be broken (prints all):");
numbersToCheck.forEach(num => {
    if (num > 5) {
        return; // Only exits current iteration, not the loop
    }
    console.log(`  Processing: ${num}`);
});

console.log("\nAlternative using for...of (can break):");
for (const num of numbersToCheck) {
    if (num > 5) {
        break; // Actually breaks the loop
    }
    console.log(`  Processing: ${num}`);
}
console.log();

// Example 8: forEach with sparse arrays
console.log("Example 8: forEach with sparse arrays");

const sparseArray = [1, , 3, , 5]; // Array with holes
console.log("Sparse array:", sparseArray);

console.log("forEach skips empty slots:");
sparseArray.forEach((value, index) => {
    console.log(`  Index ${index}: ${value}`);
});
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: DOM manipulation simulation
console.log("Use Case 1: DOM manipulation (simulated)");

const menuItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "About", url: "/about" },
    { id: 3, text: "Services", url: "/services" },
    { id: 4, text: "Contact", url: "/contact" }
];

const htmlElements = [];
menuItems.forEach(item => {
    htmlElements.push(`<li><a href="${item.url}">${item.text}</a></li>`);
});

console.log("Generated HTML:");
console.log(htmlElements.join('\n'));
console.log();

// Use Case 2: Data aggregation
console.log("Use Case 2: Data aggregation");

const sales = [
    { product: "Laptop", amount: 999, quantity: 2 },
    { product: "Mouse", amount: 25, quantity: 5 },
    { product: "Keyboard", amount: 75, quantity: 3 }
];

let totalRevenue = 0;
let totalItems = 0;

sales.forEach(sale => {
    const lineTotal = sale.amount * sale.quantity;
    totalRevenue += lineTotal;
    totalItems += sale.quantity;
    console.log(`  ${sale.product}: ${sale.quantity} x $${sale.amount} = $${lineTotal}`);
});

console.log(`Total items sold: ${totalItems}`);
console.log(`Total revenue: $${totalRevenue}`);
console.log();

// Use Case 3: Data validation and collection
console.log("Use Case 3: Data validation");

const formInputs = [
    { field: "email", value: "user@example.com", required: true },
    { field: "password", value: "12345", required: true },
    { field: "confirmPassword", value: "", required: true },
    { field: "newsletter", value: true, required: false }
];

const errors = [];

formInputs.forEach(input => {
    if (input.required && !input.value) {
        errors.push(`${input.field} is required`);
    }
    
    if (input.field === "password" && input.value.length < 8) {
        errors.push("Password must be at least 8 characters");
    }
});

if (errors.length > 0) {
    console.log("Validation errors:");
    errors.forEach(error => console.log(`  - ${error}`));
} else {
    console.log("All validations passed!");
}
console.log();

// Use Case 4: Logging and debugging
console.log("Use Case 4: Logging and debugging");

const apiResponses = [
    { status: 200, endpoint: "/users", data: { count: 5 } },
    { status: 404, endpoint: "/posts", error: "Not found" },
    { status: 200, endpoint: "/comments", data: { count: 12 } }
];

console.log("API Response Summary:");
apiResponses.forEach((response, index) => {
    const status = response.status === 200 ? "✓ SUCCESS" : "✗ ERROR";
    console.log(`  ${index + 1}. [${status}] ${response.endpoint} (Status: ${response.status})`);
    
    if (response.error) {
        console.log(`     Error: ${response.error}`);
    }
});
console.log();

// ========================================
// CUSTOM IMPLEMENTATION
// ========================================

// Custom implementation of forEach method
Array.prototype.customForEach = function(callback, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.customForEach called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    
    for (let i = 0; i < len; i++) {
        if (i in O) {
            callback.call(thisArg, O[i], i, O);
        }
    }
    
    // forEach always returns undefined
    return undefined;
};

// Test custom implementation
console.log("Custom implementation test:");
const testArray = [10, 20, 30];
let customSum = 0;

testArray.customForEach(value => {
    customSum += value;
});

console.log("Array:", testArray);
console.log("Sum using custom forEach:", customSum);
console.log();

// ========================================
// COMPARISON WITH OTHER METHODS
// ========================================

console.log("=== forEach vs Other Array Methods ===\n");

const comparisonArray = [1, 2, 3, 4, 5];

// forEach - no return value
console.log("forEach (returns undefined):");
const forEachResult = comparisonArray.forEach(x => x * 2);
console.log("Return value:", forEachResult);

// map - returns new array
console.log("\nmap (returns new array):");
const mapResult = comparisonArray.map(x => x * 2);
console.log("Return value:", mapResult);

// for...of - more flexible
console.log("\nfor...of (can break):");
for (const num of comparisonArray) {
    if (num === 3) break;
    console.log(`  Processing: ${num}`);
}
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Comparison ===\n");

const largeArray = Array.from({ length: 100000 }, (_, i) => i);
let sum1 = 0, sum2 = 0, sum3 = 0;

console.time("forEach performance");
largeArray.forEach(x => sum1 += x);
console.timeEnd("forEach performance");

console.time("for loop performance");
for (let i = 0; i < largeArray.length; i++) {
    sum2 += largeArray[i];
}
console.timeEnd("for loop performance");

console.time("for...of performance");
for (const x of largeArray) {
    sum3 += x;
}
console.timeEnd("for...of performance");

console.log("All sums equal:", sum1 === sum2 && sum2 === sum3);
console.log();

// ========================================
// COMMON PATTERNS AND PITFALLS
// ========================================

console.log("=== Common Patterns and Pitfalls ===\n");

// Pitfall 1: Cannot break or continue
console.log("Pitfall 1: Cannot break forEach");
console.log("// forEach cannot be stopped early");
console.log("// Use for...of, some(), or every() if you need to break\n");

// Pitfall 2: Return value is always undefined
console.log("Pitfall 2: Return value");
const result = [1, 2, 3].forEach(x => x * 2);
console.log("forEach return value is always:", result);
console.log("Use map() if you need a new array\n");

// Pitfall 3: Async operations
console.log("Pitfall 3: Async operations");
console.log("forEach doesn't wait for async operations");

const asyncArray = [1, 2, 3];

console.log("Start async forEach:");
asyncArray.forEach(async (num) => {
    // This will not wait!
    await new Promise(resolve => setTimeout(resolve, 100));
    console.log(`  Processed: ${num}`);
});
console.log("forEach completed (but async operations still running)");

// Correct way for async
console.log("\nCorrect async approach:");
async function processAsync() {
    for (const num of asyncArray) {
        await new Promise(resolve => setTimeout(resolve, 100));
        console.log(`  Async processed: ${num}`);
    }
    console.log("All async operations complete");
}

processAsync();
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use forEach for side effects only (logging, DOM manipulation)");
console.log("2. Use map() when you need a transformed array");
console.log("3. Use filter() when you need a subset of the array");
console.log("4. Use reduce() when you need to accumulate a value");
console.log("5. Use for...of when you need to break or use async/await");
console.log("6. Don't try to break forEach - it's not designed for that");
console.log("7. Remember forEach always returns undefined");
console.log("8. For async operations, use for...of with await or Promise.all()");
console.log("9. Consider performance: for loops are faster for large datasets");
console.log("10. Use forEach for clarity and readability, not performance");

