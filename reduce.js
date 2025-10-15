/**
 * Array.prototype.reduce() Method
 * 
 * Description:
 * The reduce() method executes a reducer function on each element of the array,
 * resulting in a single output value.
 * 
 * Syntax: array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
 * 
 * Parameters:
 * - callback: Function to execute on each element
 *   - accumulator: The accumulator accumulates callback's return values
 *   - currentValue: The current element being processed
 *   - currentIndex (optional): The index of the current element
 *   - array (optional): The array reduce was called upon
 * - initialValue (optional): Value to use as first argument to first call of callback
 * 
 * Returns: The single value that results from running the reducer function to completion
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(1) for the reduction itself, but depends on what you're building
 */

// ========================================
// BASIC EXAMPLES
// ========================================

console.log("=== Array.reduce() Examples ===\n");

// Example 1: Sum all numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);

console.log("Example 1: Sum all numbers");
console.log("Input:", numbers);
console.log("Sum:", sum);
console.log();

// Example 2: Find maximum value
const scores = [85, 92, 78, 96, 88];
const maxScore = scores.reduce((max, current) => current > max ? current : max);
const minScore = scores.reduce((min, current) => current < min ? current : min);

console.log("Example 2: Find maximum and minimum");
console.log("Scores:", scores);
console.log("Max score:", maxScore);
console.log("Min score:", minScore);
console.log();

// Example 3: Concatenate strings
const words = ["Hello", " ", "World", "!", " ", "JavaScript", " ", "rocks!"];
const sentence = words.reduce((acc, word) => acc + word, "");

console.log("Example 3: Concatenate strings");
console.log("Words:", words);
console.log("Sentence:", sentence);
console.log();

// ========================================
// WORKING WITH OBJECTS
// ========================================

// Example 4: Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log("Example 4: Count occurrences");
console.log("Fruits:", fruits);
console.log("Count:", fruitCount);
console.log();

// Example 5: Group by property
const people = [
    { name: "John", age: 25, department: "Engineering" },
    { name: "Jane", age: 30, department: "Marketing" },
    { name: "Bob", age: 35, department: "Engineering" },
    { name: "Alice", age: 28, department: "Marketing" },
    { name: "Charlie", age: 32, department: "Sales" }
];

const groupedByDepartment = people.reduce((acc, person) => {
    const dept = person.department;
    if (!acc[dept]) {
        acc[dept] = [];
    }
    acc[dept].push(person);
    return acc;
}, {});

console.log("Example 5: Group by department");
console.log("People:", people);
console.log("Grouped:", groupedByDepartment);
console.log();

// Example 6: Transform array to object
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 599 },
    { id: 3, name: "Tablet", price: 399 }
];

const productMap = products.reduce((acc, product) => {
    acc[product.id] = { name: product.name, price: product.price };
    return acc;
}, {});

console.log("Example 6: Transform array to object");
console.log("Products array:", products);
console.log("Product map:", productMap);
console.log();

// ========================================
// ADVANCED OPERATIONS
// ========================================

// Example 7: Calculate average
const grades = [85, 90, 78, 92, 88, 76, 95];
const average = grades.reduce((sum, grade, index, array) => {
    sum += grade;
    return index === array.length - 1 ? sum / array.length : sum;
}, 0);

console.log("Example 7: Calculate average");
console.log("Grades:", grades);
console.log("Average:", average.toFixed(2));
console.log();

// Example 8: Flatten nested arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6, 7], [8]];
const flattened = nestedArrays.reduce((acc, array) => acc.concat(array), []);

console.log("Example 8: Flatten nested arrays");
console.log("Nested:", nestedArrays);
console.log("Flattened:", flattened);
console.log();

// Example 9: Remove duplicates
const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 1, 6];
const uniqueNumbers = numbersWithDuplicates.reduce((acc, current) => {
    if (!acc.includes(current)) {
        acc.push(current);
    }
    return acc;
}, []);

