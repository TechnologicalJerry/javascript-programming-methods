/**
 * String Methods Collection
 * 
 * Description:
 * This file demonstrates various string manipulation methods in JavaScript.
 * Strings in JavaScript are immutable, so these methods return new strings
 * rather than modifying the original string.
 */

// ========================================
// STRING LENGTH AND CHARACTER ACCESS
// ========================================

console.log("=== String Length and Character Access ===\n");

const sampleString = "Hello, World!";

// Example 1: String length
console.log("Example 1: String length");
console.log(`String: "${sampleString}"`);
console.log("Length:", sampleString.length);
console.log();

// Example 2: charAt() - Get character at specific index
console.log("Example 2: charAt() method");
console.log("Character at index 0:", sampleString.charAt(0));
console.log("Character at index 7:", sampleString.charAt(7));
console.log("Character at index 50 (out of bounds):", sampleString.charAt(50)); // Returns empty string
console.log();

// Example 3: charCodeAt() - Get character code at specific index
console.log("Example 3: charCodeAt() method");
console.log("Character code at index 0:", sampleString.charCodeAt(0)); // 'H' = 72
console.log("Character code at index 1:", sampleString.charCodeAt(1)); // 'e' = 101
console.log();

// Example 4: Bracket notation (alternative to charAt)
console.log("Example 4: Bracket notation");
console.log("Character at index 0:", sampleString[0]);
console.log("Character at index 7:", sampleString[7]);
console.log("Character at index 50:", sampleString[50]); // Returns undefined
console.log();

// ========================================
// STRING SEARCHING METHODS
// ========================================

console.log("=== String Searching Methods ===\n");

const searchString = "JavaScript is awesome! JavaScript rocks!";

// Example 5: indexOf() - Find first occurrence
console.log("Example 5: indexOf() method");
console.log(`String: "${searchString}"`);
console.log("Index of 'JavaScript':", searchString.indexOf("JavaScript"));
console.log("Index of 'awesome':", searchString.indexOf("awesome"));
console.log("Index of 'Python':", searchString.indexOf("Python")); // Returns -1
console.log("Index of 'Script' starting from position 10:", searchString.indexOf("Script", 10));
console.log();

// Example 6: lastIndexOf() - Find last occurrence
console.log("Example 6: lastIndexOf() method");
console.log("Last index of 'JavaScript':", searchString.lastIndexOf("JavaScript"));
console.log("Last index of 'is':", searchString.lastIndexOf("is"));
console.log();

// Example 7: includes() - Check if string contains substring
console.log("Example 7: includes() method");
console.log("Contains 'JavaScript':", searchString.includes("JavaScript"));
console.log("Contains 'Python':", searchString.includes("Python"));
console.log("Contains 'JAVASCRIPT' (case sensitive):", searchString.includes("JAVASCRIPT"));
console.log();

// Example 8: startsWith() and endsWith()
console.log("Example 8: startsWith() and endsWith() methods");
console.log("Starts with 'Java':", searchString.startsWith("Java"));
console.log("Starts with 'Script':", searchString.startsWith("Script"));
console.log("Ends with 'rocks!':", searchString.endsWith("rocks!"));
console.log("Ends with 'awesome!':", searchString.endsWith("awesome!"));
console.log();

// ========================================
// STRING EXTRACTION METHODS
// ========================================

console.log("=== String Extraction Methods ===\n");

const extractString = "Hello, World! How are you?";

// Example 9: slice() - Extract part of string
console.log("Example 9: slice() method");
console.log(`Original: "${extractString}"`);
console.log("slice(0, 5):", extractString.slice(0, 5));
console.log("slice(7, 12):", extractString.slice(7, 12));
console.log("slice(-4):", extractString.slice(-4)); // Last 4 characters
console.log("slice(-9, -1):", extractString.slice(-9, -1));
console.log();

// Example 10: substring() - Similar to slice, but handles negative indices differently
console.log("Example 10: substring() method");
console.log("substring(0, 5):", extractString.substring(0, 5));
console.log("substring(7, 12):", extractString.substring(7, 12));
console.log("substring(-4):", extractString.substring(-4)); // Treats negative as 0
console.log("substring(12, 7):", extractString.substring(12, 7)); // Swaps arguments
console.log();

// Example 11: substr() - Extract substring with start index and length (deprecated)
console.log("Example 11: substr() method (deprecated, use slice instead)");
console.log("substr(0, 5):", extractString.substr(0, 5));
console.log("substr(7, 5):", extractString.substr(7, 5));
console.log("substr(-4, 4):", extractString.substr(-4, 4));
console.log();

// ========================================
// STRING CASE METHODS
// ========================================

