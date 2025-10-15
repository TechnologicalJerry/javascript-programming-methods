/**
 * Object Methods Collection
 * 
 * Description:
 * This file demonstrates various object manipulation methods in JavaScript.
 * These methods are essential for working with objects, properties, and prototypes.
 */

// ========================================
// OBJECT CREATION METHODS
// ========================================

console.log("=== Object Creation Methods ===\n");

// Example 1: Object.create() - Create object with specified prototype
console.log("Example 1: Object.create()");

const personPrototype = {
    greet() {
        return `Hello, I'm ${this.name}`;
    },
    getAge() {
        return this.age;
    }
};

const person1 = Object.create(personPrototype);
person1.name = "John";
person1.age = 30;

const person2 = Object.create(personPrototype, {
    name: { value: "Jane", writable: true, enumerable: true },
    age: { value: 25, writable: true, enumerable: true }
});

console.log("Person1:", person1);
console.log("Person1 greet:", person1.greet());
console.log("Person2:", person2);
console.log("Person2 greet:", person2.greet());
console.log("person1 prototype === personPrototype:", Object.getPrototypeOf(person1) === personPrototype);
console.log();

// Example 2: Object.assign() - Copy properties from source objects to target
console.log("Example 2: Object.assign()");

const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

const result = Object.assign(target, source1, source2);

console.log("Target (modified):", target);
console.log("Result (same as target):", result);
console.log("target === result:", target === result);

// Shallow copy example
const original = { a: 1, nested: { b: 2 } };
const copy = Object.assign({}, original);

console.log("Original:", original);
console.log("Copy:", copy);

original.nested.b = 99;
console.log("After modifying original.nested.b:");
console.log("Original:", original);
console.log("Copy (affected due to shallow copy):", copy);
console.log();

// ========================================
// OBJECT PROPERTY INSPECTION
// ========================================

console.log("=== Object Property Inspection ===\n");

const sampleObject = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "swimming"]
};

// Example 3: Object.keys() - Get enumerable property names
console.log("Example 3: Object.keys()");
console.log("Object:", sampleObject);
console.log("Keys:", Object.keys(sampleObject));
console.log();

// Example 4: Object.values() - Get enumerable property values
console.log("Example 4: Object.values()");
console.log("Values:", Object.values(sampleObject));
console.log();

// Example 5: Object.entries() - Get key-value pairs
console.log("Example 5: Object.entries()");
console.log("Entries:", Object.entries(sampleObject));

// Convert back to object
const fromEntries = Object.fromEntries(Object.entries(sampleObject));
console.log("Reconstructed object:", fromEntries);
console.log();

// Example 6: Object.getOwnPropertyNames() - Get all property names (including non-enumerable)
console.log("Example 6: Object.getOwnPropertyNames()");

const objWithNonEnumerable = {};
Object.defineProperty(objWithNonEnumerable, 'hidden', {
    value: 'secret',
    enumerable: false
});
objWithNonEnumerable.visible = 'public';

console.log("Object.keys():", Object.keys(objWithNonEnumerable));
console.log("Object.getOwnPropertyNames():", Object.getOwnPropertyNames(objWithNonEnumerable));
console.log();

// ========================================
// PROPERTY DESCRIPTORS
// ========================================

console.log("=== Property Descriptors ===\n");

// Example 7: Object.defineProperty() - Define property with descriptor
console.log("Example 7: Object.defineProperty()");

const product = {};