console.log("Example 9: Remove duplicates");
console.log("With duplicates:", numbersWithDuplicates);
console.log("Unique:", uniqueNumbers);
console.log();

// Example 10: Build complex data structures
const transactions = [
    { id: 1, amount: 100, type: "credit", category: "salary" },
    { id: 2, amount: 50, type: "debit", category: "food" },
    { id: 3, amount: 200, type: "credit", category: "bonus" },
    { id: 4, amount: 30, type: "debit", category: "transport" },
    { id: 5, amount: 80, type: "debit", category: "food" }
];

const financialSummary = transactions.reduce((acc, transaction) => {
    // Update totals
    if (transaction.type === "credit") {
        acc.totalIncome += transaction.amount;
    } else {
        acc.totalExpenses += transaction.amount;
    }
    
    // Group by category
    if (!acc.byCategory[transaction.category]) {
        acc.byCategory[transaction.category] = { credit: 0, debit: 0 };
    }
    acc.byCategory[transaction.category][transaction.type] += transaction.amount;
    
    // Track transaction count
    acc.transactionCount++;
    
    return acc;
}, {
    totalIncome: 0,
    totalExpenses: 0,
    byCategory: {},
    transactionCount: 0
});

// Calculate net balance
financialSummary.netBalance = financialSummary.totalIncome - financialSummary.totalExpenses;

console.log("Example 10: Financial summary");
console.log("Transactions:", transactions);
console.log("Summary:", financialSummary);
console.log();

// ========================================
// FUNCTIONAL PROGRAMMING PATTERNS
// ========================================

// Example 11: Pipe functions
const mathOperations = [
    x => x + 5,
    x => x * 2,
    x => x - 3,
    x => Math.pow(x, 2)
];

const result = mathOperations.reduce((value, operation) => operation(value), 10);

console.log("Example 11: Pipe functions");
console.log("Starting value: 10");
console.log("Operations: +5, *2, -3, ^2");
console.log("Result:", result);
console.log();

// Example 12: Compose validation rules
const validationRules = [
    value => value.length >= 8 ? null : "Password must be at least 8 characters",
    value => /[A-Z]/.test(value) ? null : "Password must contain uppercase letter",
    value => /[a-z]/.test(value) ? null : "Password must contain lowercase letter",
    value => /\d/.test(value) ? null : "Password must contain a number"
];

function validatePassword(password) {
    return validationRules.reduce((errors, rule) => {
        const error = rule(password);
        return error ? [...errors, error] : errors;
    }, []);
}

console.log("Example 12: Password validation");
console.log("Validation for 'pass':", validatePassword("pass"));
console.log("Validation for 'Password123':", validatePassword("Password123"));
console.log();

// ========================================
// CUSTOM IMPLEMENTATION
// ========================================

