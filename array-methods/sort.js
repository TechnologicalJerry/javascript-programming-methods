/**
 * Array.prototype.sort() Method
 * 
 * Description:
 * The sort() method sorts the elements of an array in place and returns the sorted array.
 * Default sort order is ascending, built upon converting elements to strings.
 * 
 * Syntax: array.sort([compareFunction])
 * 
 * Parameters:
 * - compareFunction (optional): Function that defines the sort order
 *   - If omitted, array is sorted by converting elements to strings
 *   - compareFunction(a, b) should return:
 *     < 0 : a comes before b
 *     = 0 : a and b order unchanged
 *     > 0 : b comes before a
 * 
 * Returns: The sorted array (same array, sorted in place)
 * 
 * ⚠️ WARNING: sort() mutates the original array!
 * 
 * Time Complexity: O(n log n) average
 * Space Complexity: O(1) or O(n) depending on implementation
 */

// ========================================
// BASIC SORTING
// ========================================

console.log("=== Array.sort() Examples ===\n");

// Example 1: Default string sort
console.log("Example 1: Default string sort");

const fruits = ["banana", "apple", "cherry", "date"];
console.log("Before sort:", fruits);
fruits.sort();
console.log("After sort:", fruits);
console.log("Note: Original array is modified!\n");

// Example 2: Numeric sort problem with default sort
console.log("Example 2: Default sort with numbers (WRONG!)");

const numbers = [1, 2, 10, 21, 3, 100];
console.log("Before sort:", numbers);

const defaultSorted = [...numbers].sort(); // Using spread to avoid mutation
console.log("Default sort (WRONG):", defaultSorted);
console.log("Problem: Numbers converted to strings ('10' < '2')");
console.log();

// Example 3: Correct numeric sort
console.log("Example 3: Correct numeric sort");

const numericSorted = [...numbers].sort((a, b) => a - b);
console.log("Ascending (a - b):", numericSorted);

const descendingSorted = [...numbers].sort((a, b) => b - a);
console.log("Descending (b - a):", descendingSorted);
console.log();

// ========================================
// SORTING OBJECTS
// ========================================

// Example 4: Sorting objects by property
console.log("Example 4: Sorting objects by property");

const users = [
    { name: "John", age: 35 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 28 }
];

console.log("Original users:", users);

// Sort by age (ascending)
const byAgeAsc = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by age (ascending):", byAgeAsc);

// Sort by name (alphabetically)
const byName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by name:", byName);

// Sort by age (descending)
const byAgeDesc = [...users].sort((a, b) => b.age - a.age);
console.log("Sorted by age (descending):", byAgeDesc);
console.log();

// Example 5: Multi-level sorting
console.log("Example 5: Multi-level sorting");

const employees = [
    { name: "John", department: "IT", salary: 70000 },
    { name: "Jane", department: "HR", salary: 65000 },
    { name: "Bob", department: "IT", salary: 80000 },
    { name: "Alice", department: "HR", salary: 65000 },
    { name: "Charlie", department: "IT", salary: 70000 }
];

// Sort by department, then by salary
const multiSort = [...employees].sort((a, b) => {
    // First, compare departments
    const deptCompare = a.department.localeCompare(b.department);
    if (deptCompare !== 0) return deptCompare;
    
    // If departments are same, compare salaries
    return b.salary - a.salary; // Higher salary first
});

console.log("Sorted by department, then salary (desc):");
multiSort.forEach(emp => {
    console.log(`  ${emp.department} - ${emp.name}: $${emp.salary}`);
});
console.log();

// ========================================
// ADVANCED SORTING TECHNIQUES
// ========================================

// Example 6: Case-insensitive string sort
console.log("Example 6: Case-insensitive string sort");

const names = ["john", "Alice", "BOB", "charlie", "DAVID"];
console.log("Original:", names);

const caseSensitive = [...names].sort();
console.log("Case-sensitive:", caseSensitive);

const caseInsensitive = [...names].sort((a, b) => 
    a.toLowerCase().localeCompare(b.toLowerCase())
);
console.log("Case-insensitive:", caseInsensitive);
console.log();

// Example 7: Sorting with locale
console.log("Example 7: Locale-aware sorting");

const countries = ["Österreich", "Andorra", "Vietnam", "Åland"];
console.log("Original:", countries);

const defaultSort = [...countries].sort();
console.log("Default sort:", defaultSort);

const localeSort = [...countries].sort((a, b) => a.localeCompare(b, 'en'));
console.log("Locale sort (en):", localeSort);
console.log();

