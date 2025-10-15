/**
 * Utility Methods Collection
 * 
 * Description:
 * This file contains various utility functions that are commonly used
 * in JavaScript development. These include type checking, data manipulation,
 * validation, formatting, and general helper functions.
 */

// ========================================
// TYPE CHECKING UTILITIES
// ========================================

console.log("=== Type Checking Utilities ===\n");

// Example 1: Robust type checking functions
console.log("Example 1: Type checking functions");

const TypeChecker = {
    isString: (value) => typeof value === 'string',
    isNumber: (value) => typeof value === 'number' && !isNaN(value),
    isBoolean: (value) => typeof value === 'boolean',
    isFunction: (value) => typeof value === 'function',
    isObject: (value) => value !== null && typeof value === 'object' && !Array.isArray(value),
    isArray: (value) => Array.isArray(value),
    isNull: (value) => value === null,
    isUndefined: (value) => value === undefined,
    isNullOrUndefined: (value) => value == null,
    isEmpty: (value) => {
        if (value == null) return true;
        if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
        if (typeof value === 'object') return Object.keys(value).length === 0;
        return false;
    },
    isDate: (value) => value instanceof Date && !isNaN(value.getTime()),
    isRegExp: (value) => value instanceof RegExp,
    isPromise: (value) => value && typeof value.then === 'function',
    
    // Get detailed type information
    getType: (value) => {
        if (value === null) return 'null';
        if (Array.isArray(value)) return 'array';
        if (value instanceof Date) return 'date';
        if (value instanceof RegExp) return 'regexp';
        return typeof value;
    }
};

// Test type checking
const testValues = [
    42, "hello", true, [], {}, null, undefined, 
    new Date(), /regex/, Promise.resolve(), function() {}
];

console.log("Type checking results:");
testValues.forEach(value => {
    console.log(`${JSON.stringify(value)}: ${TypeChecker.getType(value)}`);
});

console.log("\nEmpty value checks:");
const emptyValues = ["", [], {}, null, undefined, 0];
emptyValues.forEach(value => {
    console.log(`${JSON.stringify(value)} is empty: ${TypeChecker.isEmpty(value)}`);
});

console.log();

// ========================================
// DEEP CLONING AND COMPARISON
// ========================================

console.log("=== Deep Cloning and Comparison ===\n");

// Example 2: Deep clone implementation
console.log("Example 2: Deep cloning");

function deepClone(obj) {
    // Handle null and non-objects
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }
    
    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    // Handle Array
    if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
    }
    
    // Handle RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj.source, obj.flags);
    }
    
    // Handle Objects
    const cloned = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    
    return cloned;
}

const originalObject = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding"],
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    birthDate: new Date("1993-01-01"),
    pattern: /[a-z]+/gi
};

const clonedObject = deepClone(originalObject);

console.log("Original:", originalObject);
console.log("Cloned:", clonedObject);

// Modify original to test deep cloning
originalObject.hobbies.push("swimming");
originalObject.address.city = "New City";

console.log("After modifying original:");
console.log("Original hobbies:", originalObject.hobbies);
console.log("Cloned hobbies:", clonedObject.hobbies);
console.log("Original city:", originalObject.address.city);
console.log("Cloned city:", clonedObject.address.city);
console.log();

// Example 3: Deep comparison
console.log("Example 3: Deep comparison");

function deepEqual(a, b) {
    if (a === b) return true;
    
    if (a === null || b === null) return false;
    if (typeof a !== 'object' || typeof b !== 'object') return false;
    
    // Handle arrays
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    
    // Handle dates
    if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
    }
    
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    
    if (keysA.length !== keysB.length) return false;
    
    for (let key of keysA) {
        if (!keysB.includes(key)) return false;
        if (!deepEqual(a[key], b[key])) return false;
    }
    
    return true;
}

const obj1 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj2 = { a: 1, b: { c: 2, d: [3, 4] } };
const obj3 = { a: 1, b: { c: 2, d: [3, 5] } };

console.log("obj1 == obj2:", deepEqual(obj1, obj2)); // true
console.log("obj1 == obj3:", deepEqual(obj1, obj3)); // false
console.log();

// ========================================
// ARRAY UTILITIES
// ========================================

console.log("=== Array Utilities ===\n");

// Example 4: Array utility functions
console.log("Example 4: Array utilities");

