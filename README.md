# JavaScript Programming Methods

A comprehensive collection of JavaScript programming methods with detailed explanations, practical examples, and best practices.

## 📁 Project Structure

```
javascript-programming-methods/
├── array-static-methods.js   - Static array methods (from, isArray, of, fromAsync)
├── array-copy-methods.js     - Modern non-mutating copy methods (toSorted, toReversed, toSpliced, with, at)
├── concat-join-reverse.js    - Array concatenation and reversal
├── filter.js                 - Filter array elements by condition
├── find.js                   - Search methods (find, findIndex, findLast, findLastIndex)
├── flat-flatMap.js           - Flatten nested arrays
├── forEach.js                - Iterate over array elements
├── includes-indexOf.js       - Array search methods
├── map.js                    - Transform array elements
├── push-pop-shift-unshift.js - Stack & Queue array operations
├── reduce.js                 - Reduce array to single value
├── slice-splice.js           - Extract and modify arrays
├── some-every.js             - Test array conditions
├── sort.js                   - Sort array elements
├── string-methods.js         - Comprehensive string operations
├── object-methods.js         - Object manipulation and utilities
├── map-set-methods.js        - Map, Set, WeakMap, WeakSet & ES2024 Set logical operations
├── function-methods.js       - Function utilities, context binding, and patterns
├── promise-methods.js        - Asynchronous programming with Promises
├── reflect-proxy-methods.js  - Reflection and Proxy traps for metaprogramming
├── math-methods.js           - Math built-in static methods
├── date-methods.js           - Date object operations, formatting, and arithmetic
├── number-bigint-methods.js  - Number static/instance methods & BigInt arithmetic
├── utility-methods.js        - General helper functions
└── index.js                  - Main entry point summary
```

## 🚀 Features

Each method implementation includes:

- ✅ **Detailed explanation** of how the method works
- ✅ **Syntax and parameters** with type information
- ✅ **Return values** clearly documented
- ✅ **Practical examples** with real-world scenarios
- ✅ **Use cases** demonstrating when to use each method
- ✅ **Best practices** and common pitfalls to avoid
- ✅ **Custom implementations** to understand internals
- ✅ **Performance considerations** and time/space complexity
- ✅ **Edge cases** and special behaviors
- ✅ **Comparison** with similar methods

## 📖 Method Categories

### 🔷 Array Methods (10 comprehensive files)

#### **Transformation Methods**
- **`map()`** - Transform each element and create new array
- **`filter()`** - Create new array with elements that pass a test
- **`reduce()`** - Reduce array to a single value
- **`flat()`** - Flatten nested arrays to specified depth
- **`flatMap()`** - Map and flatten in one operation

#### **Search Methods**
- **`find()`** - Find first element matching condition
- **`findIndex()`** - Find index of first matching element
- **`findLast()`** - Find last matching element (ES2023)
- **`findLastIndex()`** - Find index of last matching element (ES2023)
- **`includes()`** - Check if array contains a value
- **`indexOf()`** - Find first index of a value
- **`lastIndexOf()`** - Find last index of a value

#### **Iteration Methods**
- **`forEach()`** - Execute function for each element
- **`some()`** - Test if at least one element passes
- **`every()`** - Test if all elements pass

#### **Manipulation Methods**
- **`sort()`** - Sort array elements in place
- **`slice()`** - Extract portion without modifying original
- **`splice()`** - Add/remove elements (mutates array)

### 🔶 String Methods (Comprehensive coverage)

#### **Search & Access Methods**
- **`charAt()`** - Get character at specific index
- **`charCodeAt()`** - Get Unicode value at index
- **`indexOf()`** - Find first occurrence of substring
- **`lastIndexOf()`** - Find last occurrence of substring
- **`includes()`** - Check if string contains substring
- **`startsWith()`** - Check if string starts with substring
- **`endsWith()`** - Check if string ends with substring

#### **Extraction Methods**
- **`slice()`** - Extract part of string
- **`substring()`** - Extract substring
- **`substr()`** - Extract substring by length (deprecated)

#### **Transformation Methods**
- **`toLowerCase()`** - Convert to lowercase
- **`toUpperCase()`** - Convert to uppercase
- **`trim()`** - Remove whitespace from both ends
- **`trimStart()`** / **`trimEnd()`** - Remove whitespace from one end
- **`padStart()`** / **`padEnd()`** - Pad string to length
- **`repeat()`** - Repeat string n times