console.log("=== String Case Methods ===\n");

const caseString = "Hello World JavaScript Programming";

// Example 12: Case conversion methods
console.log("Example 12: Case conversion");
console.log(`Original: "${caseString}"`);
console.log("toLowerCase():", caseString.toLowerCase());
console.log("toUpperCase():", caseString.toUpperCase());
console.log();

// Example 13: Locale-specific case conversion
console.log("Example 13: Locale-specific case conversion");
const turkishString = "İstanbul";
console.log(`Turkish string: "${turkishString}"`);
console.log("Standard toLowerCase():", turkishString.toLowerCase());
console.log("Turkish toLowerCase():", turkishString.toLocaleLowerCase('tr-TR'));
console.log();

// ========================================
// STRING REPLACEMENT METHODS
// ========================================

console.log("=== String Replacement Methods ===\n");

const replaceString = "Hello World! Hello Universe!";

// Example 14: replace() - Replace first occurrence
console.log("Example 14: replace() method");
console.log(`Original: "${replaceString}"`);
console.log("Replace 'Hello' with 'Hi':", replaceString.replace("Hello", "Hi"));
console.log("Replace with regex (all occurrences):", replaceString.replace(/Hello/g, "Hi"));
console.log();

// Example 15: replaceAll() - Replace all occurrences (ES2021)
console.log("Example 15: replaceAll() method");
console.log("Replace all 'Hello' with 'Hi':", replaceString.replaceAll("Hello", "Hi"));
console.log();

// Example 16: Advanced replacement with function
console.log("Example 16: Replace with function");
const numberString = "I have 5 apples and 10 oranges";
const replacedWithFunction = numberString.replace(/\d+/g, (match) => {
    return parseInt(match) * 2;
});
console.log(`Original: "${numberString}"`);
console.log("Double all numbers:", replacedWithFunction);
console.log();

// ========================================
// STRING SPLITTING AND JOINING
// ========================================

console.log("=== String Splitting Methods ===\n");

// Example 17: split() - Split string into array
console.log("Example 17: split() method");
const csvData = "apple,banana,cherry,date";
console.log(`CSV data: "${csvData}"`);
console.log("Split by comma:", csvData.split(","));

const sentence = "The quick brown fox jumps";
console.log(`Sentence: "${sentence}"`);
console.log("Split by space:", sentence.split(" "));
console.log("Split with limit:", sentence.split(" ", 3));
console.log("Split into characters:", sentence.split(""));
console.log();

// Example 18: join() equivalent (Array method, but commonly used with strings)
console.log("Example 18: Joining arrays back to strings");
const words = ["Hello", "beautiful", "world"];
console.log("Array:", words);
console.log("Join with space:", words.join(" "));
console.log("Join with '-':", words.join("-"));
console.log("Join with no separator:", words.join(""));
console.log();

// ========================================
// STRING TRIMMING METHODS
// ========================================

console.log("=== String Trimming Methods ===\n");

const trimString = "   Hello World!   ";

// Example 19: Trimming whitespace
console.log("Example 19: Trimming methods");
console.log(`Original: "${trimString}"`);
console.log(`trim(): "${trimString.trim()}"`);
console.log(`trimStart(): "${trimString.trimStart()}"`);
console.log(`trimEnd(): "${trimString.trimEnd()}"`);
console.log();

