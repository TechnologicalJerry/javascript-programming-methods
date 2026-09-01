/**
 * Math Built-in Object Methods Collection
 * 
 * Description:
 * This file demonstrates standard Math static methods in JavaScript:
 * - Rounding: floor(), ceil(), round(), trunc()
 * - Min/Max & Powers: min(), max(), pow(), sqrt(), cbrt(), hypot()
 * - Sign & Random: abs(), sign(), random(), clz32(), imul(), fround()
 * - Logarithms & Exponents: log(), log10(), log2(), exp()
 * 
 * Time Complexity: O(1) for arithmetic calculations, O(n) for Math.min/Math.max with n elements
 * Space Complexity: O(1)
 */

// ========================================
// 1. ROUNDING METHODS
// ========================================

console.log("=== Math Rounding Methods Examples ===\n");

// Example 1: Comparing floor, ceil, round, and trunc across positive and negative numbers
console.log("Example 1: Comparison of Math.floor(), Math.ceil(), Math.round(), Math.trunc()");

const testValues = [4.7, 4.2, -4.2, -4.7, 0.0, -0.0];

console.log("Value\t| floor\t| ceil\t| round\t| trunc");
console.log("-----------------------------------------------");
testValues.forEach(val => {
    console.log(`${val}\t| ${Math.floor(val)}\t| ${Math.ceil(val)}\t| ${Math.round(val)}\t| ${Math.trunc(val)}`);
});
console.log();

// Practical rounding to specific decimal precision
function roundToPrecision(value, decimals = 2) {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
}
console.log("roundToPrecision(3.14159, 2):", roundToPrecision(3.14159, 2)); // 3.14
console.log("roundToPrecision(3.14159, 4):", roundToPrecision(3.14159, 4)); // 3.1416
console.log();

// ========================================
// 2. MIN/MAX, POWERS & ROOTS
// ========================================

console.log("=== Math Min, Max, Powers & Roots Examples ===\n");

// Example 2: Math.min() and Math.max()
console.log("Example 2: Math.min() and Math.max()");

const numbers = [15, 42, 8, 99, 23, -5];
console.log("Minimum value in array:", Math.min(...numbers)); // -5
console.log("Maximum value in array:", Math.max(...numbers)); // 99

// Clamping a number between min and max boundaries
function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
console.log("clamp(150, 0, 100):", clamp(150, 0, 100)); // 100
console.log("clamp(-20, 0, 100):", clamp(-20, 0, 100)); // 0
console.log("clamp(50, 0, 100):", clamp(50, 0, 100));   // 50
console.log();

// Example 3: Powers, Square Roots & Hypotenuse
console.log("Example 3: Math.pow(), Math.sqrt(), Math.cbrt(), Math.hypot()");

console.log("Math.pow(2, 8):", Math.pow(2, 8));       // 256
console.log("Math.sqrt(144):", Math.sqrt(144));      // 12
console.log("Math.cbrt(27):", Math.cbrt(27));        // 3
console.log("Math.hypot(3, 4):", Math.hypot(3, 4));   // 5 (Pythagorean 3-4-5 triangle)
console.log();

// ========================================
// 3. SIGN, RANDOM & UTILITIES
// ========================================

console.log("=== Math Sign, Random & Utilities Examples ===\n");

// Example 4: Math.abs() and Math.sign()
console.log("Example 4: Math.abs() and Math.sign()");

console.log("Math.abs(-42):", Math.abs(-42));   // 42
console.log("Math.sign(100):", Math.sign(100));  // 1
console.log("Math.sign(-50):", Math.sign(-50));  // -1
console.log("Math.sign(0):", Math.sign(0));      // 0
console.log("Math.sign(-0):", Math.sign(-0));    // -0
console.log();

// Example 5: Math.random() utilities
console.log("Example 5: Random number generation");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random integer between 1 and 10:", getRandomInt(1, 10));
console.log("Random integer between 1 and 10:", getRandomInt(1, 10));
console.log();

// Example 6: Fast 32-bit Integer Math (Math.imul & Math.clz32)
console.log("Example 6: Fast 32-bit integer math");
console.log("Math.imul(2, 4):", Math.imul(2, 4));                 // 8 (Fast C-like 32-bit multiplication)
console.log("Math.clz32(1):", Math.clz32(1));                     // 31 (Count leading zero bits in 32-bit binary)
console.log("Math.clz32(1000):", Math.clz32(1000));               // 22
console.log();

// ========================================
// 4. LOGARITHMS & EXPONENTS
// ========================================

console.log("=== Math Logarithms & Exponents Examples ===\n");

// Example 7: Math.log(), Math.log10(), Math.log2(), Math.exp()
console.log("Example 7: Math logarithms and exponential methods");

console.log("Math.exp(1) (Euler's number e):", Math.exp(1));    // ~2.71828
console.log("Math.log(Math.E) (Natural log):", Math.log(Math.E)); // 1
console.log("Math.log10(1000):", Math.log10(1000));              // 3
console.log("Math.log2(64):", Math.log2(64));                    // 6
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Use Math.trunc() when you want to drop decimal digits without rounding down negative numbers.");
console.log("2. Use Math.hypot(x, y) instead of Math.sqrt(x*x + y*y) to avoid intermediate overflow/underflow.");
console.log("3. Use Math.imul() when implementing fast 32-bit hashing algorithms in JavaScript.");
console.log("4. Spread arrays into Math.min(...arr) carefully for large arrays to avoid call stack limits.");
