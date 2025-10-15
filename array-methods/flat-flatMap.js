/**
 * Array.prototype.flat() and Array.prototype.flatMap() Methods
 * 
 * Description:
 * - flat(): Creates a new array with all sub-array elements concatenated (ES2019)
 * - flatMap(): Maps each element using a mapping function, then flattens the result (ES2019)
 * 
 * Syntax:
 * - array.flat(depth)
 * - array.flatMap(callback(currentValue, index, array), thisArg)
 * 
 * Parameters:
 * - depth (flat): How deep to flatten (default: 1, Infinity for all levels)
 * - callback (flatMap): Function to execute for each element
 * 
 * Returns: A new flattened array
 * 
 * Time Complexity: O(n * depth) for flat, O(n) for flatMap
 * Space Complexity: O(n)
 */

// ========================================
// ARRAY.PROTOTYPE.FLAT() EXAMPLES
// ========================================

console.log("=== Array.flat() Examples ===\n");

// Example 1: Basic flat() usage
console.log("Example 1: Basic flat() with depth 1");

const nestedArray1 = [1, 2, [3, 4], 5];
console.log("Original:", nestedArray1);
console.log("Flattened:", nestedArray1.flat());
console.log();

// Example 2: Flattening multiple levels
console.log("Example 2: Different depth levels");

const deeplyNested = [1, [2, [3, [4, [5]]]]];
console.log("Original:", deeplyNested);
console.log("flat():", deeplyNested.flat()); // depth 1
console.log("flat(2):", deeplyNested.flat(2)); // depth 2
console.log("flat(3):", deeplyNested.flat(3)); // depth 3
console.log("flat(Infinity):", deeplyNested.flat(Infinity)); // all levels
console.log();

// Example 3: Complex nested structure
console.log("Example 3: Complex nested arrays");

const complex = [
    [1, 2],
    [3, 4, [5, 6]],
    [7, [8, [9, 10]]]
];

console.log("Original:", complex);
console.log("flat():", complex.flat());
console.log("flat(2):", complex.flat(2));
console.log("flat(Infinity):", complex.flat(Infinity));
console.log();

// Example 4: Removing empty slots
console.log("Example 4: Removing empty slots with flat()");

const withHoles = [1, 2, , 4, 5];
const nestedWithHoles = [1, 2, [3, , 4], , 5];

console.log("Array with holes:", withHoles);
console.log("After flat():", withHoles.flat());

console.log("\nNested with holes:", nestedWithHoles);
console.log("After flat():", nestedWithHoles.flat());
console.log("Note: flat() removes empty slots");
console.log();

// ========================================
// ARRAY.PROTOTYPE.FLATMAP() EXAMPLES
// ========================================

console.log("=== Array.flatMap() Examples ===\n");

// Example 5: Basic flatMap() usage
console.log("Example 5: Basic flatMap()");

const numbers = [1, 2, 3, 4];
console.log("Original:", numbers);

// Regular map returns nested arrays
const mapped = numbers.map(x => [x, x * 2]);
console.log("map(x => [x, x * 2]):", mapped);

// flatMap flattens the result
const flatMapped = numbers.flatMap(x => [x, x * 2]);
console.log("flatMap(x => [x, x * 2]):", flatMapped);
console.log();

// Example 6: Splitting strings
console.log("Example 6: Splitting and flattening strings");

const sentences = ["Hello World", "How are you"];
console.log("Sentences:", sentences);

const words = sentences.flatMap(sentence => sentence.split(" "));
console.log("Words:", words);

// Compare with map + flat
const wordsMapFlat = sentences.map(sentence => sentence.split(" ")).flat();
console.log("map + flat:", wordsMapFlat);
console.log("Same result, but flatMap is more efficient");
console.log();

// Example 7: Filtering and transforming
console.log("Example 7: Conditional flattening");

const values = [1, 2, 3, 4, 5];
console.log("Values:", values);

// Double even numbers, remove odd numbers
const processed = values.flatMap(x => 
    x % 2 === 0 ? [x, x * 2] : []
);
console.log("Double evens, remove odds:", processed);

// Add negative for each number
const withNegatives = values.flatMap(x => [x, -x]);
console.log("With negatives:", withNegatives);
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

// Use Case 1: Flattening nested data structures
console.log("Use Case 1: Flattening nested data");

const departments = [
    {
        name: "Engineering",
        teams: [
            { name: "Frontend", members: ["Alice", "Bob"] },
            { name: "Backend", members: ["Charlie", "David"] }
        ]
    },
    {
        name: "Marketing",
        teams: [
            { name: "Content", members: ["Eve", "Frank"] }
        ]
    }
];