// Example 20: Custom trimming
console.log("Example 20: Custom trimming");
const customTrimString = "###Hello World!###";
const customTrimmed = customTrimString.replace(/^#+|#+$/g, "");
console.log(`Original: "${customTrimString}"`);
console.log(`Custom trimmed: "${customTrimmed}"`);
console.log();

// ========================================
// STRING PADDING METHODS
// ========================================

console.log("=== String Padding Methods ===\n");

// Example 21: Padding methods (ES2017)
console.log("Example 21: Padding methods");
const shortString = "42";
console.log(`Original: "${shortString}"`);
console.log("padStart(5, '0'):", shortString.padStart(5, "0"));
console.log("padEnd(5, '0'):", shortString.padEnd(5, "0"));
console.log("padStart(8, 'abc'):", shortString.padStart(8, "abc"));
console.log();

// Example 22: Practical padding use case
console.log("Example 22: Practical padding - formatting time");
function formatTime(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

console.log("Format time (9, 5, 3):", formatTime(9, 5, 3));
console.log("Format time (14, 30, 45):", formatTime(14, 30, 45));
console.log();

// ========================================
// STRING REPETITION
// ========================================

console.log("=== String Repetition ===\n");

// Example 23: repeat() method
console.log("Example 23: repeat() method");
const repeatString = "Ha";
console.log(`Original: "${repeatString}"`);
console.log("repeat(3):", repeatString.repeat(3));
console.log("repeat(5):", repeatString.repeat(5));

// Practical use case: Creating separators
const separator = "-".repeat(50);
console.log("Separator:", separator);
console.log();

// ========================================
// REGULAR EXPRESSION METHODS
// ========================================

console.log("=== Regular Expression Methods ===\n");

const regexString = "Contact me at john@example.com or jane@test.org";

// Example 24: match() - Find matches
console.log("Example 24: match() method");
console.log(`String: "${regexString}"`);
const emailMatches = regexString.match(/\w+@\w+\.\w+/g);
console.log("Email matches:", emailMatches);
console.log();

// Example 25: search() - Find position of match
console.log("Example 25: search() method");
const firstEmailPosition = regexString.search(/\w+@\w+\.\w+/);
console.log("First email position:", firstEmailPosition);
console.log();

// Example 26: matchAll() - Get all matches with details (ES2020)
console.log("Example 26: matchAll() method");
const allMatches = [...regexString.matchAll(/(\w+)@(\w+)\.(\w+)/g)];
console.log("All email matches with groups:");
allMatches.forEach((match, index) => {
    console.log(`  Match ${index + 1}:`, {
        full: match[0],
        username: match[1],
        domain: match[2],
        tld: match[3]
    });
});
console.log();

// ========================================
// STRING CONCATENATION
// ========================================

console.log("=== String Concatenation ===\n");

// Example 27: concat() method
console.log("Example 27: concat() method");
const str1 = "Hello";
const str2 = "World";
console.log(`"${str1}".concat(", ", "${str2}", "!"):`), str1.concat(", ", str2, "!");

// Modern approaches
console.log("Template literals:", `${str1}, ${str2}!`);
console.log("Plus operator:", str1 + ", " + str2 + "!");
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

console.log("=== Practical Use Cases ===\n");

// Use Case 1: Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log("Use Case 1: Email validation");
console.log("john@example.com:", isValidEmail("john@example.com"));
console.log("invalid-email:", isValidEmail("invalid-email"));
console.log();

// Use Case 2: URL slug generation
function createSlug(title) {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

console.log("Use Case 2: URL slug generation");
console.log("'Hello World!':", createSlug("Hello World!"));
console.log("'JavaScript: The Good Parts':", createSlug("JavaScript: The Good Parts"));
console.log();

// Use Case 3: Text truncation with ellipsis
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
}

console.log("Use Case 3: Text truncation");
const longText = "This is a very long text that needs to be truncated for display purposes";
console.log("Original:", longText);
console.log("Truncated (30):", truncateText(longText, 30));
console.log();

// Use Case 4: Phone number formatting
function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone; // Return original if not 10 digits
}

console.log("Use Case 4: Phone number formatting");
console.log("1234567890:", formatPhoneNumber("1234567890"));
console.log("(123) 456-7890:", formatPhoneNumber("(123) 456-7890"));
console.log();

// Use Case 5: Password strength checker
function checkPasswordStrength(password) {
    const checks = {
        length: password.length >= 8,
        lowercase: /[a-z]/.test(password),
        uppercase: /[A-Z]/.test(password),
        number: /\d/.test(password),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };
    
    const score = Object.values(checks).filter(Boolean).length;
    const strength = score < 3 ? 'Weak' : score < 5 ? 'Medium' : 'Strong';
    
    return { checks, score, strength };
}

console.log("Use Case 5: Password strength");
console.log("'password':", checkPasswordStrength("password"));
console.log("'Password123!':", checkPasswordStrength("Password123!"));
console.log();

// ========================================
// PERFORMANCE CONSIDERATIONS
// ========================================

console.log("=== Performance Considerations ===\n");

// String concatenation performance comparison
const iterations = 100000;

console.time("String concatenation with +");
let str = "";
for (let i = 0; i < iterations; i++) {
    str += "a";
}
console.timeEnd("String concatenation with +");

console.time("Array join method");
const arr = [];
for (let i = 0; i < iterations; i++) {
    arr.push("a");
}
const joinedStr = arr.join("");
console.timeEnd("Array join method");

console.log("Both methods produce equal length strings:", str.length === joinedStr.length);
console.log();

console.log("=== Best Practices ===");
console.log("1. Use template literals for readable string interpolation");
console.log("2. Use specific methods like includes() instead of indexOf() !== -1");
console.log("3. Consider performance when concatenating many strings");
console.log("4. Use trim() to handle user input");
console.log("5. Use regular expressions for complex pattern matching");
console.log("6. Remember strings are immutable in JavaScript");
console.log("7. Use startsWith()/endsWith() for prefix/suffix checks");