// Example 8: Sorting by date
console.log("Example 8: Sorting by date");

const events = [
    { name: "Event A", date: new Date("2024-03-15") },
    { name: "Event B", date: new Date("2024-01-10") },
    { name: "Event C", date: new Date("2024-06-20") },
    { name: "Event D", date: new Date("2024-02-05") }
];

const sortedByDate = [...events].sort((a, b) => a.date - b.date);

console.log("Sorted by date:");
sortedByDate.forEach(event => {
    console.log(`  ${event.name}: ${event.date.toLocaleDateString()}`);
});
console.log();

// ========================================
// SPECIAL SORTING CASES
// ========================================

// Example 9: Sorting with custom order
console.log("Example 9: Custom priority sorting");

const priorities = { high: 1, medium: 2, low: 3 };

const tasks = [
    { name: "Fix bug", priority: "low" },
    { name: "Deploy app", priority: "high" },
    { name: "Code review", priority: "medium" },
    { name: "Update docs", priority: "low" },
    { name: "Security patch", priority: "high" }
];

const sortedByPriority = [...tasks].sort((a, b) => 
    priorities[a.priority] - priorities[b.priority]
);

console.log("Sorted by priority:");
sortedByPriority.forEach(task => {
    console.log(`  [${task.priority.toUpperCase()}] ${task.name}`);
});
console.log();

// Example 10: Sorting with nulls/undefined
console.log("Example 10: Sorting with null/undefined values");

const mixedArray = [5, null, 2, undefined, 8, null, 1];
console.log("Original:", mixedArray);

const sortedWithNulls = [...mixedArray].sort((a, b) => {
    if (a == null) return 1;  // Push nulls to end
    if (b == null) return -1;
    return a - b;
});

console.log("Sorted (nulls at end):", sortedWithNulls);
console.log();

// ========================================
// SORTING ALGORITHMS AND STABILITY
// ========================================

// Example 11: Sort stability
console.log("Example 11: Sort stability");

const students = [
    { name: "John", grade: 85, id: 1 },
    { name: "Jane", grade: 90, id: 2 },
    { name: "Bob", grade: 85, id: 3 },
    { name: "Alice", grade: 90, id: 4 },
    { name: "Charlie", grade: 85, id: 5 }
];

console.log("Original order:");
students.forEach(s => console.log(`  ${s.name} (Grade: ${s.grade}, ID: ${s.id})`));

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);

console.log("\nSorted by grade (desc):");
sortedByGrade.forEach(s => console.log(`  ${s.name} (Grade: ${s.grade}, ID: ${s.id})`));
console.log("Note: Students with same grade maintain original order (stable sort)");
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Leaderboard
console.log("Use Case 1: Leaderboard");

const players = [
    { name: "Player1", score: 1500, wins: 10 },
    { name: "Player2", score: 2000, wins: 15 },
    { name: "Player3", score: 1800, wins: 12 },
    { name: "Player4", score: 2000, wins: 14 },
    { name: "Player5", score: 1500, wins: 11 }
];

const leaderboard = [...players].sort((a, b) => {
    // Sort by score (desc), then by wins (desc)
    if (b.score !== a.score) return b.score - a.score;
    return b.wins - a.wins;
});

console.log("Leaderboard:");
leaderboard.forEach((player, index) => {
    console.log(`  ${index + 1}. ${player.name} - Score: ${player.score}, Wins: ${player.wins}`);
});
console.log();

// Use Case 2: Product listing
console.log("Use Case 2: Product sorting");

const products = [
    { name: "Laptop", price: 999, rating: 4.5, stock: 5 },
    { name: "Mouse", price: 25, rating: 4.8, stock: 50 },
    { name: "Keyboard", price: 75, rating: 4.2, stock: 0 },
    { name: "Monitor", price: 300, rating: 4.7, stock: 10 }
];

// Sort by: in stock first, then by rating, then by price
const sortedProducts = [...products].sort((a, b) => {
    // In stock items first
    if ((a.stock > 0) !== (b.stock > 0)) {
        return a.stock > 0 ? -1 : 1;
    }
    
    // Higher rating first
    if (Math.abs(b.rating - a.rating) > 0.01) {
        return b.rating - a.rating;
    }
    
    // Lower price first
    return a.price - b.price;
});