const ArrayUtils = {
    // Remove duplicates
    unique: (arr) => [...new Set(arr)],
    
    // Flatten nested arrays
    flatten: (arr) => arr.reduce((flat, item) => 
        Array.isArray(item) ? flat.concat(ArrayUtils.flatten(item)) : flat.concat(item), []),
    
    // Chunk array into smaller arrays
    chunk: (arr, size) => {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    },
    
    // Get random element
    sample: (arr) => arr[Math.floor(Math.random() * arr.length)],
    
    // Shuffle array
    shuffle: (arr) => {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    },
    
    // Group by property
    groupBy: (arr, key) => {
        return arr.reduce((groups, item) => {
            const groupKey = typeof key === 'function' ? key(item) : item[key];
            groups[groupKey] = groups[groupKey] || [];
            groups[groupKey].push(item);
            return groups;
        }, {});
    },
    
    // Find differences between arrays
    difference: (arr1, arr2) => arr1.filter(item => !arr2.includes(item)),
    
    // Find intersection
    intersection: (arr1, arr2) => arr1.filter(item => arr2.includes(item)),
    
    // Partition array based on predicate
    partition: (arr, predicate) => {
        return arr.reduce((acc, item) => {
            acc[predicate(item) ? 0 : 1].push(item);
            return acc;
        }, [[], []]);
    }
};

// Test array utilities
const numbers = [1, 2, 2, 3, 4, 4, 5];
const nestedArray = [1, [2, 3], [4, [5, 6]], 7];
const people = [
    { name: "John", age: 25, department: "IT" },
    { name: "Jane", age: 30, department: "HR" },
    { name: "Bob", age: 35, department: "IT" },
    { name: "Alice", age: 28, department: "HR" }
];

console.log("Original numbers:", numbers);
console.log("Unique:", ArrayUtils.unique(numbers));
console.log("Chunked (size 3):", ArrayUtils.chunk(numbers, 3));
console.log("Sample:", ArrayUtils.sample(numbers));
console.log("Shuffled:", ArrayUtils.shuffle(numbers));

console.log("\nNested array:", nestedArray);
console.log("Flattened:", ArrayUtils.flatten(nestedArray));

console.log("\nPeople grouped by department:");
console.log(ArrayUtils.groupBy(people, 'department'));

console.log("\nArray operations:");
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log("Array 1:", arr1);
console.log("Array 2:", arr2);
console.log("Difference (arr1 - arr2):", ArrayUtils.difference(arr1, arr2));
console.log("Intersection:", ArrayUtils.intersection(arr1, arr2));

const [evens, odds] = ArrayUtils.partition(numbers, n => n % 2 === 0);
console.log("Evens:", evens);
console.log("Odds:", odds);
console.log();

// ========================================
// STRING UTILITIES
// ========================================

console.log("=== String Utilities ===\n");

// Example 5: String utility functions
console.log("Example 5: String utilities");

