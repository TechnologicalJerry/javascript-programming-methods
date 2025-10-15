/**
 * Array.prototype.map() Method
 * 
 * Description:
 * The map() method creates a new array populated with the results of calling 
 * a provided function on every element in the calling array.
 * 
 * Syntax: array.map(callback(currentValue, index, array), thisArg)
 * 
 * Parameters:
 * - callback: Function that is called for every element
 *   - currentValue: The current element being processed
 *   - index (optional): The index of the current element
 *   - array (optional): The array map was called upon
 * - thisArg (optional): Value to use as 'this' when executing callback
 * 
 * Returns: A new array with each element being the result of the callback function
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

// ========================================
// BASIC EXAMPLES
// ========================================

console.log("=== Array.map() Examples ===\n");

// Example 1: Transform numbers by doubling them
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log("Example 1: Double numbers");
console.log("Input:", numbers);
console.log("Output:", doubled);
console.log("Original array unchanged:", numbers);
console.log();

// Example 2: Extract property from objects
const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 35 }
];

const userNames = users.map(user => user.name);
const userAges = users.map(user => user.age);

console.log("Example 2: Extract properties from objects");
console.log("Users:", users);
console.log("Names:", userNames);
console.log("Ages:", userAges);
console.log();

// Example 3: Transform strings
const words = ["hello", "world", "javascript", "programming"];
const capitalizedWords = words.map(word => word.toUpperCase());
const wordLengths = words.map(word => word.length);

console.log("Example 3: Transform strings");
console.log("Original words:", words);
console.log("Capitalized:", capitalizedWords);
console.log("Word lengths:", wordLengths);
console.log();

// ========================================
// ADVANCED EXAMPLES
// ========================================

// Example 4: Using index parameter
const items = ["apple", "banana", "cherry"];
const indexedItems = items.map((item, index) => `${index}: ${item}`);

console.log("Example 4: Using index parameter");
console.log("Input:", items);
console.log("Output:", indexedItems);
console.log();

// Example 5: Complex transformation
const products = [
    { name: "Laptop", price: 999.99, category: "Electronics" },
    { name: "Book", price: 19.99, category: "Education" },
    { name: "Phone", price: 599.99, category: "Electronics" }
];

const productSummary = products.map(product => ({
    name: product.name,
    priceCategory: product.price > 500 ? "Expensive" : "Affordable",
    formattedPrice: `$${product.price.toFixed(2)}`
}));

console.log("Example 5: Complex transformation");
console.log("Original products:", products);
console.log("Product summary:", productSummary);
console.log();

// Example 6: Chaining with other array methods
const scores = [85, 92, 78, 96, 88];
const processedScores = scores
    .map(score => score + 5) // Add bonus points
    .filter(score => score >= 90) // Keep only high scores
    .map(score => `Grade: ${score >= 95 ? 'A+' : 'A'}`); // Convert to grades

console.log("Example 6: Chaining with other methods");
console.log("Original scores:", scores);
console.log("Processed scores:", processedScores);
console.log();

// ========================================
// CUSTOM IMPLEMENTATION
// ========================================

// Custom implementation of map method
Array.prototype.customMap = function(callback, thisArg) {
    // Handle edge cases
    if (this == null) {
        throw new TypeError('Array.prototype.customMap called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    const result = new Array(len);
    
    for (let i = 0; i < len; i++) {
        if (i in O) {
            result[i] = callback.call(thisArg, O[i], i, O);
        }
    }
    
    return result;
};

// Test custom implementation
const testArray = [1, 2, 3, 4];
const customResult = testArray.customMap(x => x * 3);

console.log("Example 7: Custom implementation");
console.log("Input:", testArray);
console.log("Custom map result:", customResult);
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: API data transformation
const apiResponse = [
    { user_id: 1, first_name: "John", last_name: "Doe", email: "john@example.com" },
    { user_id: 2, first_name: "Jane", last_name: "Smith", email: "jane@example.com" }
];

const frontendUsers = apiResponse.map(user => ({
    id: user.user_id,
    fullName: `${user.first_name} ${user.last_name}`,
    email: user.email,
    initials: `${user.first_name[0]}${user.last_name[0]}`
}));

console.log("Use Case 1: API data transformation");
console.log("API Response:", apiResponse);
console.log("Frontend Format:", frontendUsers);
console.log();

// Use Case 2: Mathematical operations
const temperatures = [32, 68, 86, 104]; // Fahrenheit
const celsiusTemperatures = temperatures.map(f => ((f - 32) * 5/9).toFixed(1));

console.log("Use Case 2: Temperature conversion");
console.log("Fahrenheit:", temperatures);
console.log("Celsius:", celsiusTemperatures);
console.log();

// Use Case 3: React-like component mapping
const menuItems = ["Home", "About", "Services", "Contact"];
const navElements = menuItems.map((item, index) => ({
    id: index,
    label: item,
    href: `/${item.toLowerCase()}`,
    isActive: index === 0
}));

console.log("Use Case 3: Navigation elements");
console.log("Menu items:", menuItems);
console.log("Nav elements:", navElements);
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Comparison ===");

// Performance test
const largeArray = Array.from({ length: 100000 }, (_, i) => i);

console.time("map() performance");
const mappedLarge = largeArray.map(x => x * 2);
console.timeEnd("map() performance");

console.time("for loop performance");
const forLoopResult = [];
for (let i = 0; i < largeArray.length; i++) {
    forLoopResult.push(largeArray[i] * 2);
}
console.timeEnd("for loop performance");

console.log();

// ========================================
// COMMON MISTAKES AND GOTCHAS
// ========================================

console.log("=== Common Mistakes ===");

// Mistake 1: Modifying original array
const originalArray = [{ value: 1 }, { value: 2 }];
const modifiedIncorrectly = originalArray.map(obj => {
    obj.value *= 2; // This modifies the original!
    return obj;
});

console.log("Mistake 1 - Original array modified:", originalArray);

// Correct way
const originalArray2 = [{ value: 1 }, { value: 2 }];
const modifiedCorrectly = originalArray2.map(obj => ({
    ...obj,
    value: obj.value * 2
}));

console.log("Correct way - Original array unchanged:", originalArray2);
console.log("Modified correctly:", modifiedCorrectly);
console.log();

// Mistake 2: Not returning a value
const numbersWithUndefined = [1, 2, 3].map(num => {
    if (num > 2) {
        return num * 2;
    }
    // Missing return statement for other cases
});

console.log("Mistake 2 - Missing return:", numbersWithUndefined);

// Best practices summary
console.log("=== Best Practices ===");
console.log("1. Always return a value from the callback function");
console.log("2. Don't modify the original array elements");
console.log("3. Use map() for transformation, not for side effects");
console.log("4. Consider performance for very large arrays");
console.log("5. Chain with other array methods for complex operations");