console.log("Sorted products (stock > rating > price):");
sortedProducts.forEach(p => {
    const stockStr = p.stock > 0 ? `${p.stock} in stock` : 'Out of stock';
    console.log(`  ${p.name} - $${p.price}, ⭐${p.rating}, ${stockStr}`);
});
console.log();

// Use Case 3: Timeline sorting
console.log("Use Case 3: Timeline/activity feed");

const activities = [
    { user: "John", action: "posted", timestamp: Date.now() - 3600000 },
    { user: "Jane", action: "commented", timestamp: Date.now() - 1800000 },
    { user: "Bob", action: "liked", timestamp: Date.now() - 600000 },
    { user: "Alice", action: "shared", timestamp: Date.now() - 7200000 }
];

const timeline = [...activities].sort((a, b) => b.timestamp - a.timestamp);

console.log("Activity feed (newest first):");
timeline.forEach(activity => {
    const timeAgo = Math.floor((Date.now() - activity.timestamp) / 60000);
    console.log(`  ${activity.user} ${activity.action} (${timeAgo} minutes ago)`);
});
console.log();

// ========================================
// HELPER FUNCTIONS
// ========================================

console.log("=== Sorting Helper Functions ===\n");

// Helper 1: Generic sort by property
function sortByProperty(array, property, descending = false) {
    return [...array].sort((a, b) => {
        const aVal = a[property];
        const bVal = b[property];
        
        if (typeof aVal === 'string') {
            return descending 
                ? bVal.localeCompare(aVal)
                : aVal.localeCompare(bVal);
        }
        
        return descending ? bVal - aVal : aVal - bVal;
    });
}

// Helper 2: Multi-property sort
function sortByProperties(array, ...properties) {
    return [...array].sort((a, b) => {
        for (const prop of properties) {
            const { key, descending = false } = typeof prop === 'string' 
                ? { key: prop } 
                : prop;
            
            const aVal = a[key];
            const bVal = b[key];
            
            let comparison = 0;
            if (typeof aVal === 'string') {
                comparison = aVal.localeCompare(bVal);
            } else {
                comparison = aVal - bVal;
            }
            
            if (comparison !== 0) {
                return descending ? -comparison : comparison;
            }
        }
        return 0;
    });
}

// Test helpers
console.log("Using sortByProperty helper:");
const testUsers = [
    { name: "Charlie", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
];

console.log("By name:", sortByProperty(testUsers, 'name'));
console.log("By age (desc):", sortByProperty(testUsers, 'age', true));
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Considerations ===\n");

const largeArray = Array.from({ length: 10000 }, () => 
    Math.floor(Math.random() * 1000)
);

console.log("Sorting 10,000 random numbers:");

console.time("Sort performance");
const sorted = [...largeArray].sort((a, b) => a - b);
console.timeEnd("Sort performance");

console.log("First 10 elements:", sorted.slice(0, 10));
console.log();

// ========================================
// CUSTOM IMPLEMENTATION
// ========================================

// Simple bubble sort implementation (for educational purposes)
Array.prototype.bubbleSort = function(compareFunction) {
    const arr = [...this];
    const compare = compareFunction || ((a, b) => {
        if (String(a) < String(b)) return -1;
        if (String(a) > String(b)) return 1;
        return 0;
    });
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (compare(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    
    return arr;
};

console.log("Custom bubble sort test:");
const customTest = [64, 34, 25, 12, 22, 11, 90];
console.log("Before:", customTest);
console.log("After bubble sort:", customTest.bubbleSort((a, b) => a - b));
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Always use compare function for numbers: (a, b) => a - b");
console.log("2. Remember: sort() mutates the original array");
console.log("3. Use spread operator [...array] to avoid mutation");
console.log("4. Use localeCompare() for string sorting");
console.log("5. Handle null/undefined values explicitly in compare function");
console.log("6. For multi-level sorting, compare each level in order");
console.log("7. Return 0 in compare function to maintain original order");
console.log("8. Modern JavaScript uses stable sort (as of ES2019)");
console.log("9. Consider performance for large arrays (sort is O(n log n))");
console.log("10. Use locale-aware sorting for international text");

console.log("\n=== Common Patterns ===");

// Pattern 1: Sort and preserve original
const preserve = (arr, compareFn) => [...arr].sort(compareFn);

// Pattern 2: Reverse sort shorthand
const reverseSort = (arr) => [...arr].sort((a, b) => b - a);

// Pattern 3: Random shuffle (Fisher-Yates)
const shuffle = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

console.log("\nShuffled array:", shuffle([1, 2, 3, 4, 5]));

