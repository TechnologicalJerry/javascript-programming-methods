/**
 * Number & BigInt Built-in Object Methods Collection
 * 
 * Description:
 * This file demonstrates JavaScript Number static methods, Number instance methods, and BigInt operations:
 * - Number Static Methods: isInteger(), isFinite(), isNaN(), isSafeInteger(), parseInt(), parseFloat()
 * - Number Instance Methods: toFixed(), toPrecision(), toExponential(), toString(radix)
 * - BigInt Methods & Operations: BigInt(), BigInt.asIntN(), BigInt.asUintN(), arbitrary precision arithmetic
 * 
 * Time Complexity: O(1) arithmetic & static checks, O(k) for string conversion where k is string length
 * Space Complexity: O(1)
 */

// ========================================
// 1. NUMBER STATIC METHODS
// ========================================

console.log("=== Number Static Methods Examples ===\n");

// Example 1: Type & safety checks
console.log("Example 1: Number type and safety static methods");

console.log("Number.isInteger(42):", Number.isInteger(42));               // true
console.log("Number.isInteger(42.5):", Number.isInteger(42.5));           // false
console.log("Number.isInteger('42'):", Number.isInteger('42'));           // false (strict type requirement)

console.log("\nNumber.isFinite(100):", Number.isFinite(100));             // true
console.log("Number.isFinite(Infinity):", Number.isFinite(Infinity));     // false
console.log("Number.isFinite('100'):", Number.isFinite('100'));           // false (unlike global isFinite)

console.log("\nNumber.isNaN(NaN):", Number.isNaN(NaN));                   // true
console.log("Number.isNaN('NaN'):", Number.isNaN('NaN'));                 // false (unlike global isNaN)

console.log("\nNumber.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);         // 9007199254740991 (2^53 - 1)
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);         // -9007199254740991
console.log("Number.isSafeInteger(9007199254740991):", Number.isSafeInteger(9007199254740991)); // true
console.log("Number.isSafeInteger(9007199254740992):", Number.isSafeInteger(9007199254740992)); // false
console.log();

// Example 2: Parsing strings into numbers
console.log("Example 2: Number.parseInt() and Number.parseFloat()");

console.log("Number.parseInt('42px'):", Number.parseInt('42px', 10));     // 42
console.log("Number.parseInt('0xFF', 16):", Number.parseInt('0xFF', 16));  // 255 (hexadecimal)
console.log("Number.parseInt('1010', 2):", Number.parseInt('1010', 2));   // 10 (binary)

console.log("Number.parseFloat('3.14159em'):", Number.parseFloat('3.14159em')); // 3.14159
console.log();

// ========================================
// 2. NUMBER INSTANCE METHODS
// ========================================

console.log("=== Number Instance Methods Examples ===\n");

// Example 3: Formatting numbers
console.log("Example 3: Formatting numbers (toFixed, toPrecision, toExponential, toString)");

const num = 123.456789;

console.log("toFixed(2):", num.toFixed(2));                 // "123.46" (Fixed decimal representation)
console.log("toFixed(0):", num.toFixed(0));                 // "123"
console.log("toPrecision(4):", num.toPrecision(4));         // "123.5" (Significant digits)
console.log("toExponential(2):", num.toExponential(2));     // "1.23e+2"

// Number radix conversion (binary, octal, hex)
const val = 255;
console.log("val.toString(2) (Binary):", val.toString(2));  // "11111111"
console.log("val.toString(8) (Octal):", val.toString(8));   // "377"
console.log("val.toString(16) (Hex):", val.toString(16));   // "ff"
console.log();

// ========================================
// 3. BIGINT METHODS & ARITHMETIC
// ========================================

console.log("=== BigInt Methods & Operations Examples ===\n");

// Example 4: Creating BigInts and basic operations
console.log("Example 4: BigInt for arbitrary-precision integers");

const bigInt1 = 9007199254740991n; // 'n' suffix
const bigInt2 = BigInt("9007199254740992");

const sumBigInt = bigInt1 + bigInt2;
console.log("BigInt sum:", sumBigInt.toString()); // 18014398509481983n

const productBigInt = bigInt1 * 2n;
console.log("BigInt product:", productBigInt.toString());

// BigInt wrapping functions (BigInt.asIntN, BigInt.asUintN)
const max64 = 2n ** 64n - 1n;
console.log("BigInt.asUintN(64, max64):", BigInt.asUintN(64, max64).toString());
console.log("BigInt.asIntN(64, max64):", BigInt.asIntN(64, max64).toString()); // -1n (signed 64-bit wrap)
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Prefer Number.isNaN() and Number.isFinite() over global isNaN() / isFinite() to prevent unwanted type coercion.");
console.log("2. Always specify the radix parameter (e.g. 10) in Number.parseInt(str, radix) to avoid octal/hex parsing bugs.");
console.log("3. Use BigInt for database IDs or financial values that exceed Number.MAX_SAFE_INTEGER.");
console.log("4. Do not mix BigInt and standard Number operands directly in math operations without explicit conversion.");