// Custom implementation of reduce method
Array.prototype.customReduce = function(callback, initialValue) {
    if (this == null) {
        throw new TypeError('Array.prototype.customReduce called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }
    
    const O = Object(this);
    const len = parseInt(O.length) || 0;
    
    if (len === 0 && arguments.length < 2) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    
    let k = 0;
    let accumulator;
    
    if (arguments.length >= 2) {
        accumulator = initialValue;
    } else {
        // Find first valid element
        while (k < len && !(k in O)) {
            k++;
        }
        
        if (k >= len) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        
        accumulator = O[k++];
    }
    
    while (k < len) {
        if (k in O) {
            accumulator = callback(accumulator, O[k], k, O);
        }
        k++;
    }
    
    return accumulator;
};

// Test custom implementation
const testArray = [1, 2, 3, 4, 5];
const customSum = testArray.customReduce((a, b) => a + b, 0);

console.log("Custom implementation test:");
console.log("Input:", testArray);
console.log("Custom reduce sum:", customSum);
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Shopping cart total
const cartItems = [
    { name: "Laptop", price: 999, quantity: 1 },
    { name: "Mouse", price: 25, quantity: 2 },
    { name: "Keyboard", price: 75, quantity: 1 },
    { name: "Monitor", price: 300, quantity: 1 }
];

const cartSummary = cartItems.reduce((summary, item) => {
    const itemTotal = item.price * item.quantity;
    return {
        totalItems: summary.totalItems + item.quantity,
        totalPrice: summary.totalPrice + itemTotal,
        items: summary.items + 1
    };
}, { totalItems: 0, totalPrice: 0, items: 0 });

console.log("Use Case 1: Shopping cart");
console.log("Cart items:", cartItems);
console.log("Cart summary:", cartSummary);
console.log();

// Use Case 2: Data aggregation for reporting
const salesData = [
    { month: "Jan", sales: 1000, costs: 600, region: "North" },
    { month: "Feb", sales: 1200, costs: 700, region: "North" },
    { month: "Jan", sales: 800, costs: 500, region: "South" },
    { month: "Feb", sales: 900, costs: 550, region: "South" }
];

const report = salesData.reduce((acc, data) => {
    // Aggregate by region
    if (!acc.byRegion[data.region]) {
        acc.byRegion[data.region] = { sales: 0, costs: 0, profit: 0 };
    }
    
    acc.byRegion[data.region].sales += data.sales;
    acc.byRegion[data.region].costs += data.costs;
    acc.byRegion[data.region].profit = acc.byRegion[data.region].sales - acc.byRegion[data.region].costs;
    
    // Overall totals
    acc.totalSales += data.sales;
    acc.totalCosts += data.costs;
    
    return acc;
}, {
    byRegion: {},
    totalSales: 0,
    totalCosts: 0
});

report.totalProfit = report.totalSales - report.totalCosts;

console.log("Use Case 2: Sales report");
console.log("Sales data:", salesData);
console.log("Report:", report);
console.log();

// Use Case 3: Building HTML from data
const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "About", href: "/about", active: false },
    { name: "Services", href: "/services", active: false },
    { name: "Contact", href: "/contact", active: false }
];

const navigationHTML = menuItems.reduce((html, item) => {
    const activeClass = item.active ? ' class="active"' : '';
    return html + `<li${activeClass}><a href="${item.href}">${item.name}</a></li>\n`;
}, '');

console.log("Use Case 3: Building HTML");
console.log("Menu items:", menuItems);
console.log("Generated HTML:");
console.log(navigationHTML);

// ========================================
// PERFORMANCE AND BEST PRACTICES
// ========================================

console.log("=== Performance Considerations ===");

const largeArray = Array.from({ length: 100000 }, (_, i) => i + 1);

console.time("reduce() sum");
const reduceSum = largeArray.reduce((sum, num) => sum + num, 0);
console.timeEnd("reduce() sum");

console.time("for loop sum");
let forLoopSum = 0;
for (let i = 0; i < largeArray.length; i++) {
    forLoopSum += largeArray[i];
}
console.timeEnd("for loop sum");

console.log("Results equal:", reduceSum === forLoopSum);
console.log();

console.log("=== Best Practices ===");
console.log("1. Always provide an initial value when possible");
console.log("2. Keep the reducer function pure (no side effects)");
console.log("3. Consider performance for large datasets");
console.log("4. Use reduce for transforming arrays into different data types");
console.log("5. Break complex reductions into smaller, composable functions");
console.log("6. Use descriptive variable names for accumulator and current value");

// Common mistakes to avoid
console.log("\n=== Common Mistakes ===");

// Mistake 1: Not providing initial value for empty arrays
try {
    [].reduce((a, b) => a + b); // This will throw an error
} catch (error) {
    console.log("Error with empty array and no initial value:", error.message);
}

// Mistake 2: Mutating the accumulator
const wrongWay = [1, 2, 3].reduce((acc, num) => {
    acc.push(num * 2); // Mutating the accumulator
    return acc;
}, []);

const rightWay = [1, 2, 3].reduce((acc, num) => {
    return [...acc, num * 2]; // Creating new array
}, []);

console.log("Wrong way (mutating):", wrongWay);
console.log("Right way (immutable):", rightWay);