const StringUtils = {
    // Capitalize first letter
    capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase(),
    
    // Convert to title case
    titleCase: (str) => str.replace(/\w\S*/g, txt => 
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
    
    // Convert to camelCase
    camelCase: (str) => str.replace(/[-_\s]+(.)?/g, (_, char) => 
        char ? char.toUpperCase() : ''),
    
    // Convert to kebab-case
    kebabCase: (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-').toLowerCase(),
    
    // Convert to snake_case
    snakeCase: (str) => str.replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/\s+/g, '_').toLowerCase(),
    
    // Truncate with ellipsis
    truncate: (str, length, suffix = '...') => 
        str.length > length ? str.slice(0, length) + suffix : str,
    
    // Count words
    wordCount: (str) => str.trim().split(/\s+/).filter(word => word.length > 0).length,
    
    // Reverse string
    reverse: (str) => str.split('').reverse().join(''),
    
    // Check if palindrome
    isPalindrome: (str) => {
        const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
    },
    
    // Generate random string
    random: (length = 8, chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789') => {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    },
    
    // Escape HTML
    escapeHtml: (str) => str.replace(/[&<>"']/g, (match) => {
        const htmlEscapes = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return htmlEscapes[match];
    }),
    
    // Strip HTML tags
    stripHtml: (str) => str.replace(/<[^>]*>/g, ''),
    
    // Format template
    template: (str, vars) => str.replace(/\{\{(\w+)\}\}/g, (match, key) => vars[key] || match)
};

// Test string utilities
const testString = "hello world javascript";
console.log("Original:", testString);
console.log("Capitalize:", StringUtils.capitalize(testString));
console.log("Title case:", StringUtils.titleCase(testString));
console.log("Camel case:", StringUtils.camelCase(testString));
console.log("Kebab case:", StringUtils.kebabCase("Hello World JavaScript"));
console.log("Snake case:", StringUtils.snakeCase("Hello World JavaScript"));

const longString = "This is a very long string that needs to be truncated";
console.log("Truncated:", StringUtils.truncate(longString, 20));
console.log("Word count:", StringUtils.wordCount(longString));
console.log("Reversed:", StringUtils.reverse("hello"));

console.log("Is 'racecar' a palindrome?", StringUtils.isPalindrome("racecar"));
console.log("Is 'A man a plan a canal Panama' a palindrome?", 
    StringUtils.isPalindrome("A man a plan a canal Panama"));

console.log("Random string:", StringUtils.random(12));

const htmlString = '<p>Hello "World" & <script>alert("test")</script></p>';
console.log("HTML escaped:", StringUtils.escapeHtml(htmlString));
console.log("HTML stripped:", StringUtils.stripHtml(htmlString));

const template = "Hello {{name}}, welcome to {{place}}!";
const templateVars = { name: "John", place: "our website" };
console.log("Template result:", StringUtils.template(template, templateVars));
console.log();

// ========================================
// NUMBER AND MATH UTILITIES
// ========================================

console.log("=== Number and Math Utilities ===\n");

// Example 6: Number utility functions
console.log("Example 6: Number utilities");

const NumberUtils = {
    // Round to specified decimal places
    round: (num, decimals = 0) => {
        const factor = Math.pow(10, decimals);
        return Math.round(num * factor) / factor;
    },
    
    // Clamp number between min and max
    clamp: (num, min, max) => Math.min(Math.max(num, min), max),
    
    // Check if number is in range
    inRange: (num, min, max) => num >= min && num <= max,
    
    // Generate random number in range
    randomBetween: (min, max) => Math.random() * (max - min) + min,
    
    // Generate random integer in range
    randomInt: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    
    // Calculate percentage
    percentage: (part, total) => total === 0 ? 0 : (part / total) * 100,
    
    // Format currency
    formatCurrency: (amount, currency = 'USD', locale = 'en-US') => {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(amount);
    },
    
    // Format with commas
    formatNumber: (num, locale = 'en-US') => {
        return new Intl.NumberFormat(locale).format(num);
    },
    
    // Convert bytes to human readable format
    formatBytes: (bytes, decimals = 2) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + ' ' + sizes[i];
    },
    
    // Calculate average
    average: (numbers) => numbers.reduce((sum, num) => sum + num, 0) / numbers.length,
    
    // Calculate median
    median: (numbers) => {
        const sorted = [...numbers].sort((a, b) => a - b);
        const mid = Math.floor(sorted.length / 2);
        return sorted.length % 2 === 0 
            ? (sorted[mid - 1] + sorted[mid]) / 2 
            : sorted[mid];
    },
    
    // Calculate standard deviation
    standardDeviation: (numbers) => {
        const avg = NumberUtils.average(numbers);
        const squaredDiffs = numbers.map(num => Math.pow(num - avg, 2));
        const avgSquaredDiff = NumberUtils.average(squaredDiffs);
        return Math.sqrt(avgSquaredDiff);
    }
};

// Test number utilities
const testNumbers = [10, 15, 20, 25, 30, 35, 40];

console.log("Numbers:", testNumbers);
console.log("Average:", NumberUtils.average(testNumbers));
console.log("Median:", NumberUtils.median(testNumbers));
console.log("Standard deviation:", NumberUtils.round(NumberUtils.standardDeviation(testNumbers), 2));

console.log("\nNumber formatting:");
console.log("Round 3.14159 to 2 decimals:", NumberUtils.round(3.14159, 2));
console.log("Clamp 150 between 0-100:", NumberUtils.clamp(150, 0, 100));
console.log("Is 50 in range 25-75?", NumberUtils.inRange(50, 25, 75));
console.log("Random between 1-10:", NumberUtils.randomInt(1, 10));
console.log("25 is what % of 200?", NumberUtils.percentage(25, 200));

console.log("\nFormatted numbers:");
console.log("Currency:", NumberUtils.formatCurrency(1234.56));
console.log("Large number:", NumberUtils.formatNumber(1234567));
console.log("File size:", NumberUtils.formatBytes(1024 * 1024 * 2.5));
console.log();

// ========================================
// DATE UTILITIES
// ========================================

console.log("=== Date Utilities ===\n");

// Example 7: Date utility functions
console.log("Example 7: Date utilities");

const DateUtils = {
    // Format date
    format: (date, format = 'YYYY-MM-DD') => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        const seconds = String(d.getSeconds()).padStart(2, '0');
        
        return format
            .replace('YYYY', year)
            .replace('MM', month)
            .replace('DD', day)
            .replace('HH', hours)
            .replace('mm', minutes)
            .replace('ss', seconds);
    },
    
    // Add days to date
    addDays: (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    },
    
    // Calculate difference in days
    daysBetween: (date1, date2) => {
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date(date1);
        const secondDate = new Date(date2);
        return Math.round(Math.abs((firstDate - secondDate) / oneDay));
    },
    
    // Check if date is today
    isToday: (date) => {
        const today = new Date();
        const checkDate = new Date(date);
        return today.toDateString() === checkDate.toDateString();
    },
    
    // Check if date is weekend
    isWeekend: (date) => {
        const day = new Date(date).getDay();
        return day === 0 || day === 6; // Sunday or Saturday
    },
    
    // Get start of day
    startOfDay: (date) => {
        const result = new Date(date);
        result.setHours(0, 0, 0, 0);
        return result;
    },
    
    // Get end of day
    endOfDay: (date) => {
        const result = new Date(date);
        result.setHours(23, 59, 59, 999);
        return result;
    },
    
    // Get relative time string
    getRelativeTime: (date) => {
        const now = new Date();
        const diffMs = now - new Date(date);
        const diffSeconds = Math.floor(diffMs / 1000);
        const diffMinutes = Math.floor(diffSeconds / 60);
        const diffHours = Math.floor(diffMinutes / 60);
        const diffDays = Math.floor(diffHours / 24);
        
        if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
        if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
        return 'Just now';
    }
};