// Get all team names
const teamNames = departments.flatMap(dept => 
    dept.teams.map(team => team.name)
);
console.log("All team names:", teamNames);

// Get all members
const allMembers = departments.flatMap(dept => 
    dept.teams.flatMap(team => team.members)
);
console.log("All members:", allMembers);
console.log();

// Use Case 2: Processing search results
console.log("Use Case 2: Search results processing");

const searchResults = [
    { query: "javascript", results: ["MDN", "W3Schools", "JavaScript.info"] },
    { query: "python", results: ["Python.org", "Real Python"] },
    { query: "java", results: ["Oracle", "Baeldung", "JavaPoint"] }
];

// Flatten all results
const allResults = searchResults.flatMap(search => search.results);
console.log("All results:", allResults);

// Get results with query context
const resultsWithContext = searchResults.flatMap(search => 
    search.results.map(result => ({
        result,
        query: search.query
    }))
);
console.log("\nResults with context:");
console.log(resultsWithContext);
console.log();

// Use Case 3: Event processing
console.log("Use Case 3: Event processing");

const events = [
    { type: "click", targets: ["button1", "button2"] },
    { type: "hover", targets: ["div1"] },
    { type: "click", targets: ["button3"] }
];

// Create event-target pairs
const eventTargetPairs = events.flatMap(event => 
    event.targets.map(target => ({ event: event.type, target }))
);

console.log("Event-target pairs:");
console.log(eventTargetPairs);
console.log();

// Use Case 4: Menu flattening
console.log("Use Case 4: Navigation menu flattening");

const menu = [
    {
        category: "Products",
        items: [
            { name: "Laptops", url: "/laptops" },
            { name: "Phones", url: "/phones" }
        ]
    },
    {
        category: "Services",
        items: [
            { name: "Support", url: "/support" },
            { name: "Training", url: "/training" }
        ]
    }
];

const allMenuItems = menu.flatMap(category => category.items);
console.log("All menu items:", allMenuItems);

// Get all URLs
const allUrls = menu.flatMap(category => 
    category.items.map(item => item.url)
);
console.log("All URLs:", allUrls);
console.log();

// ========================================
// ADVANCED PATTERNS
// ========================================

// Example 8: Flattening with transformation
console.log("Example 8: Complex transformation");

const data = [
    { id: 1, tags: ["javascript", "web"] },
    { id: 2, tags: ["python", "data"] },
    { id: 3, tags: ["javascript", "node"] }
];

// Get all unique tags
const allTags = [...new Set(data.flatMap(item => item.tags))];
console.log("Unique tags:", allTags);

// Find items by tag
function getItemsByTag(tag) {
    return data.filter(item => item.tags.includes(tag));
}
console.log("Items with 'javascript' tag:", getItemsByTag("javascript"));
console.log();

// Example 9: Matrix operations
console.log("Example 9: Matrix operations");

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Matrix:", matrix);

// Flatten matrix to 1D array
const flatMatrix = matrix.flat();
console.log("Flattened:", flatMatrix);

// Get diagonal elements
const diagonal = matrix.map((row, i) => row[i]);
console.log("Diagonal:", diagonal);

// Double all elements
const doubled = matrix.flatMap(row => row.map(num => num * 2));
console.log("All elements doubled:", doubled);
console.log();

// Example 10: Recursive flattening
console.log("Example 10: Custom recursive flatten");

function recursiveFlatten(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(
            Array.isArray(item) ? recursiveFlatten(item) : item
        );
    }, []);
}

const veryNested = [1, [2, [3, [4, [5, 6]]]], 7, [8, [9]]];
console.log("Very nested:", veryNested);
console.log("Recursively flattened:", recursiveFlatten(veryNested));
console.log("Same as flat(Infinity):", veryNested.flat(Infinity));
console.log();

// ========================================
// FLATMAP VS MAP + FLAT
// ========================================

console.log("=== flatMap vs map + flat ===\n");

const testArray = [1, 2, 3];

// Using map + flat
console.time("map + flat");
const result1 = testArray.map(x => [x, x * 2]).flat();
console.timeEnd("map + flat");

// Using flatMap
console.time("flatMap");
const result2 = testArray.flatMap(x => [x, x * 2]);
console.timeEnd("flatMap");

console.log("Results are equal:", JSON.stringify(result1) === JSON.stringify(result2));
console.log("flatMap is more efficient (single pass)");
console.log();

// ========================================
// EDGE CASES
// ========================================

console.log("=== Edge Cases ===\n");