Object.defineProperty(product, 'name', {
    value: 'Laptop',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(product, 'price', {
    value: 999,
    writable: false, // Read-only
    enumerable: true,
    configurable: false
});

Object.defineProperty(product, 'id', {
    value: 'PROD-001',
    writable: false,
    enumerable: false, // Won't show in Object.keys()
    configurable: false
});

console.log("Product:", product);
console.log("Keys (enumerable only):", Object.keys(product));

try {
    product.price = 1200; // This won't work
    console.log("After trying to change price:", product.price);
} catch (error) {
    console.log("Error changing price:", error.message);
}
console.log();

// Example 8: Object.getOwnPropertyDescriptor() - Get property descriptor
console.log("Example 8: Property descriptors");
console.log("name descriptor:", Object.getOwnPropertyDescriptor(product, 'name'));
console.log("price descriptor:", Object.getOwnPropertyDescriptor(product, 'price'));
console.log();

// Example 9: Object.defineProperties() - Define multiple properties
console.log("Example 9: Object.defineProperties()");

const car = {};
Object.defineProperties(car, {
    make: {
        value: 'Toyota',
        writable: true,
        enumerable: true
    },
    model: {
        value: 'Camry',
        writable: true,
        enumerable: true
    },
    year: {
        value: 2023,
        writable: false,
        enumerable: true
    }
});

console.log("Car:", car);
console.log();

// ========================================
// OBJECT STATE MODIFICATION
// ========================================

console.log("=== Object State Modification ===\n");

// Example 10: Object.freeze() - Make object immutable
console.log("Example 10: Object.freeze()");

const frozenObj = { a: 1, b: 2, nested: { c: 3 } };
Object.freeze(frozenObj);

console.log("Before freeze attempt:", frozenObj);
frozenObj.a = 99; // This won't work
frozenObj.newProp = "new"; // This won't work
console.log("After freeze attempt:", frozenObj);

// Note: freeze is shallow
frozenObj.nested.c = 99; // This will work!
console.log("After modifying nested property:", frozenObj);

console.log("Is frozen:", Object.isFrozen(frozenObj));
console.log();

// Example 11: Object.seal() - Prevent adding/removing properties
console.log("Example 11: Object.seal()");

const sealedObj = { a: 1, b: 2 };
Object.seal(sealedObj);

console.log("Before seal attempt:", sealedObj);
sealedObj.a = 99; // This will work
sealedObj.newProp = "new"; // This won't work
console.log("After seal attempt:", sealedObj);

console.log("Is sealed:", Object.isSealed(sealedObj));
console.log();

// Example 12: Object.preventExtensions() - Prevent adding properties
console.log("Example 12: Object.preventExtensions()");

const nonExtensibleObj = { a: 1, b: 2 };
Object.preventExtensions(nonExtensibleObj);

console.log("Before prevention attempt:", nonExtensibleObj);
nonExtensibleObj.a = 99; // This will work
nonExtensibleObj.newProp = "new"; // This won't work
delete nonExtensibleObj.b; // This will work
console.log("After prevention attempt:", nonExtensibleObj);

console.log("Is extensible:", Object.isExtensible(nonExtensibleObj));
console.log();

// ========================================
// PROTOTYPE METHODS
// ========================================

console.log("=== Prototype Methods ===\n");

// Example 13: Object.getPrototypeOf() and Object.setPrototypeOf()
console.log("Example 13: Prototype manipulation");

const animal = {
    speak() {
        return "Animal sound";
    }
};

const dog = {
    breed: "Labrador"
};

console.log("Before setting prototype:");
console.log("dog.speak:", dog.speak);

Object.setPrototypeOf(dog, animal);

console.log("After setting prototype:");
console.log("dog.speak():", dog.speak());
console.log("Object.getPrototypeOf(dog) === animal:", Object.getPrototypeOf(dog) === animal);
console.log();

// Example 14: hasOwnProperty() - Check if property belongs to object (not inherited)
console.log("Example 14: hasOwnProperty()");

console.log("dog.hasOwnProperty('breed'):", dog.hasOwnProperty('breed'));
console.log("dog.hasOwnProperty('speak'):", dog.hasOwnProperty('speak'));
console.log("'breed' in dog:", 'breed' in dog);
console.log("'speak' in dog:", 'speak' in dog);
console.log();

// ========================================
// PROPERTY ENUMERATION
// ========================================

console.log("=== Property Enumeration ===\n");

// Example 15: for...in vs Object.keys()
console.log("Example 15: Property enumeration");

const parent = { inheritedProp: 'inherited' };
const child = Object.create(parent);
child.ownProp = 'own';

console.log("for...in loop (includes inherited):");
for (let prop in child) {
    console.log(`  ${prop}: ${child[prop]}`);
}

console.log("Object.keys() (own enumerable only):");
Object.keys(child).forEach(prop => {
    console.log(`  ${prop}: ${child[prop]}`);
});
console.log();

// ========================================
// OBJECT COMPARISON AND UTILITY
// ========================================

console.log("=== Object Comparison and Utility ===\n");

// Example 16: Object.is() - Same-value equality
console.log("Example 16: Object.is()");

console.log("Object.is(1, 1):", Object.is(1, 1));
console.log("Object.is(NaN, NaN):", Object.is(NaN, NaN)); // true (unlike ===)
console.log("Object.is(0, -0):", Object.is(0, -0)); // false (unlike ===)
console.log("Object.is({}, {}):", Object.is({}, {})); // false (different objects)

const obj = {};
console.log("Object.is(obj, obj):", Object.is(obj, obj)); // true (same reference)
console.log();

// Example 17: Custom deep comparison function
console.log("Example 17: Deep object comparison");

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (obj1 == null || obj2 == null) return false;
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (!keys2.includes(key)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }
    
    return true;
}

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { a: 1, b: { c: 2 } };
const obj3 = { a: 1, b: { c: 3 } };

console.log("deepEqual(obj1, obj2):", deepEqual(obj1, obj2));
console.log("deepEqual(obj1, obj3):", deepEqual(obj1, obj3));
console.log();

// ========================================
// PRACTICAL USE CASES
// ========================================

console.log("=== Practical Use Cases ===\n");

// Use Case 1: Object transformation
console.log("Use Case 1: Object transformation");

const users = [
    { id: 1, firstName: "John", lastName: "Doe", email: "john@example.com" },
    { id: 2, firstName: "Jane", lastName: "Smith", email: "jane@example.com" }
];

// Transform to lookup object
const userLookup = users.reduce((lookup, user) => {
    lookup[user.id] = user;
    return lookup;
}, {});

console.log("User lookup:", userLookup);

// Transform properties
const userSummaries = users.map(user => ({
    id: user.id,
    fullName: `${user.firstName} ${user.lastName}`,
    email: user.email
}));

console.log("User summaries:", userSummaries);
console.log();

// Use Case 2: Configuration merging
console.log("Use Case 2: Configuration merging");

const defaultConfig = {
    apiUrl: 'https://api.example.com',
    timeout: 5000,
    retries: 3,
    features: {
        logging: true,
        analytics: false
    }
};

const userConfig = {
    timeout: 10000,
    features: {
        analytics: true,
        newFeature: true
    }
};

// Deep merge function
function deepMerge(target, source) {
    const result = { ...target };
    
    for (let key in source) {
        if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
            result[key] = deepMerge(result[key] || {}, source[key]);
        } else {
            result[key] = source[key];
        }
    }
    
    return result;
}