// Test date utilities
const now = new Date();
const pastDate = new Date('2023-01-01');
const futureDate = DateUtils.addDays(now, 30);

console.log("Current date:", DateUtils.format(now, 'YYYY-MM-DD HH:mm:ss'));
console.log("Past date:", DateUtils.format(pastDate, 'DD/MM/YYYY'));
console.log("Future date:", DateUtils.format(futureDate, 'YYYY-MM-DD'));

console.log("Days between now and past:", DateUtils.daysBetween(now, pastDate));
console.log("Is today today?", DateUtils.isToday(now));
console.log("Is past date weekend?", DateUtils.isWeekend(pastDate));

console.log("Start of today:", DateUtils.startOfDay(now));
console.log("End of today:", DateUtils.endOfDay(now));

// Test relative time with different dates
const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

console.log("One hour ago:", DateUtils.getRelativeTime(oneHourAgo));
console.log("One day ago:", DateUtils.getRelativeTime(oneDayAgo));
console.log();

// ========================================
// VALIDATION UTILITIES
// ========================================

console.log("=== Validation Utilities ===\n");

// Example 8: Validation functions
console.log("Example 8: Validation utilities");

const ValidationUtils = {
    // Email validation
    isEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    
    // Phone validation (US format)
    isPhone: (phone) => /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone),
    
    // URL validation
    isUrl: (url) => {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    },
    
    // Credit card validation (Luhn algorithm)
    isCreditCard: (number) => {
        const num = number.replace(/\D/g, '');
        if (num.length < 13 || num.length > 19) return false;
        
        let sum = 0;
        let alternate = false;
        
        for (let i = num.length - 1; i >= 0; i--) {
            let digit = parseInt(num.charAt(i));
            
            if (alternate) {
                digit *= 2;
                if (digit > 9) digit -= 9;
            }
            
            sum += digit;
            alternate = !alternate;
        }
        
        return sum % 10 === 0;
    },
    
    // Password strength
    getPasswordStrength: (password) => {
        let score = 0;
        const checks = {
            length: password.length >= 8,
            lowercase: /[a-z]/.test(password),
            uppercase: /[A-Z]/.test(password),
            numbers: /\d/.test(password),
            symbols: /[!@#$%^&*(),.?":{}|<>]/.test(password)
        };
        
        score = Object.values(checks).filter(Boolean).length;
        
        let strength = 'Very Weak';
        if (score >= 2) strength = 'Weak';
        if (score >= 3) strength = 'Medium';
        if (score >= 4) strength = 'Strong';
        if (score === 5) strength = 'Very Strong';
        
        return { score, strength, checks };
    },
    
    // Custom validation builder
    createValidator: (rules) => {
        return (value) => {
            const errors = [];
            
            for (const [key, rule] of Object.entries(rules)) {
                if (!rule.test(value)) {
                    errors.push(rule.message || `${key} validation failed`);
                }
            }
            
            return {
                isValid: errors.length === 0,
                errors
            };
        };
    }
};