// Example 11: Empty arrays
console.log("Example 11: Empty arrays");

const withEmpty = [1, [], 2, [3, []], 4];
console.log("With empty arrays:", withEmpty);
console.log("flat():", withEmpty.flat());
console.log("flat(2):", withEmpty.flat(2));
console.log();

// Example 12: Non-array elements
console.log("Example 12: Mixed types");

const mixed = [1, [2, 3], "hello", [4, "world"], { x: 5 }];
console.log("Mixed types:", mixed);
console.log("flat():", mixed.flat());
console.log();

// Example 13: flatMap returning non-arrays
console.log("Example 13: flatMap with various returns");

const nums = [1, 2, 3];

// Returning arrays - flattened
const arrays = nums.flatMap(x => [x, x * 2]);
console.log("Returning arrays:", arrays);

// Returning single values - wrapped in array
const singles = nums.flatMap(x => x * 2);
console.log("Returning singles:", singles);

// Returning empty arrays - filtered out
const conditional = nums.flatMap(x => x % 2 === 0 ? [x] : []);
console.log("Conditional (evens only):", conditional);
console.log();

// ========================================
// CUSTOM IMPLEMENTATIONS
// ========================================

// Custom flat implementation
Array.prototype.customFlat = function(depth = 1) {
    const flatten = (arr, d) => {
        if (d < 1) return arr.slice();
        
        return arr.reduce((acc, val) => {
            if (Array.isArray(val)) {
                acc.push(...flatten(val, d - 1));
            } else {
                acc.push(val);
            }
            return acc;
        }, []);
    };
    
    return flatten(this, depth);
};

// Custom flatMap implementation
Array.prototype.customFlatMap = function(callback, thisArg) {
    return this.reduce((acc, val, index, array) => {
        const result = callback.call(thisArg, val, index, array);
        if (Array.isArray(result)) {
            acc.push(...result);
        } else {
            acc.push(result);
        }
        return acc;
    }, []);
};

// Test custom implementations
console.log("Custom implementation test:");
const testNested = [1, [2, [3, 4]], 5];
console.log("Original:", testNested);
console.log("customFlat():", testNested.customFlat());
console.log("customFlat(2):", testNested.customFlat(2));

const testFlatMap = [1, 2, 3];
console.log("\ncustomFlatMap test:", testFlatMap.customFlatMap(x => [x, x * 2]));
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Considerations ===\n");

const largeNested = Array.from({ length: 1000 }, (_, i) => [i, i + 1]);

console.time("flat() performance");
largeNested.flat();
console.timeEnd("flat() performance");

console.time("map + flat performance");
largeNested.map(x => x).flat();
console.timeEnd("map + flat performance");

console.time("flatMap performance");
largeNested.flatMap(x => x);
console.timeEnd("flatMap performance");

console.log("flatMap is optimized for single-level flattening");
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use flat() to flatten nested arrays up to specified depth");
console.log("2. Use flat(Infinity) to flatten all levels");
console.log("3. Use flatMap() instead of map().flat() for better performance");
console.log("4. flatMap() only flattens one level deep");
console.log("5. Use flatMap() to filter and map in one operation");
console.log("6. flat() removes empty slots from sparse arrays");
console.log("7. Both methods return new arrays (don't mutate original)");
console.log("8. Consider performance for very large or deeply nested arrays");
console.log("9. flatMap() is equivalent to map() followed by flat(1)");
console.log("10. Use reduce() for custom flattening logic");

console.log("\n=== Common Patterns ===");

// Pattern 1: Flatten and filter
const flattenAndFilter = (arr, predicate) => 
    arr.flat(Infinity).filter(predicate);

// Pattern 2: Flatten object values
const flattenObjectValues = (obj) => 
    Object.values(obj).flat();

// Pattern 3: Remove falsy values while flattening
const flattenAndCompact = (arr) => 
    arr.flat(Infinity).filter(Boolean);

// Pattern 4: Flatten and deduplicate
const flattenUnique = (arr) => 
    [...new Set(arr.flat(Infinity))];

console.log("\nFlatten and deduplicate:");
const dupes = [[1, 2], [2, 3], [3, 4]];
console.log("Original:", dupes);
console.log("Flattened unique:", flattenUnique(dupes));

// Pattern 5: Conditional flattening with flatMap
const filterMap = (arr, predicate, mapper) => 
    arr.flatMap(item => predicate(item) ? [mapper(item)] : []);

console.log("\nFilter and map in one operation:");
console.log(filterMap([1, 2, 3, 4, 5], x => x % 2 === 0, x => x * 2));

