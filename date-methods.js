/**
 * Date Built-in Object Methods Collection
 * 
 * Description:
 * This file demonstrates standard Date object methods in JavaScript:
 * - Static methods: Date.now(), Date.parse(), Date.UTC()
 * - Getters: getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), getSeconds(), getTime()
 * - Setters: setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), setSeconds()
 * - Formatting & Localization: toISOString(), toUTCString(), toLocaleDateString(), toLocaleTimeString(), toLocaleString()
 * - Practical Calculations: Date arithmetic, differences, relative time ("x hours ago")
 * 
 * Time Complexity: O(1) for all standard date getter/setter operations
 * Space Complexity: O(1)
 */

// ========================================
// 1. DATE CREATION & STATIC METHODS
// ========================================

console.log("=== Date Creation & Static Methods Examples ===\n");

// Example 1: Date.now(), Date.parse(), Date.UTC()
console.log("Example 1: Static Date methods");

const nowTimestamp = Date.now();
console.log("Date.now() timestamp (ms since Epoch):", nowTimestamp);

const parsedTimestamp = Date.parse("2026-09-01T12:00:00Z");
console.log("Date.parse('2026-09-01T12:00:00Z'):", parsedTimestamp);

const utcTimestamp = Date.UTC(2026, 8, 1, 12, 0, 0); // Month is 0-indexed (8 = September)
console.log("Date.UTC(2026, 8, 1, 12, 0, 0):", utcTimestamp);
console.log();

// ========================================
// 2. DATE GETTERS
// ========================================

console.log("=== Date Getter Methods Examples ===\n");

// Example 2: Inspecting date components
console.log("Example 2: Getter methods on current Date instance");
const d = new Date("2026-09-01T14:30:45.500Z");

console.log("Full Year:", d.getFullYear());             // 2026
console.log("Month (0-11):", d.getMonth());              // 8 (September)
console.log("Date of month (1-31):", d.getDate());       // 1
console.log("Day of week (0-6):", d.getDay());           // 2 (Tuesday)
console.log("Hours (UTC):", d.getUTCHours());            // 14
console.log("Minutes (UTC):", d.getUTCMinutes());        // 30
console.log("Seconds:", d.getSeconds());                 // 45
console.log("Milliseconds:", d.getMilliseconds());       // 500
console.log("Time in ms (getTime):", d.getTime());       // Epoch ms
console.log("Timezone Offset (minutes):", d.getTimezoneOffset());
console.log();

// ========================================
// 3. DATE SETTERS & ARITHMETIC
// ========================================

console.log("=== Date Setter Methods & Arithmetic Examples ===\n");

// Example 3: Modifying date instance and date arithmetic
console.log("Example 3: Modifying date components");
const targetDate = new Date("2026-01-01T00:00:00Z");

targetDate.setFullYear(2027);
targetDate.setMonth(5); // June
targetDate.setDate(15);
console.log("After setting year 2027, month 5 (June), date 15:", targetDate.toISOString());

// Adding days to a date safely (handles month/year rollover automatically!)
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

const baseDate = new Date("2026-02-25");
const addedDate = addDays(baseDate, 10);
console.log("2026-02-25 + 10 days (handles Leap/Feb rollover):", addedDate.toISOString().split("T")[0]); // 2026-03-07
console.log();

// ========================================
// 4. FORMATTING & LOCALIZATION
// ========================================

console.log("=== Date Formatting & Localization Examples ===\n");

// Example 4: Formatting methods
console.log("Example 4: String conversion & locale formatting");
const sampleDate = new Date("2026-09-01T18:45:00Z");

console.log("toISOString():", sampleDate.toISOString());          // "2026-09-01T18:45:00.000Z"
console.log("toUTCString():", sampleDate.toUTCString());          // "Tue, 01 Sep 2026 18:45:00 GMT"
console.log("toDateString():", sampleDate.toDateString());        // "Tue Sep 01 2026"
console.log("toTimeString():", sampleDate.toTimeString());        // Local time string

// Locale formatting (Intl / toLocaleString)
console.log("toLocaleDateString ('en-US'):", sampleDate.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
console.log("toLocaleDateString ('de-DE'):", sampleDate.toLocaleDateString("de-DE"));
console.log();

// ========================================
// PRACTICAL CALCULATIONS
// ========================================

console.log("=== Practical Date Utilities ===\n");

// Utility 1: Calculate difference in days between two dates
function getDaysDifference(date1, date2) {
    const msPerDay = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    return Math.floor((utc2 - utc1) / msPerDay);
}

const start = new Date("2026-01-01");
const end = new Date("2026-09-01");
console.log("Days difference between 2026-01-01 and 2026-09-01:", getDaysDifference(start, end)); // 243 days

// Utility 2: Relative time string ("2 hours ago", "in 5 minutes")
function getRelativeTimeString(date) {
    const diffMs = Date.now() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays} day(s) ago`;
    if (diffHours > 0) return `${diffHours} hour(s) ago`;
    if (diffMin > 0) return `${diffMin} minute(s) ago`;
    return "just now";
}

const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000);
console.log("Relative time for 2 hours ago:", getRelativeTimeString(twoHoursAgo));
console.log();

// ========================================
// BEST PRACTICES
// ========================================

console.log("=== Best Practices ===");
console.log("1. Remember months in JavaScript Date are 0-indexed (0 = Jan, 11 = Dec).");
console.log("2. Use Date.now() instead of new Date().getTime() when only needing timestamp.");
console.log("3. Use toISOString() for API payloads and standardized database storage.");
console.log("4. Use Intl.DateTimeFormat or toLocaleDateString() for localized user-facing UI strings.");