#### **Replace & Split Methods**
- **`replace()`** - Replace first occurrence
- **`replaceAll()`** - Replace all occurrences (ES2021)
- **`split()`** - Split string into array
- **`concat()`** - Concatenate strings

#### **Pattern Matching Methods**
- **`match()`** - Match against regex
- **`matchAll()`** - Get all regex matches (ES2020)
- **`search()`** - Search for regex pattern

### 🔸 Object Methods (Complete reference)

#### **Object Creation & Copying**
- **`Object.create()`** - Create object with specified prototype
- **`Object.assign()`** - Copy properties between objects (shallow)

#### **Property Inspection**
- **`Object.keys()`** - Get enumerable property names
- **`Object.values()`** - Get enumerable property values
- **`Object.entries()`** - Get [key, value] pairs
- **`Object.fromEntries()`** - Create object from entries
- **`Object.getOwnPropertyNames()`** - Get all property names
- **`Object.getOwnPropertyDescriptor()`** - Get property descriptor

#### **Property Definition**
- **`Object.defineProperty()`** - Define single property with descriptor
- **`Object.defineProperties()`** - Define multiple properties

#### **Object State Modification**
- **`Object.freeze()`** - Make object immutable
- **`Object.seal()`** - Prevent property addition/removal
- **`Object.preventExtensions()`** - Prevent new properties

#### **Prototype Methods**
- **`Object.getPrototypeOf()`** - Get object's prototype
- **`Object.setPrototypeOf()`** - Set object's prototype
- **`hasOwnProperty()`** - Check for own property

#### **Utility Methods**
- **`Object.is()`** - Same-value equality comparison
- **`Object.isFrozen()`** / **`isSealed()`** / **`isExtensible()`** - Check object state

### 🔹 Function Methods (Advanced patterns)

#### **Context Methods**
- **`call()`** - Invoke function with specific context
- **`apply()`** - Invoke function with arguments array
- **`bind()`** - Create bound function with fixed context

#### **Higher-Order Functions**
- Functions as arguments
- Functions returning functions
- Function composition
- Function piping

#### **Advanced Patterns**
- **Closures** - Data privacy and encapsulation
- **Currying** - Partial application of arguments
- **Memoization** - Caching function results
- **Debouncing** - Delay execution until idle
- **Throttling** - Limit execution frequency
- **Decorators** - Enhance function behavior

### ⚡ Promise Methods (Async programming)

#### **Promise Creation**
- **`Promise.resolve()`** - Create resolved promise
- **`Promise.reject()`** - Create rejected promise
- **`new Promise()`** - Create custom promise

#### **Promise Combinators**
- **`Promise.all()`** - Wait for all to resolve (fails fast)
- **`Promise.allSettled()`** - Wait for all to settle (ES2020)
- **`Promise.race()`** - Wait for first to settle
- **`Promise.any()`** - Wait for first to resolve (ES2021)

#### **Async/Await**
- **`async`** functions - Cleaner async syntax
- **`await`** operator - Wait for promise resolution
- Error handling with try/catch
- Parallel vs sequential execution

#### **Advanced Patterns**
- Retry logic
- Timeout patterns
- Circuit breaker
- Promise queues
- Batch processing

### 🛠️ Utility Methods (Comprehensive helpers)

#### **Type Checking**
- Type validators (isString, isNumber, isObject, etc.)
- Array type checking
- Null/undefined handling

#### **Object Utilities**
- **Deep clone** - Recursive object copying
- **Deep equal** - Recursive object comparison
- **Deep merge** - Merge nested objects
- Object validation

#### **Array Utilities**
- **unique()** - Remove duplicates
- **flatten()** - Flatten nested arrays
- **chunk()** - Split into chunks
- **shuffle()** - Random shuffle
- **groupBy()** - Group by property
- **partition()** - Split by predicate

#### **String Utilities**
- **Case conversion** - camelCase, kebab-case, snake_case
- **Truncate** - Limit string length
- **Template** - String interpolation
- **Slug generation** - URL-friendly strings
- **HTML escape/strip** - Security helpers

#### **Number Utilities**
- **Random** - Random number generation
- **Clamp** - Constrain to range
- **Round** - Precision rounding
- **Format** - Currency, number formatting
- **Statistics** - Average, median, std deviation

#### **Date Utilities**
- **Format** - Date formatting
- **Add/subtract** - Date arithmetic
- **Comparison** - Date differences
- **Relative time** - "2 hours ago" formatting

#### **Validation Utilities**
- Email validation
- Phone validation
- URL validation
- Credit card validation
- Password strength
- Custom validators

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (v12 or higher) or a modern web browser
- Basic understanding of JavaScript

### Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/javascript-programming-methods.git
   cd javascript-programming-methods
   ```

2. **Explore method categories**
   ```bash
   # Browse available methods
   ls array-methods/
   ls string-methods/
   ls object-methods/
   ```

3. **Run examples**
   ```bash
   # Run any method file
   node array-methods/map.js
   node string-methods/string-methods.js
   node promise-methods/promise-methods.js
   ```

## 💡 Usage Examples

### Running Individual Method Files

Each file contains comprehensive examples and can be run independently:

```bash
# Array methods
node array-methods/filter.js
node array-methods/reduce.js
node array-methods/sort.js

# String methods
node string-methods/string-methods.js

# Promise methods
node promise-methods/promise-methods.js
```

### Using in Your Projects

You can also import and use these methods as reference:

```javascript
// Study the implementations and patterns
// Then apply them in your own code

// Example: Custom filter implementation
Array.prototype.customFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
```

## 📚 Learning Path

### Beginner Level
1. Start with **Array Methods**: `map()`, `filter()`, `forEach()`
2. Learn **String Methods**: `split()`, `join()`, `slice()`
3. Understand **Basic Object Methods**: `Object.keys()`, `Object.values()`

### Intermediate Level
1. **Advanced Array Methods**: `reduce()`, `flat()`, `flatMap()`
2. **Function Methods**: `call()`, `apply()`, `bind()`
3. **Promise Basics**: `Promise.all()`, `async/await`

### Advanced Level
1. **Advanced Patterns**: Currying, Memoization, Composition
2. **Complex Promise Patterns**: Retry logic, Circuit breakers
3. **Performance Optimization**: Time complexity, Best practices

## 🎯 Key Features by File

| File | Lines of Code | Key Concepts | Difficulty |
|------|---------------|--------------|------------|
| `filter.js` | 374 | Filtering, Predicates, Performance | ⭐⭐ |
| `map.js` | 255 | Transformation, Immutability | ⭐⭐ |
| `reduce.js` | 425 | Accumulation, Complex operations | ⭐⭐⭐ |
| `forEach.js` | 330+ | Side effects, Iteration | ⭐ |
| `find.js` | 380+ | Searching, Short-circuiting | ⭐⭐ |
| `some-every.js` | 400+ | Boolean testing, Validation | ⭐⭐ |
| `sort.js` | 450+ | Sorting algorithms, Comparators | ⭐⭐⭐ |
| `flat-flatMap.js` | 380+ | Nested arrays, Flattening | ⭐⭐ |
| `slice-splice.js` | 450+ | Array manipulation, Mutation | ⭐⭐ |
| `includes-indexOf.js` | 430+ | Search methods, Performance | ⭐⭐ |

## 🔍 What Makes This Different

- ✅ **Not just documentation** - Working code examples
- ✅ **Custom implementations** - Understand how methods work internally
- ✅ **Real-world use cases** - Practical applications
- ✅ **Performance insights** - Time/space complexity analysis
- ✅ **Best practices** - Common pitfalls and how to avoid them
- ✅ **Comprehensive coverage** - 100+ methods and patterns
- ✅ **Modern JavaScript** - ES2015+ features and latest standards
- ✅ **Beginner to Advanced** - Progressive learning path

## 💻 Browser Console Testing

You can also test these methods directly in your browser console:

```javascript
// Open browser DevTools (F12)
// Copy and paste any example from the files

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Ways to Contribute
- ⭐ Star this repository
- 🐛 Report bugs or issues
- 💡 Suggest new methods or improvements
- 📝 Improve documentation
- ✨ Add more examples and use cases
- 🔧 Fix typos or code improvements

### Contribution Guidelines
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📖 Additional Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specifications](https://tc39.es/ecma262/)

## 🎓 Who Is This For?

- **Beginners** learning JavaScript fundamentals
- **Intermediate developers** looking to deepen their understanding
- **Interview preparation** - Common method questions
- **Teachers/Educators** - Teaching resources with examples
- **Code reviewers** - Reference for best practices

## 📊 Statistics

- **Total Files**: 10+ comprehensive implementations
- **Total Examples**: 200+ practical examples
- **Methods Covered**: 100+ JavaScript methods
- **Lines of Code**: 8,000+ lines of documented code
- **Custom Implementations**: 15+ from-scratch implementations

## 📝 License

This project is open source and available under the **MIT License**.

## 🌟 Star History

If you find this repository helpful, please consider giving it a star! ⭐

---

**Made with ❤️ for the JavaScript community**

Happy coding! 🚀