// Test validation utilities
const testEmails = ['test@example.com', 'invalid.email', 'user@domain.co.uk'];
const testPhones = ['(555) 123-4567', '555-123-4567', '5551234567', 'invalid'];
const testUrls = ['https://example.com', 'ftp://files.example.com', 'not-a-url'];

console.log("Email validation:");
testEmails.forEach(email => {
    console.log(`  ${email}: ${ValidationUtils.isEmail(email)}`);
});

console.log("\nPhone validation:");
testPhones.forEach(phone => {
    console.log(`  ${phone}: ${ValidationUtils.isPhone(phone)}`);
});

console.log("\nURL validation:");
testUrls.forEach(url => {
    console.log(`  ${url}: ${ValidationUtils.isUrl(url)}`);
});

console.log("\nCredit card validation:");
const testCards = ['4532015112830366', '1234567890123456'];
testCards.forEach(card => {
    console.log(`  ${card}: ${ValidationUtils.isCreditCard(card)}`);
});

console.log("\nPassword strength:");
const testPasswords = ['weak', 'Password1', 'StrongP@ssw0rd!'];
testPasswords.forEach(password => {
    const result = ValidationUtils.getPasswordStrength(password);
    console.log(`  "${password}": ${result.strength} (${result.score}/5)`);
});

// Custom validator example
const usernameValidator = ValidationUtils.createValidator({
    minLength: {
        test: (value) => value.length >= 3,
        message: 'Username must be at least 3 characters'
    },
    maxLength: {
        test: (value) => value.length <= 20,
        message: 'Username must be no more than 20 characters'
    },
    alphanumeric: {
        test: (value) => /^[a-zA-Z0-9_]+$/.test(value),
        message: 'Username can only contain letters, numbers, and underscores'
    }
});

console.log("\nCustom username validation:");
const testUsernames = ['ab', 'validUsername', 'invalid-username!', 'a'.repeat(25)];
testUsernames.forEach(username => {
    const result = usernameValidator(username);
    console.log(`  "${username}": ${result.isValid ? 'Valid' : result.errors.join(', ')}`);
});

console.log();

// ========================================
// PERFORMANCE UTILITIES
// ========================================

console.log("=== Performance Utilities ===\n");

// Example 9: Performance measurement utilities
console.log("Example 9: Performance utilities");

const PerformanceUtils = {
    // Measure function execution time
    measureTime: async (fn, ...args) => {
        const start = performance.now();
        const result = await fn(...args);
        const end = performance.now();
        return {
            result,
            time: end - start
        };
    },
    
    // Benchmark function multiple times
    benchmark: async (fn, iterations = 1000, ...args) => {
        const times = [];
        
        for (let i = 0; i < iterations; i++) {
            const start = performance.now();
            await fn(...args);
            const end = performance.now();
            times.push(end - start);
        }
        
        const total = times.reduce((sum, time) => sum + time, 0);
        const average = total / iterations;
        const min = Math.min(...times);
        const max = Math.max(...times);
        
        return {
            iterations,
            total: NumberUtils.round(total, 3),
            average: NumberUtils.round(average, 3),
            min: NumberUtils.round(min, 3),
            max: NumberUtils.round(max, 3)
        };
    },
    
    // Throttle function calls
    throttle: (func, limit) => {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    // Debounce function calls
    debounce: (func, delay) => {
        let timeoutId;
        return function(...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    }
};

// Test performance utilities
function expensiveCalculation(n) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        result += Math.sqrt(i);
    }
    return result;
}

PerformanceUtils.measureTime(expensiveCalculation, 100000)
    .then(({ result, time }) => {
        console.log(`Calculation result: ${NumberUtils.round(result, 2)}`);
        console.log(`Execution time: ${NumberUtils.round(time, 3)}ms`);
    });

PerformanceUtils.benchmark(expensiveCalculation, 100, 10000)
    .then(stats => {
        console.log("Benchmark results:", stats);
    });

console.log("\n=== Best Practices ===");
console.log("1. Use appropriate type checking for reliable code");
console.log("2. Implement deep cloning for complex object manipulation");
console.log("3. Leverage utility functions to avoid code duplication");
console.log("4. Validate user input thoroughly");
console.log("5. Use performance utilities to identify bottlenecks");
console.log("6. Choose the right data structure for your use case");
console.log("7. Handle edge cases in utility functions");
console.log("8. Consider using libraries like Lodash for production code");
console.log("9. Test utility functions thoroughly");
console.log("10. Document utility functions with clear examples");