const finalConfig = deepMerge(defaultConfig, userConfig);
console.log("Default config:", defaultConfig);
console.log("User config:", userConfig);
console.log("Final config:", finalConfig);
console.log();

// Use Case 3: Object validation
console.log("Use Case 3: Object validation");

function validateUser(user, schema) {
    const errors = [];
    
    for (let field in schema) {
        const rule = schema[field];
        const value = user[field];
        
        if (rule.required && (value === undefined || value === null)) {
            errors.push(`${field} is required`);
            continue;
        }
        
        if (value !== undefined && rule.type && typeof value !== rule.type) {
            errors.push(`${field} must be of type ${rule.type}`);
        }
        
        if (rule.minLength && value.length < rule.minLength) {
            errors.push(`${field} must be at least ${rule.minLength} characters`);
        }
    }
    
    return { isValid: errors.length === 0, errors };
}

const userSchema = {
    name: { required: true, type: 'string', minLength: 2 },
    email: { required: true, type: 'string' },
    age: { required: false, type: 'number' }
};

const validUser = { name: "John Doe", email: "john@example.com", age: 30 };
const invalidUser = { name: "J", age: "thirty" };

console.log("Valid user validation:", validateUser(validUser, userSchema));
console.log("Invalid user validation:", validateUser(invalidUser, userSchema));
console.log();

// Use Case 4: Object caching with getters/setters
console.log("Use Case 4: Object caching with getters/setters");

function createCachedCalculator() {
    const cache = {};
    
    return {
        get expensiveOperation() {
            if (!cache.expensiveOperation) {
                console.log("Calculating expensive operation...");
                cache.expensiveOperation = Math.random() * 1000;
            }
            return cache.expensiveOperation;
        },
        
        clearCache() {
            Object.keys(cache).forEach(key => delete cache[key]);
        }
    };
}

const calculator = createCachedCalculator();
console.log("First call:", calculator.expensiveOperation);
console.log("Second call (cached):", calculator.expensiveOperation);
calculator.clearCache();
console.log("After cache clear:", calculator.expensiveOperation);
console.log();

// ========================================
// ADVANCED PATTERNS
// ========================================

console.log("=== Advanced Patterns ===\n");

// Example 18: Proxy for object observation
console.log("Example 18: Object observation with Proxy");

function createObservableObject(target, onChange) {
    return new Proxy(target, {
        set(obj, prop, value) {
            const oldValue = obj[prop];
            obj[prop] = value;
            onChange(prop, value, oldValue);
            return true;
        }
    });
}

const observedObj = createObservableObject({}, (prop, newValue, oldValue) => {
    console.log(`Property ${prop} changed from ${oldValue} to ${newValue}`);
});

observedObj.name = "John";
observedObj.age = 30;
observedObj.name = "Jane";
console.log();

// Example 19: Object factory pattern
console.log("Example 19: Object factory pattern");

function createPerson(name, age) {
    return Object.freeze({
        name,
        age,
        greet() {
            return `Hello, I'm ${this.name} and I'm ${this.age} years old.`;
        },
        birthday() {
            return createPerson(this.name, this.age + 1);
        }
    });
}

const person = createPerson("Alice", 25);
console.log("Person:", person.greet());

const olderPerson = person.birthday();
console.log("After birthday:", olderPerson.greet());
console.log("Original person unchanged:", person.greet());
console.log();

console.log("=== Best Practices ===");
console.log("1. Use Object.create() for prototypal inheritance");
console.log("2. Use Object.assign() for shallow copying and merging");
console.log("3. Use Object.freeze() for immutable objects");
console.log("4. Use hasOwnProperty() to check own properties");
console.log("5. Use Object.keys() instead of for...in when you only want own properties");
console.log("6. Use property descriptors for fine-grained control");
console.log("7. Consider using Proxy for advanced object behavior");
console.log("8. Use Object.is() for same-value equality checks");